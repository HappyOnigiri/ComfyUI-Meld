import json
import os
import re
import time
from datetime import datetime

import folder_paths
import numpy as np
import server
from comfy.cli_args import args
from PIL import Image
from PIL.PngImagePlugin import PngInfo

from ..load_image_configs.metadata_helper import MetadataHelper
from .database import get_db_connection


# --- Custom Node Definition ---
class MeldNexus:
    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"
        self.prefix_append = ""
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", ),
                "filename_prefix": ("STRING", {
                    "default": "MeldFlow",
                    "tooltip": (
                        "The prefix for the file to save. This may include formatting "
                        "information such as %date:yyyy-MM-dd%, %date:yyyy_MM_dd_HHmmss%, "
                        "or %width%, %height%, %year%, %month%, %day%, %hour%, %minute%, %second%.\n"
                        "yyyy: year, MM: month, dd: day, HH: hour, mm: minute, ss: second."
                    ),
                }),
            },
            "optional": {
                "positive": ("STRING", {"forceInput": True, "multiline": True}),
                "negative": ("STRING", {"forceInput": True, "multiline": True}),
                "tags": ("STRING", {"multiline": False}),
            },
            "hidden": {
                "prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"
            },
        }

    RETURN_TYPES = ()
    FUNCTION = "save_images"
    OUTPUT_NODE = True
    CATEGORY = "MeldFlow/Nexus"

    def save_images(
        self,
        images,
        filename_prefix="MeldFlow",
        positive=None,
        negative=None,
        tags=None,
        prompt=None,
        extra_pnginfo=None,
    ):
        if filename_prefix is None:
            filename_prefix = "MeldFlow"

        filename_prefix += self.prefix_append

        tokens = re.findall(r'%(.*?)%', filename_prefix)
        for token in tokens:
            if token.startswith('date:'):
                format_str = token[5:]
                # Simple mapper for common date formats
                py_format = format_str.replace('yyyy', '%Y').replace('yy', '%y') \
                                     .replace('MM', '%m').replace('dd', '%d') \
                                     .replace('HH', '%H').replace('mm', '%M') \
                                     .replace('ss', '%S')
                try:
                    formatted_date = datetime.now().strftime(py_format)
                    filename_prefix = filename_prefix.replace(f'%{token}%', formatted_date)
                except Exception:
                    pass
            elif token == 'date':
                formatted_date = datetime.now().strftime('%Y-%m-%d')
                filename_prefix = filename_prefix.replace('%date%', formatted_date)

        full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(
            filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0]
        )
        results = list()
        conn = get_db_connection()
        cursor = conn.cursor()

        # Resolve Metadata
        resolved_positive = positive
        resolved_negative = negative

        if not resolved_positive or not resolved_negative:
            # Try to parse from workflow
            logs: list[str] = []
            wf_pos, wf_neg = "", ""

            if extra_pnginfo and 'workflow' in extra_pnginfo:
                wf_pos, wf_neg = MetadataHelper.parse_workflow_json(extra_pnginfo['workflow'], logs)
            elif prompt:
                wf_pos, wf_neg = MetadataHelper.parse_prompt_json(prompt, logs)

            if not resolved_positive:
                resolved_positive = wf_pos
            if not resolved_negative:
                resolved_negative = wf_neg

        tag_list = []
        if tags:
            tag_list = [t.strip() for t in tags.split(',') if t.strip()]

        # Split prompts into lists for separate registration
        pos_list = [p.strip() for p in resolved_positive.split(',') if p.strip()] if resolved_positive else []
        neg_list = [n.strip() for n in resolved_negative.split(',') if n.strip()] if resolved_negative else []

        for (batch_number, image) in enumerate(images):
            # Tensor [B, H, W, C] -> PIL
            # ComfyUI images are [B, H, W, C] Tensors
            i = 255. * image.cpu().numpy()
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
            img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=self.compress_level)

            timestamp = time.time()

            # Insert Image
            cursor.execute(
                "INSERT INTO images (filename, subfolder, created_at, is_deleted) VALUES (?, ?, ?, 0)",
                (file, subfolder, timestamp)
            )
            image_id = cursor.lastrowid

            # Insert Prompts
            for p in pos_list:
                cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (p,))
                cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (p,))
                pp_id = cursor.fetchone()[0]
                cursor.execute(
                    "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id) VALUES (?, ?)",
                    (image_id, pp_id)
                )

            for n in neg_list:
                cursor.execute("INSERT OR IGNORE INTO negative_prompts (name) VALUES (?)", (n,))
                cursor.execute("SELECT id FROM negative_prompts WHERE name = ?", (n,))
                np_id = cursor.fetchone()[0]
                cursor.execute(
                    "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id) VALUES (?, ?)",
                    (image_id, np_id)
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

        return {"ui": {"images": results}}
