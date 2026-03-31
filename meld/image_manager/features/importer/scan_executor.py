import logging
import os
import threading

import server
from PIL import Image

from ....load_image_configs.core.metadata_helper import MetadataHelper
from ...common.db.client import (
    db_connection,
)
from ...common.model_repo import add_model_relation, get_or_create_model
from ..images.repository import calculate_sha256, inherit_tags
from ..settings.repository import get_all_settings
from .parent_resolver import infer_parent_id


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
    # Import state management from service to avoid circular dependency at module load.
    # service.py defines _scan_state before importing scan_executor,
    # so _scan_state is always available by the time this function is called.
    from .service import _scan_state

    newly_registered_ids = set()
    updated_ids = set()
    new_count = 0
    total = 0
    processed = 0
    try:
        with db_connection() as conn:
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
                            "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)",
                            (img_id, tag_id),
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
            _scan_state.set_total_count(total)

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
                            _scan_state.set_updated_count(len(updated_ids))

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
                    _scan_state.set_new_count(new_count)

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
                        "SELECT filename, subfolder, type, phash, created_at, parent_id FROM images WHERE id = ?",
                        (img_id,),
                    )
                    row = cursor.fetchone()
                    if not row:
                        processed_linking += 1
                        continue
                    fname, subf, itype, iphash, icreated, current_parent_id = row

                    parent_id = infer_parent_id(
                        cursor, fname, subf, itype, iphash, icreated, strategy=matching_strategy
                    )

                    if (link_strategy == "all" or parent_id) and img_id is not None:
                        if parent_id != img_id:
                            if parent_id != current_parent_id:
                                cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (parent_id, img_id))
                                # Inherit tags if enabled and parent exists
                                if parent_id is not None and db_settings.get("gallery.inherit_tags", True):
                                    inherit_tags(cursor, img_id, parent_id)
                                if img_id not in newly_registered_ids:
                                    updated_ids.add(img_id)
                                    _scan_state.set_updated_count(len(updated_ids))

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
        _scan_state.mark_finished()
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
) -> bool:
    """Start the scan background thread. Returns False if a scan is already running."""
    from .service import _scan_state

    if not _scan_state.try_start():
        return False
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
    return True
