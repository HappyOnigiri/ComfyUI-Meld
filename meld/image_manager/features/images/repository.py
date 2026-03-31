import hashlib
import json
import os
import sqlite3


def calculate_sha256(file_path: str) -> str | None:
    if not os.path.exists(file_path):
        return None
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()


def find_closest_parent(
    phash: str | None,
    cursor: sqlite3.Cursor,
    threshold: int | None = None,
    exclude_id: int | None = None,
    before_timestamp: float | None = None,
    sort_strategy: str = "phash_only",
) -> int | None:
    """
    Find the most likely parent image based on pHash distance.

    DOCUMENTATION FOR AI DEVELOPERS:
    There are two distinct types of thresholds used in this system:

    1. Auto-linking Threshold (gallery.auto_link_phash_threshold):
       - Used during new image registration and full library scans.
       - PURPOSE: To automatically establish a high-confidence lineage without manual intervention.
       - POLICY: Only link if there is a VERY high probability of relatedness. If not met,
         it's better to leave the image without a parent and let the user link it manually.
       - DEFAULT: 92% (pHash distance <= 5)

    2. Suggestion Threshold (gallery.suggest_phash_threshold):
       - Used for manual "Add source image" dialogs.
       - PURPOSE: To show a list of potential candidates that the user might want to link.
       - POLICY: Be more permissive to help users find relevant ancestors even if significant
         changes were made (e.g., changing many prompts or models).
       - DEFAULT: 82% (pHash distance <= 11)

    CRITICAL RULE: NEVER use the permissive Suggestion Threshold for automatic linking tasks.
    Doing so creates incorrect lineage data that is difficult for users to clean up.
    """
    if not phash:
        return None

    if threshold is None:
        # FALLBACK: Use Suggestion Threshold if no threshold is provided.
        # However, callers SHOULD provide the correct threshold based on the task.
        cursor.execute("SELECT value FROM settings WHERE key = ?", ("gallery.suggest_phash_threshold",))
        row = cursor.fetchone()
        if row:
            try:
                val = json.loads(row[0])
                if isinstance(val, (int, float)):
                    threshold = round(64 * (1 - val / 100))
                else:
                    threshold = 8
            except Exception:
                threshold = 8
        else:
            threshold = 8

    # Final fallback to ensure threshold is not None for type checkers
    if threshold is None:
        threshold = 8

    query = "SELECT id, phash, created_at FROM images WHERE phash IS NOT NULL AND deleted_at IS NULL"
    params: list[int | float] = []

    if exclude_id:
        query += " AND id != ?"
        params.append(exclude_id)

    if before_timestamp:
        query += " AND created_at < ?"
        params.append(before_timestamp)

    # For performance, we still want some order, but we'll do the final selection in Python
    query += " ORDER BY created_at DESC"

    cursor.execute(query, params)
    rows = cursor.fetchall()

    def hamming_distance(h1: str, h2: str) -> int:
        try:
            return bin(int(h1, 16) ^ int(h2, 16)).count("1")
        except Exception:
            return 999

    candidates = []
    for img_id, other_phash, other_created_at in rows:
        dist = hamming_distance(phash, other_phash)
        if dist <= threshold:
            candidates.append({"id": img_id, "dist": dist, "created_at": other_created_at})
            if dist == 0 and sort_strategy != "phash_created":
                return img_id  # Optimization: Exact match found and we don't need further sorting

    if not candidates:
        return None

    if sort_strategy == "phash_created" and before_timestamp:
        # Sort by "similarity bucket" first, then by recency.
        # This ensures that if multiple images are "similar enough" (e.g., distance <= 4),
        # the most recent one (immediate ancestor) is chosen as the parent.
        candidates.sort(key=lambda x: (x["dist"] // 5, -x["created_at"]))
    else:
        # Default: Sort by distance (ASC), then by created_at (DESC - most recent first)
        candidates.sort(key=lambda x: (x["dist"], -x["created_at"]))

    return candidates[0]["id"]


def inherit_tags(cursor: sqlite3.Cursor, child_id: int, parent_id: int) -> None:
    """Copy tags from parent image to child image."""
    if not parent_id:
        return
    cursor.execute(
        """
        INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id)
        SELECT ?, tag_id FROM tag_image_relations WHERE image_id = ?
    """,
        (child_id, parent_id),
    )


def permanent_delete(cursor: sqlite3.Cursor, img_id: int) -> None:
    """Permanently remove an image row and cascade to all relation tables.

    Clears parent_id on any child images so they are not left with a dangling
    foreign key reference.
    """
    cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
    cursor.execute("DELETE FROM images WHERE id = ?", (img_id,))
    cursor.execute("DELETE FROM positive_prompt_image_relations WHERE image_id = ?", (img_id,))
    cursor.execute("DELETE FROM negative_prompt_image_relations WHERE image_id = ?", (img_id,))
    cursor.execute("DELETE FROM model_image_relations WHERE image_id = ?", (img_id,))
    cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (img_id,))


def soft_delete(cursor: sqlite3.Cursor, img_id: int, timestamp: float) -> None:
    """Mark an image as soft-deleted by setting its deleted_at timestamp."""
    cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (timestamp, img_id))


def soft_delete_to_trash(cursor: sqlite3.Cursor, img_id: int, timestamp: float, new_filename: str) -> None:
    """Soft-delete an image and update its filename to the trash filename.

    Used when the physical file has been moved to the trash directory; the
    filename column is updated to the new trash-prefixed name so the file
    can be found and restored later.
    """
    cursor.execute(
        "UPDATE images SET deleted_at = ?, filename = ? WHERE id = ?",
        (timestamp, new_filename, img_id),
    )


def restore_image(cursor: sqlite3.Cursor, img_id: int) -> None:
    """Clear the deleted_at timestamp to restore a soft-deleted image."""
    cursor.execute("UPDATE images SET deleted_at = NULL WHERE id = ?", (img_id,))


def restore_image_with_rename(cursor: sqlite3.Cursor, img_id: int, new_filename: str) -> None:
    """Restore a soft-deleted image and update its filename.

    Used when the physical file has been moved back from the trash directory
    with a new (de-duplicated) name.
    """
    cursor.execute(
        "UPDATE images SET deleted_at = NULL, filename = ? WHERE id = ?",
        (new_filename, img_id),
    )


# SQLite has a maximum of 999 bound variables per statement.
# Reserve 1 slot for the timestamp parameter in bulk_soft_delete, so chunk at 900.
# bulk_permanent_delete has no extra params but uses the same limit for consistency.
_SQLITE_VAR_LIMIT = 900


def bulk_soft_delete(cursor: sqlite3.Cursor, img_ids: list[int], timestamp: float) -> None:
    """Soft-delete multiple images in batched UPDATE statements.

    Processes ids in chunks of _SQLITE_VAR_LIMIT to stay within SQLite's
    bound-variable limit (999).  The timestamp occupies one slot, so each
    chunk contains at most _SQLITE_VAR_LIMIT ids (total params = chunk + 1).
    """
    for i in range(0, len(img_ids), _SQLITE_VAR_LIMIT):
        chunk = img_ids[i : i + _SQLITE_VAR_LIMIT]
        placeholders = ",".join(["?"] * len(chunk))
        cursor.execute(
            f"UPDATE images SET deleted_at = ? WHERE id IN ({placeholders})",
            [timestamp, *chunk],
        )


def bulk_permanent_delete(cursor: sqlite3.Cursor, img_ids: list[int]) -> None:
    """Permanently delete multiple images in batched statements.

    Mirrors the operation order of permanent_delete() (single-row version):
      1. Clear parent_id on child images to avoid dangling references.
      2. Delete relation rows for all affected image ids.
      3. Delete the image rows themselves.
    Processes ids in chunks of _SQLITE_VAR_LIMIT.
    """
    relation_tables = (
        "positive_prompt_image_relations",
        "negative_prompt_image_relations",
        "model_image_relations",
        "tag_image_relations",
    )
    for i in range(0, len(img_ids), _SQLITE_VAR_LIMIT):
        chunk = img_ids[i : i + _SQLITE_VAR_LIMIT]
        placeholders = ",".join(["?"] * len(chunk))
        cursor.execute(
            f"UPDATE images SET parent_id = NULL WHERE parent_id IN ({placeholders})",
            chunk,
        )
        cursor.execute(
            f"DELETE FROM images WHERE id IN ({placeholders})",
            chunk,
        )
        for table in relation_tables:
            cursor.execute(
                f"DELETE FROM {table} WHERE image_id IN ({placeholders})",
                chunk,
            )


def collect_deleted_ancestors(cursor: sqlite3.Cursor, ids: list[int]) -> set[int]:
    """Return the set of deleted image ids (seeds + ancestors) that need restoring.

    Walks up the parent chain via a recursive CTE.  The traversal continues
    through a node only if that node itself is deleted, so live ancestors stop
    the walk — they do not need to be (and must not be) included in the result.
    """
    if not ids:
        return set()
    placeholders = ",".join(["?"] * len(ids))
    ancestor_query = f"""
        WITH RECURSIVE lineage AS (
            SELECT id, parent_id, deleted_at FROM images WHERE id IN ({placeholders})
            UNION ALL
            SELECT i.id, i.parent_id, i.deleted_at FROM images i
            JOIN lineage l ON i.id = l.parent_id
            WHERE l.deleted_at IS NOT NULL
        )
        SELECT id FROM lineage WHERE deleted_at IS NOT NULL
    """
    cursor.execute(ancestor_query, ids)
    return {row[0] for row in cursor.fetchall()}
