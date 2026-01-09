import os
import sqlite3
import time

import folder_paths
import numpy as np
import server
from aiohttp import web
from PIL import Image

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "images.db")

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
        return {"required": {"images": ("IMAGE", )}}

    RETURN_TYPES = ()
    FUNCTION = "save_images"
    OUTPUT_NODE = True
    CATEGORY = "MeldFlow/Nexus"

    def save_images(self, images):
        results = list()
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()

        for image in images:
            # Tensor [B, H, W, C] -> PIL
            # ComfyUI images are [B, H, W, C] Tensors
            i = 255. * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))

            timestamp = time.time()
            filename = f"SimpleManager_{int(timestamp)}_{int(time.perf_counter()*1000)%1000}.png"
            file_path = os.path.join(self.output_dir, filename)

            img.save(file_path, pnginfo=None, compress_level=4)

            cursor.execute(
                "INSERT INTO images (filename, subfolder, created_at) VALUES (?, ?, ?)",
                (filename, "", timestamp)
            )

            results.append({"filename": filename, "subfolder": "", "type": self.type})

        conn.commit()
        conn.close()

        return {"ui": {"images": results}}

# --- API Definition ---
@server.PromptServer.instance.routes.get("/simple-manager/list")
async def list_images(request):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT filename FROM images ORDER BY created_at DESC")
    rows = cursor.fetchall()
    conn.close()
    return web.json_response([row[0] for row in rows])

NODE_CLASS_MAPPINGS = {
    "MeldNexus": MeldNexus
}

