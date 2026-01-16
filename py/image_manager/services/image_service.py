import json
import os
import sqlite3
from typing import Any

import folder_paths

from ...load_image_configs.core.metadata_helper import MetadataHelper


def extract_source_filenames(workflow_json: str | dict | None, prompt_json: str | dict | None) -> list[str]:
    filenames = set()

    # Helper to check for image inputs
    def check_inputs(inputs: dict) -> None:
        if not isinstance(inputs, dict):
            return
        # Common widget names for image loading
        for key, val in inputs.items():
            if key in ["image", "filename", "image_path"] and isinstance(val, str):
                filenames.add(val)

    # Parse workflow_json (graph format)
    if workflow_json:
        try:
            data = json.loads(workflow_json) if isinstance(workflow_json, str) else workflow_json
            if isinstance(data, dict):
                nodes = data.get("nodes", [])
                if isinstance(nodes, list):
                    for node in nodes:
                        widgets_values = node.get("widgets_values")
                        if isinstance(widgets_values, list):
                            for val in widgets_values:
                                if isinstance(val, str) and any(
                                    val.lower().endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".webp"]
                                ):
                                    filenames.add(val)
        except Exception:
            pass

    # Parse prompt_json (API format)
    if prompt_json:
        try:
            data = json.loads(prompt_json) if isinstance(prompt_json, str) else prompt_json
            if isinstance(data, dict):
                for node_data in data.values():
                    check_inputs(node_data.get("inputs", {}))
        except Exception:
            pass

    return list(filenames)


def get_unique_filename(base_dir: str, subfolder: str, filename: str) -> str:
    """Find a unique filename by appending _1, _2, etc. if needed."""
    name, ext = os.path.splitext(filename)
    counter = 1
    new_filename = filename
    while os.path.exists(os.path.join(base_dir, subfolder, new_filename)):
        new_filename = f"{name}_{counter}{ext}"
        counter += 1
    return new_filename


def get_parent_suggestions(
    cursor: sqlite3.Cursor,
    image_id: int,
    target_phash: str | None,
    target_created_at: float,
    filename: str,
    subfolder: str,
    img_type: str,
    strategy: str = "phash_created",
    threshold: int = 12,
) -> list[dict[str, Any]]:
    # 1. Find source filename matches (if strategy includes it)
    source_matches = []
    if strategy == "filename_phash":
        try:
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            else:
                base_dir = None

            if base_dir:
                full_path = os.path.join(base_dir, subfolder, filename)
                if os.path.exists(full_path):
                    _, _, _, wf, pr, _, _ = MetadataHelper.extract_metadata(full_path)
                    source_filenames = extract_source_filenames(wf, pr)
                    if source_filenames:
                        placeholders = ",".join(["?"] * len(source_filenames))
                        cursor.execute(
                            f"SELECT id, filename, subfolder, type, phash, created_at FROM images WHERE filename IN ({placeholders}) AND deleted_at IS NULL AND id != ? AND created_at < ?",
                            (*source_filenames, image_id, target_created_at),
                        )
                        for match in cursor.fetchall():
                            source_matches.append(
                                {
                                    "id": match[0],
                                    "filename": match[1],
                                    "subfolder": match[2],
                                    "type": match[3],
                                    "distance": 0,
                                    "created_at": match[5],
                                    "is_source_match": True,
                                }
                            )
        except Exception:
            pass

    # 2. Find pHash matches
    phash_matches = []
    if target_phash:
        cursor.execute(
            "SELECT id, filename, subfolder, type, phash, created_at FROM images WHERE id != ? AND phash IS NOT NULL AND deleted_at IS NULL AND created_at < ? ORDER BY created_at DESC",
            (image_id, target_created_at),
        )
        rows = cursor.fetchall()

        def hamming_distance(h1: str, h2: str) -> int:
            try:
                return bin(int(h1, 16) ^ int(h2, 16)).count("1")
            except Exception:
                return 999

        for img_id, fname, subf, itype, iphash, icreated in rows:
            # Skip if already in source matches
            if any(m["id"] == img_id for m in source_matches):
                continue

            dist = hamming_distance(target_phash, iphash)
            if dist <= threshold:
                phash_matches.append(
                    {
                        "id": img_id,
                        "filename": fname,
                        "subfolder": subf,
                        "type": itype,
                        "distance": dist,
                        "created_at": icreated,
                        "is_source_match": False,
                    }
                )

        # Sort pHash matches based on strategy
        if strategy == "phash_created":
            phash_matches.sort(key=lambda x: (x["distance"], abs(target_created_at - x["created_at"])))
        else:
            # Default/phash_only: distance then recency
            phash_matches.sort(key=lambda x: (x["distance"], -x["created_at"]))

    return source_matches + phash_matches
