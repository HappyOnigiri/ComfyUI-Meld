from typing import Any, cast

import folder_paths
import nodes

from ..core.image_processing import process_image_metadata


class MeldImageLoader:
    @classmethod
    def INPUT_TYPES(cls) -> dict[str, Any]:
        import os

        files = []

        def get_files_recursive(base_dir: str) -> list[str]:
            all_files = []
            if not os.path.exists(base_dir):
                return []
            for root, _, filenames in os.walk(base_dir):
                for f in filenames:
                    rel_path = os.path.relpath(os.path.join(root, f), base_dir)
                    # Use forward slashes for ComfyUI compatibility
                    all_files.append(rel_path.replace("\\", "/"))
            return all_files

        # Get input files
        input_dir = folder_paths.get_input_directory()
        files += get_files_recursive(input_dir)

        # Get output files
        output_dir = folder_paths.get_output_directory()
        files += [f"{f} [output]" for f in get_files_recursive(output_dir)]

        # Get temp files
        temp_dir = folder_paths.get_temp_directory()
        files += [f"{f} [temp]" for f in get_files_recursive(temp_dir)]

        if not files:
            files = ["None"]

        return {"required": {"image": (sorted(files), {"image_upload": True})}}

    @classmethod
    def VALIDATE_INPUTS(cls, image: str) -> bool | str:
        return True

    RETURN_TYPES = ("IMAGE", "MODEL", "CLIP", "VAE", "STRING", "STRING", "STRING", "BASE_SETTINGS")
    RETURN_NAMES = ("IMAGE", "MODEL", "CLIP", "VAE", "positive", "negative", "summary", "base_settings")
    FUNCTION = "load"
    CATEGORY = "Meld/Image"
    OUTPUT_NODE = True

    # --- Node Description ---
    DESCRIPTION = (
        "Loads an image and automatically extracts embedded generation metadata (prompts, model, sampler settings, etc.).\n"
        "Also attempts to load the checkpoint model based on the detected metadata to streamline reuse and iteration."
    )
    # ---------------------------

    def load(self, image: str) -> dict[str, Any]:
        image_path = folder_paths.get_annotated_filepath(image)
        nodes_any = cast(Any, nodes)
        image_output, _ = nodes_any.LoadImage().load_image(image)

        result = process_image_metadata(image_path, image_output)

        return {
            "ui": {"text": [result["summary"]]},
            "result": (
                image_output,
                result["model"],
                result["clip"],
                result["vae"],
                result["positive"],
                result["negative"],
                result["summary"],
                result["base_settings"],
            ),
        }
