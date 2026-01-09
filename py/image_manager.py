import datetime
import json
import os
import re
import sqlite3
import time

import folder_paths
import numpy as np
import server
from aiohttp import web
from comfy.cli_args import args
from PIL import Image

from .load_image_configs.metadata_helper import MetadataHelper

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "default.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            subfolder TEXT,
            created_at REAL
        )
    ''')

    # Add is_deleted column if not exists
    try:
        cursor.execute("ALTER TABLE images ADD COLUMN is_deleted INTEGER DEFAULT 0")
    except sqlite3.OperationalError:
        pass

    # Normalized Tables
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS positive_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS negative_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE
        )
    ''')

    # Relations
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS positive_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            positive_prompt_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(positive_prompt_id) REFERENCES positive_prompts(id)
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS negative_prompt_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            negative_prompt_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(negative_prompt_id) REFERENCES negative_prompts(id)
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tag_image_relations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_id INTEGER,
            tag_id INTEGER,
            FOREIGN KEY(image_id) REFERENCES images(id),
            FOREIGN KEY(tag_id) REFERENCES tags(id)
        )
    ''')

    # Indices
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_pp_name ON positive_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_np_name ON negative_prompts(name)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tag_name ON tags(name)")

    conn.commit()
    conn.close()

init_db()

# --- Custom Node Definition ---
class MeldNexus:
    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", ),
                "filename_prefix": ("STRING", {
                    "default": "MeldFlow",
                    "tooltip": (
                        "The prefix for the saved image name. "
                        "You can use slashes (/) for subdirectories (e.g., folder/image) "
                        "and date placeholders like %date:yyyy-MM-dd%."
                    )
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
        # Resolve placeholders in filename_prefix
        now = datetime.datetime.now()

        # Handle %date:format%
        def replace_date(match):
            fmt = match.group(1)
            # Convert common date formats to Python strftime formats
            fmt = fmt.replace("yyyy", "%Y").replace("MM", "%m").replace("dd", "%d")
            fmt = fmt.replace("HH", "%H").replace("mm", "%M").replace("ss", "%S")
            return now.strftime(fmt)

        filename_prefix = re.sub(r"%date:(.*?)%", replace_date, filename_prefix)
        filename_prefix = filename_prefix.replace("%date%", now.strftime("%Y-%m-%d"))

        full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(
            filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0]
        )
        results = list()
        conn = sqlite3.connect(DB_PATH)
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
                 from PIL.PngImagePlugin import PngInfo
                 metadata = PngInfo()
                 if prompt is not None:
                     metadata.add_text("prompt", json.dumps(prompt))
                 if extra_pnginfo is not None:
                     for x in extra_pnginfo:
                         metadata.add_text(x, json.dumps(extra_pnginfo[x]))

            filename_with_batch_num = filename.replace("%batch_num%", str(batch_number))
            file = f"{filename_with_batch_num}_{counter:05}_.png"
            img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=4)

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

        return {"ui": {"images": results}}

# --- API Definition ---
@server.PromptServer.instance.routes.get("/meld-nexus/list")
async def list_images(request):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Fetch images with basic info
    cursor.execute(
        "SELECT id, filename, subfolder, created_at FROM images WHERE is_deleted = 0 ORDER BY created_at DESC"
    )
    images = cursor.fetchall()

    result_list = []

    for img in images:
        img_id, filename, subfolder, created_at = img

        # Fetch positive prompt
        cursor.execute("""
            SELECT pp.name FROM positive_prompts pp
            JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id
            WHERE r.image_id = ?
        """, (img_id,))
        pos_rows = cursor.fetchall()
        positive = ", ".join([r[0] for r in pos_rows])

        # Fetch negative prompt
        cursor.execute("""
            SELECT np.name FROM negative_prompts np
            JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id
            WHERE r.image_id = ?
        """, (img_id,))
        neg_rows = cursor.fetchall()
        negative = ", ".join([r[0] for r in neg_rows])

        # Fetch tags
        cursor.execute("""
            SELECT t.name FROM tags t
            JOIN tag_image_relations r ON t.id = r.tag_id
            WHERE r.image_id = ?
        """, (img_id,))
        tag_rows = cursor.fetchall()
        tags = [t[0] for t in tag_rows]

        result_list.append({
            "id": img_id,
            "filename": filename,
            "subfolder": subfolder,
            "created_at": created_at,
            "positive": positive,
            "negative": negative,
            "tags": tags
        })

    conn.close()
    return web.json_response(result_list)

@server.PromptServer.instance.routes.post("/meld-nexus/delete")
async def delete_image(request):
    try:
        data = await request.json()
        filename = data.get("filename")
        if not filename:
            return web.json_response({"error": "filename is required"}, status=400)

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()

        cursor.execute("UPDATE images SET is_deleted = 1 WHERE filename = ?", (filename,))
        if cursor.rowcount == 0:
            conn.close()
            return web.json_response({"error": "Image not found"}, status=404)

        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


NODE_CLASS_MAPPINGS = {
    "MeldNexus": MeldNexus
}
