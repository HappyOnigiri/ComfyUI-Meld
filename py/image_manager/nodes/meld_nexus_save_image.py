import json
import os
import re
import time
from datetime import datetime

import folder_paths
import torch

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore

import numpy as np
import server
from comfy.cli_args import args
from PIL import Image
from PIL.PngImagePlugin import PngInfo

from ...load_image_configs.core.metadata_helper import MetadataHelper
from ..api import infer_parent_id
from ..database import (
    add_model_relation,
    calculate_sha256,
    find_closest_parent,
    get_all_settings,
    get_db_connection,
    get_or_create_model,
)


# --- Custom Node Definition ---
class MeldNexusSaveImage:
    def __init__(self) -> None:
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"
        self.prefix_append = ""
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(cls) -> dict:
        return {
            "required": {
                "images": ("IMAGE",),
                "filename_prefix": (
                    "STRING",
                    {
                        "default": "MeldFlow",
                        "tooltip": (
                            "The prefix for the file to save. This may include formatting "
                            "information such as %date:yyyy-MM-dd%, %date:yyyy_MM_dd_HHmmss%, "
                            "or %width%, %height%, %year%, %month%, %day%, %hour%, %minute%, %second%.\n"
                            "yyyy: year, MM: month, dd: day, HH: hour, mm: minute, ss: second."
                        ),
                    },
                ),
            },
            "optional": {
                "origin_image": ("IMAGE",),
                "positive": ("STRING", {"forceInput": True, "multiline": True}),
                "negative": ("STRING", {"forceInput": True, "multiline": True}),
                "tags": ("STRING", {"multiline": False}),
            },
            "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)
    FUNCTION = "save_images"
    OUTPUT_NODE = True
    CATEGORY = "MeldFlow/Nexus"

    def save_images(
        self,
        images: torch.Tensor,
        filename_prefix: str = "MeldFlow",
        origin_image: torch.Tensor | None = None,
        positive: str | None = None,
        negative: str | None = None,
        tags: str | None = None,
        prompt: dict | None = None,
        extra_pnginfo: dict | None = None,
    ) -> dict:
        if filename_prefix is None:
            filename_prefix = "MeldFlow"

        filename_prefix += self.prefix_append

        tokens = re.findall(r"%(.*?)%", filename_prefix)
        for token in tokens:
            if token.startswith("date:"):
                format_str = token[5:]
                # Simple mapper for common date formats
                py_format = (
                    format_str.replace("yyyy", "%Y")
                    .replace("yy", "%y")
                    .replace("MM", "%m")
                    .replace("dd", "%d")
                    .replace("HH", "%H")
                    .replace("mm", "%M")
                    .replace("ss", "%S")
                )
                try:
                    formatted_date = datetime.now().strftime(py_format)
                    filename_prefix = filename_prefix.replace(f"%{token}%", formatted_date)
                except Exception:
                    pass
            elif token == "date":
                formatted_date = datetime.now().strftime("%Y-%m-%d")
                filename_prefix = filename_prefix.replace("%date%", formatted_date)

        full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(
            filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0]
        )
        results = list()
        conn = get_db_connection()
        cursor = conn.cursor()

        # Resolve Metadata
        resolved_positive = positive
        resolved_negative = negative
        resolved_model = ""
        resolved_workflow = None

        # Try to extract metadata from extra_pnginfo/prompt
        info = {}
        if prompt is not None:
            info["prompt"] = json.dumps(prompt)
        if extra_pnginfo is not None:
            for x in extra_pnginfo:
                info[x] = json.dumps(extra_pnginfo[x])

        ext_pos, ext_neg, ext_model, ext_wf, ext_pr, _, _ = MetadataHelper.extract_from_data(info)

        if not resolved_positive:
            resolved_positive = ext_pos
        if not resolved_negative:
            resolved_negative = ext_neg
        resolved_model = ext_model
        resolved_workflow = ext_wf or ext_pr

        tag_list = []
        if tags:
            tag_list = [t.strip() for t in tags.split(",") if t.strip()]

        # Split prompts into lists for separate registration
        pos_list = MetadataHelper.smart_split(resolved_positive) if resolved_positive else []
        neg_list = MetadataHelper.smart_split(resolved_negative) if resolved_negative else []

        # Parent ID inference
        db_settings = get_all_settings(cursor)
        matching_strategy = db_settings.get("gallery.matching_strategy", "filename_phash")
        parent_id = None

        if origin_image is not None and imagehash is not None:
            try:
                # If origin_image is explicitly provided, we find its match in DB
                o_i = 255.0 * origin_image[0].cpu().numpy()
                o_img = Image.fromarray(np.clip(o_i, 0, 255).astype(np.uint8))
                o_phash = str(imagehash.phash(o_img))
                # When origin is explicit, we use the strategy to find it (usually phash-based)
                parent_id = find_closest_parent(
                    o_phash, cursor, before_timestamp=time.time(), sort_strategy=matching_strategy
                )
            except Exception:
                pass

        if parent_id is None:
            # Fallback to metadata-based inference (same as scan/register)
            try:
                # Calculate phash of the first image in batch being saved to use as child phash
                i_0 = 255.0 * images[0].cpu().numpy()
                img_0 = Image.fromarray(np.clip(i_0, 0, 255).astype(np.uint8))
                child_phash = str(imagehash.phash(img_0)) if imagehash else None

                parent_id = infer_parent_id(
                    cursor,
                    phash=child_phash,
                    created_at=time.time(),
                    strategy=matching_strategy,
                    workflow_json=resolved_workflow,
                    prompt_json=prompt,
                )
            except Exception:
                pass

        for batch_number, image in enumerate(images):
            # Tensor [B, H, W, C] -> PIL
            # ComfyUI images are [B, H, W, C] Tensors
            h, w, _ = image.shape
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))

            # Save metadata to PNG
            metadata = None
            if not args.disable_metadata:
                metadata = PngInfo()
                if prompt is not None:
                    metadata.add_text("prompt", json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))

            filename_with_batch_num = filename.replace("%batch_num%", str(batch_number))
            file = f"{filename_with_batch_num}_{counter:05}_.png"
            full_path = os.path.join(full_output_folder, file)
            img.save(full_path, pnginfo=metadata, compress_level=self.compress_level)

            timestamp = time.time()
            sha256 = calculate_sha256(full_path)

            # Calculate pHash
            phash = None
            if imagehash is not None:
                try:
                    phash = str(imagehash.phash(img))
                except Exception:
                    pass

            # Insert Image
            sql = """
                INSERT INTO images
                (filename, subfolder, created_at, phash, sha256, width, height, parent_id, deleted_at, positive_prompt, negative_prompt, workflow)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?)
            """
            cursor.execute(
                sql,
                (
                    file,
                    subfolder,
                    timestamp,
                    phash,
                    sha256,
                    w,
                    h,
                    parent_id,
                    resolved_positive,
                    resolved_negative,
                    resolved_workflow,
                ),
            )
            image_id = cursor.lastrowid

            # Insert Model Relation
            if resolved_model:
                m_id = get_or_create_model(cursor, resolved_model)
                add_model_relation(cursor, image_id, m_id)

            # Insert Prompts
            for p in pos_list:
                prompt_results = MetadataHelper.parse_prompt_with_weight(p)
                for clean_name, strength in prompt_results:
                    if not clean_name:
                        continue
                    cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (clean_name,))
                    cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (clean_name,))
                    pp_id = cursor.fetchone()[0]
                    cursor.execute(
                        "INSERT INTO positive_prompt_image_relations "
                        "(image_id, positive_prompt_id, strength) VALUES (?, ?, ?)",
                        (image_id, pp_id, strength),
                    )

            for n in neg_list:
                prompt_results = MetadataHelper.parse_prompt_with_weight(n)
                for clean_name, strength in prompt_results:
                    if not clean_name:
                        continue
                    cursor.execute("INSERT OR IGNORE INTO negative_prompts (name) VALUES (?)", (clean_name,))
                    cursor.execute("SELECT id FROM negative_prompts WHERE name = ?", (clean_name,))
                    np_id = cursor.fetchone()[0]
                    cursor.execute(
                        "INSERT INTO negative_prompt_image_relations "
                        "(image_id, negative_prompt_id, strength) VALUES (?, ?, ?)",
                        (image_id, np_id, strength),
                    )

            # Insert Tags
            for tag in tag_list:
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag,))
                tag_id = cursor.fetchone()[0]
                cursor.execute("INSERT INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)", (image_id, tag_id))

            results.append({"filename": file, "subfolder": subfolder, "type": self.type})
            counter += 1

        conn.commit()
        conn.close()

        # Notify the frontend that images have been saved (Rule 2: Real-time update)
        server.PromptServer.instance.send_sync("meld-nexus-image-saved", {"count": len(results)})

        return {"ui": {"images": results}, "result": (images,)}
