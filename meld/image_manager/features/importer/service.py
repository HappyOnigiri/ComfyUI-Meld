import os
import time

import folder_paths

from ...common.db.client import (
    db_connection,
    get_trash_dir,
)
from ...common.schemas import ScanStatus
from ..images.repository import bulk_permanent_delete, bulk_soft_delete
from ..settings.repository import get_all_settings
from .scan_state import ScanState

# Thread-safe scan state. Access via get_scan_state() / cancel_scan() from outside;
# scan_executor.py imports _scan_state directly for atomic try_start/mark_finished.
_scan_state = ScanState()


def get_scan_state() -> ScanStatus:
    return _scan_state.get_status()


def cancel_scan() -> None:
    _scan_state.request_cancel()


def perform_cleanup() -> int:
    """Logic to logically delete image data that does not exist in the DB and permanently delete old trash items"""
    with db_connection() as conn:
        cursor = conn.cursor()
        # 1. Logical delete missing files
        # Get all images that have not been deleted
        cursor.execute("SELECT id, filename, subfolder, type FROM images WHERE deleted_at IS NULL")
        images = cursor.fetchall()

        # Phase 1: collect ids of images whose files are missing, then batch-update.
        now = time.time()
        missing_ids: list[int] = []
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
                missing_ids.append(img_id)

        if missing_ids:
            bulk_soft_delete(cursor, missing_ids, now)
        missing_count = len(missing_ids)

        # Phase 2: permanently delete expired trash items.
        # Collect ids first; remove physical files in the loop, then batch-delete DB rows.
        db_settings = get_all_settings(cursor)
        retention_days = int(db_settings.get("gallery.trash_retention_days", 30))
        retention_seconds = retention_days * 24 * 60 * 60
        threshold = now - retention_seconds

        cursor.execute("SELECT id, filename FROM images WHERE deleted_at IS NOT NULL AND deleted_at < ?", (threshold,))
        to_delete = cursor.fetchall()

        delete_ids: list[int] = []
        for img_id, trash_filename in to_delete:
            trash_path = os.path.join(get_trash_dir(), trash_filename)
            if os.path.exists(trash_path):
                try:
                    os.remove(trash_path)
                except Exception:
                    pass
            delete_ids.append(img_id)

        if delete_ids:
            bulk_permanent_delete(cursor, delete_ids)

        if missing_count > 0 or delete_ids:
            conn.commit()
        return missing_count + len(delete_ids)


# Re-export symbols from sub-modules for backward compatibility.
# Consumers that import from importer.service do not need to change.
from .parent_resolver import infer_parent_id  # noqa: E402
from .scan_executor import (  # noqa: E402
    _scan_thread,  # noqa: F401 - kept for backward-compat access via service module attribute
    count_images_recursive,
    get_first_image_recursive,
    start_scan_thread,
)

__all__ = [
    "get_scan_state",
    "cancel_scan",
    "perform_cleanup",
    "infer_parent_id",
    "start_scan_thread",
    "count_images_recursive",
    "get_first_image_recursive",
]
