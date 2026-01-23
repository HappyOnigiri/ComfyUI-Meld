import json
import logging
import os
from typing import Any

# Try to get ComfyUI base path
try:
    import folder_paths

    # folder_paths.base_path is usually the ComfyUI root
    COMFY_ROOT = getattr(folder_paths, "base_path", None)
    if not COMFY_ROOT:
        # Fallback: calculate from this file
        # py/image_manager/features/workflows/service.py -> py -> root -> custom_nodes -> ComfyUI
        COMFY_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", ".."))
except ImportError:
    COMFY_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", ".."))

WORKFLOWS_DIR = os.path.join(COMFY_ROOT, "user", "default", "workflows")


def list_workflows() -> list[dict[str, Any]]:
    if not os.path.exists(WORKFLOWS_DIR):
        logging.warning(f"[Meld] Workflows directory not found: {WORKFLOWS_DIR}")
        return []

    workflows: list[dict[str, Any]] = []
    for filename in os.listdir(WORKFLOWS_DIR):
        if filename.endswith(".json"):
            file_path = os.path.join(WORKFLOWS_DIR, filename)
            try:
                with open(file_path, encoding="utf-8") as f:
                    data = json.load(f)

                # Count nodes
                loader_count = 0
                mask_count = 0
                if isinstance(data, dict):
                    if "nodes" in data and isinstance(data["nodes"], list):
                        # UI Format
                        for node in data["nodes"]:
                            if isinstance(node, dict):
                                if node.get("type") == "MeldImageLoader":
                                    loader_count += 1
                                elif node.get("type") == "LoadImageMask":
                                    mask_count += 1
                    else:
                        # API Format check
                        for _node_id, node in data.items():
                            if isinstance(node, dict):
                                if node.get("class_type") == "MeldImageLoader":
                                    loader_count += 1
                                elif node.get("class_type") == "LoadImageMask":
                                    mask_count += 1

                valid = loader_count == 1
                reason = ""
                if loader_count == 0:
                    reason = "No 'Meld Image Loader' node found."
                elif loader_count > 1:
                    reason = f"Multiple 'Meld Image Loader' nodes found ({loader_count})."

                workflows.append(
                    {
                        "name": filename,
                        "valid": valid,
                        "loader_count": loader_count,
                        "mask_count": mask_count,
                        "reason": reason,
                    }
                )
            except Exception as e:
                logging.error(f"[Meld] Failed to read workflow {filename}: {e}")
                workflows.append(
                    {"name": filename, "valid": False, "loader_count": 0, "reason": f"Error reading file: {str(e)}"}
                )

    # Sort by name
    workflows.sort(key=lambda x: x["name"].lower())
    return workflows


def get_workflow_raw(name: str) -> dict[str, Any] | None:
    # Security: check if name is just a filename
    if os.path.basename(name) != name:
        return None

    file_path = os.path.join(WORKFLOWS_DIR, name)
    if not os.path.exists(file_path):
        return None

    try:
        with open(file_path, encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logging.error(f"[Meld] Failed to read workflow {name}: {e}")
        return None
