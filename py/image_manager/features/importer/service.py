import json
import logging
import os
import sqlite3
import threading
import time
from typing import Any

import folder_paths
import server
from PIL import Image

from ....load_image_configs.core.metadata_helper import MetadataHelper
from ...common.db.client import (
    TRASH_DIR,
    get_db_connection,
)
from ...common.model_repo import add_model_relation, get_or_create_model
from ...common.schemas import ScanStatus
from ..images.repository import calculate_sha256, find_closest_parent, inherit_tags
from ..settings.repository import get_all_settings

# State for scanning
_scan_state = ScanStatus(is_running=False, should_cancel=False)


def get_scan_state() -> ScanStatus:
    return _scan_state


def cancel_scan() -> None:
    _scan_state.should_cancel = True


def set_scan_running(running: bool) -> None:
    _scan_state.is_running = running
    if running:
        _scan_state.should_cancel = False
        _scan_state.new_count = 0
        _scan_state.updated_count = 0
        _scan_state.total_count = 0


def perform_cleanup() -> int:
    """Logic to logically delete image data that does not exist in the DB and permanently delete old trash items"""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        # 1. Logical delete missing files
        # Get all images that have not been deleted
        cursor.execute("SELECT id, filename, subfolder, type FROM images WHERE deleted_at IS NULL")
        images = cursor.fetchall()

        missing_count = 0
        now = time.time()
        for img_id, filename, subfolder, img_type in images:
            # Resolve path
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            elif img_type == "custom":
                base_dir = ""
            else:
                continue

            full_path = os.path.join(base_dir, subfolder, filename)

            # If file does not exist, record deletion timestamp (move to "ghost" trash)
            if not os.path.exists(full_path):
                cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))
                missing_count += 1

        # 2. Permanent delete old trash items
        db_settings = get_all_settings(cursor)
        retention_days = int(db_settings.get("gallery.trash_retention_days", 30))
        retention_seconds = retention_days * 24 * 60 * 60
        threshold = now - retention_seconds

        cursor.execute("SELECT id, filename FROM images WHERE deleted_at IS NOT NULL AND deleted_at < ?", (threshold,))
        to_delete = cursor.fetchall()

        for img_id, trash_filename in to_delete:
            trash_path = os.path.join(TRASH_DIR, trash_filename)
            if os.path.exists(trash_path):
                try:
                    os.remove(trash_path)
                except Exception:
                    pass
            # Update children and delete from DB
            cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
            cursor.execute("DELETE FROM images WHERE id = ?", (img_id,))
            # Cleanup relations
            cursor.execute("DELETE FROM positive_prompt_image_relations WHERE image_id = ?", (img_id,))
            cursor.execute("DELETE FROM negative_prompt_image_relations WHERE image_id = ?", (img_id,))
            cursor.execute("DELETE FROM model_image_relations WHERE image_id = ?", (img_id,))
            cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (img_id,))

        if missing_count > 0 or to_delete:
            conn.commit()
        return missing_count + len(to_delete)
    finally:
        conn.close()


def infer_parent_id(
    cursor: sqlite3.Cursor,
    filename: str | None = None,
    subfolder: str | None = None,
    img_type: str | None = None,
    phash: str | None = None,
    created_at: float | None = None,
    strategy: str = "phash_created",
    workflow_json: str | dict[str, Any] | None = None,
    prompt_json: str | dict[str, Any] | None = None,
    threshold: int | None = None,
) -> int | None:
    """
    Infer the parent ID for an image.
    This function is used for AUTOMATIC linking during registration or scan.

    DOCUMENTATION FOR AI DEVELOPERS:
    This function MUST use a strict threshold (gallery.auto_link_phash_threshold)
    by default. Automatic linking should only happen when there is high confidence
    that the images are related.

    - Auto-linking is for high-probability relationships.
    - If the relationship is ambiguous, DO NOT link automatically.
    - Users can always use the 'Add Source' dialog (which uses a more permissive
      threshold) to link images manually.
    """
    from ..images.service import extract_source_filenames

    parent_id = None
    if created_at is None:
        created_at = time.time()

    # Determine threshold for pHash matching
    if threshold is None:
        # Fetch auto-linking threshold from settings
        cursor.execute("SELECT value FROM settings WHERE key = ?", ("gallery.auto_link_phash_threshold",))
        row = cursor.fetchone()
        if row:
            try:
                val = json.loads(row[0])
                threshold = round(64 * (1 - val / 100))
            except Exception:
                threshold = 5  # Default distance for 92%
        else:
            threshold = 5

    # 1. Try to get source filenames (for filename_phash strategy)
    source_filenames = []
    if strategy == "filename_phash":
        if workflow_json or prompt_json:
            source_filenames = extract_source_filenames(workflow_json, prompt_json)
        elif filename and subfolder and img_type:
            # Fallback to reading from disk
            try:
                if img_type == "output":
                    base_dir = folder_paths.get_output_directory()
                elif img_type == "input":
                    base_dir = folder_paths.get_input_directory()
                elif img_type == "temp":
                    base_dir = folder_paths.get_temp_directory()
                elif img_type == "custom":
                    base_dir = ""
                else:
                    base_dir = None

                if base_dir is not None:
                    full_path = os.path.join(base_dir, subfolder, filename)
                    if os.path.exists(full_path):
                        _, _, _, wf, pr, _, _ = MetadataHelper.extract_metadata(full_path)
                        source_filenames = extract_source_filenames(wf, pr)
            except Exception:
                pass

        if source_filenames:
            placeholders = ",".join(["?"] * len(source_filenames))
            sql = (
                f"SELECT id FROM images WHERE filename IN ({placeholders}) "
                "AND deleted_at IS NULL AND created_at < ? ORDER BY created_at DESC LIMIT 1"
            )
            cursor.execute(sql, (*source_filenames, created_at))
            res = cursor.fetchone()
            if res:
                parent_id = res[0]

    # 2. Fallback to pHash match (or if strategy is pHash-based)
    if parent_id is None and phash:
        parent_id = find_closest_parent(
            phash, cursor, before_timestamp=created_at, sort_strategy=strategy, threshold=threshold
        )

    return parent_id


def count_images_recursive(path: str) -> int:
    """Helper to count images in a directory and all its subdirectories."""
    count = 0
    try:
        for _, _, files in os.walk(path):
            for f in files:
                if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    count += 1
    except (PermissionError, OSError):
        pass
    return count


def get_first_image_recursive(path: str) -> str | None:
    """Find the first image in a directory recursively."""
    try:
        for root, _, files in os.walk(path):
            for f in files:
                if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    return os.path.join(root, f)
    except (PermissionError, OSError):
        pass
    return None


def _scan_thread(
    base_dir: str,
    subfolder: str,
    img_type: str,
    recursive: bool,
    auto_link_parent: bool,
    tags: list[str] | None = None,
    link_strategy: str = "new_only",
) -> None:
    conn = None
    newly_registered_ids = set()
    updated_ids = set()
    new_count = 0
    total = 0
    processed = 0
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Get settings for matching strategy
        db_settings = get_all_settings(cursor)
        matching_strategy = db_settings.get("gallery.matching_strategy", "phash_created")

        def add_tags_to_image(img_id: int, tag_list: list[str] | None) -> None:
            if not tag_list:
                return
            # Deduplicate tags
            unique_tags = list(dict.fromkeys(tag_list))
            for tag_name in unique_tags:
                tag_name = tag_name.strip()
                if not tag_name:
                    continue
                # Get or create tag
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag_name,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    cursor.execute(
                        "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)", (img_id, tag_id)
                    )

        target_dir = os.path.join(base_dir, subfolder)
        image_files = []

        # Collect all image files
        for root, _, files in os.walk(target_dir):
            if not recursive and root != target_dir:
                continue
            for f in files:
                if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    image_files.append(os.path.join(root, f))

        total = len(image_files)

        # Step 1: Register all images
        all_target_ids: list[int] = []
        for full_path in image_files:
            if _scan_state.should_cancel:
                break

            try:
                # Basic info
                filename = os.path.basename(full_path)
                # subfolder relative to base_dir
                rel_path = os.path.relpath(os.path.dirname(full_path), base_dir)
                if rel_path == ".":
                    rel_path = ""

                actual_subfolder = rel_path
                if img_type == "custom":
                    actual_subfolder = os.path.abspath(os.path.dirname(full_path)).replace("\\", "/")

                # Check if already registered (by filename and subfolder or by sha256)
                sha256 = calculate_sha256(full_path)
                cursor.execute("SELECT id FROM images WHERE sha256 = ? AND deleted_at IS NULL", (sha256,))
                existing = cursor.fetchone()
                if existing:
                    image_id = existing[0]
                    all_target_ids.append(image_id)
                    # Even if already exists, add specified tags
                    if tags:
                        add_tags_to_image(image_id, tags)
                        updated_ids.add(image_id)
                        _scan_state.updated_count = len(updated_ids)

                    processed += 1
                    server.PromptServer.instance.send_sync(
                        "meld-scan-progress", {"current": processed, "total": total, "phase": "registering"}
                    )
                    continue

                # Extract metadata
                pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)
                timestamp = os.path.getmtime(full_path)

                # Get image dimensions
                width, height = 0, 0
                try:
                    with Image.open(full_path) as img:
                        width, height = img.size
                except Exception:
                    pass

                phash = None
                imagehash = MetadataHelper.get_imagehash()
                if imagehash is not None:
                    try:
                        with Image.open(full_path) as img:
                            phash = str(imagehash.phash(img))
                    except Exception:
                        pass

                # Insert Image
                sql = """
                    INSERT INTO images
                    (filename, subfolder, type, created_at, phash, sha256, width, height, deleted_at, positive_prompt, negative_prompt, workflow)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?)
                """
                cursor.execute(
                    sql,
                    (
                        filename,
                        actual_subfolder,
                        img_type,
                        timestamp,
                        phash,
                        sha256,
                        width,
                        height,
                        pos,
                        neg,
                        wf_json,
                    ),
                )
                image_id = cursor.lastrowid

                # Add specified tags
                if image_id is not None:
                    add_tags_to_image(image_id, tags)

                # Insert Model Relation
                if model:
                    m_id = get_or_create_model(cursor, model)
                    add_model_relation(cursor, image_id, m_id)

                if image_id is not None:
                    newly_registered_ids.add(image_id)
                    all_target_ids.append(image_id)
                new_count += 1

                # Insert Prompts
                pos_list = MetadataHelper.smart_split(pos) if pos else []
                neg_list = MetadataHelper.smart_split(neg) if neg else []

                for p in pos_list:
                    prompt_results = MetadataHelper.parse_prompt_with_weight(p)
                    for clean_name, strength in prompt_results:
                        if not clean_name:
                            continue
                        cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (clean_name,))
                        cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (clean_name,))
                        row = cursor.fetchone()
                        if row:
                            pp_id = row[0]
                            cursor.execute(
                                "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id, strength) VALUES (?, ?, ?)",
                                (image_id, pp_id, strength),
                            )

                for n in neg_list:
                    prompt_results = MetadataHelper.parse_prompt_with_weight(n)
                    for clean_name, strength in prompt_results:
                        if not clean_name:
                            continue
                        cursor.execute("INSERT OR IGNORE INTO negative_prompts (name) VALUES (?)", (clean_name,))
                        cursor.execute("SELECT id FROM negative_prompts WHERE name = ?", (clean_name,))
                        row = cursor.fetchone()
                        if row:
                            np_id = row[0]
                            cursor.execute(
                                "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id, strength) VALUES (?, ?, ?)",
                                (image_id, np_id, strength),
                            )

                processed += 1
                server.PromptServer.instance.send_sync(
                    "meld-scan-progress", {"current": processed, "total": total, "phase": "registering"}
                )

                # Commit periodically or at the end
                if processed % 10 == 0:
                    conn.commit()

            except Exception as e:
                logging.warning(f"[Meld] Failed to process {full_path}: {e}")
                processed += 1

        conn.commit()

        # Step 2: Parent Linking (Auto)
        effective_link_strategy = link_strategy
        if not auto_link_parent:
            effective_link_strategy = "none"

        if effective_link_strategy != "none" and not _scan_state.should_cancel:
            ids_to_link = list(newly_registered_ids) if effective_link_strategy == "new_only" else all_target_ids
            total_linking = len(ids_to_link)
            processed_linking = 0
            for img_id in ids_to_link:
                if _scan_state.should_cancel:
                    break

                # Get phash and metadata for linking
                cursor.execute(
                    "SELECT filename, subfolder, type, phash, created_at, parent_id FROM images WHERE id = ?", (img_id,)
                )
                row = cursor.fetchone()
                if not row:
                    processed_linking += 1
                    continue
                fname, subf, itype, iphash, icreated, current_parent_id = row

                parent_id = infer_parent_id(cursor, fname, subf, itype, iphash, icreated, strategy=matching_strategy)

                if (link_strategy == "all" or parent_id) and img_id is not None:
                    if parent_id != img_id:
                        if parent_id != current_parent_id:
                            cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (parent_id, img_id))
                            # Inherit tags if enabled and parent exists
                            if parent_id is not None and db_settings.get("gallery.inherit_tags", True):
                                inherit_tags(cursor, img_id, parent_id)
                            if img_id not in newly_registered_ids:
                                updated_ids.add(img_id)
                                _scan_state.updated_count = len(updated_ids)

                processed_linking += 1
                if processed_linking % 5 == 0 or processed_linking == total_linking:
                    server.PromptServer.instance.send_sync(
                        "meld-scan-progress",
                        {"current": processed_linking, "total": total_linking, "phase": "linking"},
                    )

            conn.commit()

    except Exception as e:
        logging.exception(f"[Meld] Scan thread failed: {e}")
    finally:
        if conn:
            conn.close()
        _scan_state.is_running = False
        _scan_state.should_cancel = False
        server.PromptServer.instance.send_sync(
            "meld-scan-finished",
            {
                "status": "completed",
                "new_count": new_count,
                "updated_count": len(updated_ids),
                "total_count": processed,
            },
        )


def start_scan_thread(
    base_dir: str,
    subfolder: str,
    img_type: str,
    recursive: bool,
    auto_link_parent: bool,
    tags: list[str] | None = None,
    link_strategy: str = "new_only",
) -> None:
    set_scan_running(True)
    thread = threading.Thread(
        target=_scan_thread,
        args=(
            base_dir,
            subfolder,
            img_type,
            recursive,
            auto_link_parent,
            tags,
            link_strategy,
        ),
    )
    thread.start()
