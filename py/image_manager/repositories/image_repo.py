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
