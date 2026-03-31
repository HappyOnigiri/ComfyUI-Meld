import os
from typing import Any

import numpy as np
import torch
from PIL import Image, ImageOps

from ..core.image_processing import process_image_metadata


class MeldImageLoaderBatch:
    @classmethod
    def INPUT_TYPES(cls) -> dict[str, Any]:
        return {
            "required": {
                "directory_path": ("STRING", {"default": "C:\\Images", "multiline": False}),
                "index": ("INT", {"default": 0, "min": 0, "max": 999999, "step": 1}),
                "stop_at_limit": ("BOOLEAN", {"default": False}),
            }
        }

    RETURN_TYPES = ("IMAGE", "MODEL", "CLIP", "VAE", "STRING", "STRING", "STRING", "BASE_SETTINGS")
    RETURN_NAMES = ("IMAGE", "MODEL", "CLIP", "VAE", "positive", "negative", "summary", "base_settings")
    FUNCTION = "load_batch"
    CATEGORY = "Meld/Image"
    OUTPUT_NODE = True

    # --- Node Description ---
    DESCRIPTION = (
        "Loads images from a specified directory by index for batch processing or sequential loading.\n"
        "Like Meld Image Loader, it also parses and restores embedded metadata (prompts, model, sampler settings, etc.)."
    )
    # ---------------------------

    def load_batch(self, directory_path: str, index: int, stop_at_limit: bool) -> dict[str, Any]:
        valid_ext = [".png", ".jpg", ".jpeg", ".webp"]
        if not os.path.isdir(directory_path):
            return {
                "ui": {"text": [""]},
                "result": (torch.zeros((1, 64, 64, 3)), None, None, None, "", "", "", {}),
            }

        files = sorted(
            [
                os.path.join(directory_path, f)
                for f in os.listdir(directory_path)
                if os.path.splitext(f)[1].lower() in valid_ext
            ]
        )

        if not files:
            return {
                "ui": {"text": [""]},
                "result": (torch.zeros((1, 64, 64, 3)), None, None, None, "", "", "", {}),
            }

        if stop_at_limit and index >= len(files):
            raise ValueError(f"Index {index} is out of range. Directory contains {len(files)} files.")

        target_file = files[index % len(files)]
        try:
            img_file = Image.open(target_file)
            img_transposed = ImageOps.exif_transpose(img_file)
            img_rgb = img_transposed.convert("RGB")
            img_np = np.array(img_rgb).astype(np.float32) / 255.0
            image_tensor = torch.from_numpy(img_np)[None,]
        except Exception as e:
            return {
                "ui": {"text": [f"Error load image: {e}"]},
                "result": (torch.zeros((1, 64, 64, 3)), None, None, None, "", "", f"Error load image: {e}", {}),
            }

        prefix = f"[Batch Info] Index: {index} | {os.path.basename(target_file)}\n"
        result = process_image_metadata(target_file, image_tensor, summary_prefix=prefix)

        return {
            "ui": {"text": [result["summary"]]},
            "result": (
                image_tensor,
                result["model"],
                result["clip"],
                result["vae"],
                result["positive"],
                result["negative"],
                result["summary"],
                result["base_settings"],
            ),
        }
