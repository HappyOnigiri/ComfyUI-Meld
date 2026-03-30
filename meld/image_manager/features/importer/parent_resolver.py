import json
import os
import sqlite3
import time
from typing import Any

import folder_paths

from ....load_image_configs.core.metadata_helper import MetadataHelper
from ..images.repository import find_closest_parent


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

    IMPORTANT: extract_source_filenames is imported lazily inside this function
    to avoid circular imports (images.service -> importer -> images.service).
    Do NOT move this import to the top of the file.
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
