import logging
import os

import folder_paths
import server
from aiohttp import web

from ..load_image_configs.metadata_helper import MetadataHelper
from .database import get_db_connection


@server.PromptServer.instance.routes.get("/meld-nexus/test")
async def test_endpoint(request):
    return web.json_response({"status": "ok", "message": "Meld Nexus is running"})


@server.PromptServer.instance.routes.post("/meld-nexus/register")
async def register_image(request):
    try:
        if request.has_body and request.content_type == "application/json":
            data = await request.json()
        else:
            return web.json_response(
                {"error": "Content-Type must be application/json"}, status=400
            )

        filename = data.get("filename")
        subfolder = data.get("subfolder", "")
        img_type = data.get("type", "output")

        if not filename:
            return web.json_response({"error": "filename is required"}, status=400)

        # Basic validation: filename must not contain path separators
        if os.path.basename(filename) != filename:
            return web.json_response({"error": "invalid filename"}, status=400)

        # Resolve base directory
        if img_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif img_type == "input":
            base_dir = folder_paths.get_input_directory()
        elif img_type == "temp":
            base_dir = folder_paths.get_temp_directory()
        else:
            return web.json_response({"error": f"invalid type: {img_type}"}, status=400)

        # Resolve full path safely (prevent path traversal)
        full_path = os.path.abspath(os.path.join(base_dir, subfolder, filename))
        base_abs = os.path.abspath(base_dir)
        if os.path.commonpath([base_abs, full_path]) != base_abs:
            return web.json_response({"error": "invalid path"}, status=400)

        if not os.path.exists(full_path):
            return web.json_response({"error": f"File not found: {full_path}"}, status=404)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Check if already registered
        cursor.execute(
            "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND is_deleted = 0",
            (filename, subfolder),
        )
        existing = cursor.fetchone()
        if existing:
            conn.close()
            return web.json_response(
                {"success": True, "message": "Already registered", "id": existing[0]}
            )

        # Extract metadata from PNG
        pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(
            full_path
        )

        timestamp = os.path.getmtime(full_path)

        # Insert Image
        cursor.execute(
            "INSERT INTO images (filename, subfolder, created_at, is_deleted) VALUES (?, ?, ?, 0)",
            (filename, subfolder, timestamp),
        )
        image_id = cursor.lastrowid

        # Insert Prompts
        pos_list = [p.strip() for p in pos.split(",") if p.strip()] if pos else []
        neg_list = [n.strip() for n in neg.split(",") if n.strip()] if neg else []

        for p in pos_list:
            cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (p,))
            cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (p,))
            row = cursor.fetchone()
            if row:
                pp_id = row[0]
                cursor.execute(
                    "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id) VALUES (?, ?)",
                    (image_id, pp_id),
                )

        for n in neg_list:
            cursor.execute("INSERT OR IGNORE INTO negative_prompts (name) VALUES (?)", (n,))
            cursor.execute("SELECT id FROM negative_prompts WHERE name = ?", (n,))
            row = cursor.fetchone()
            if row:
                np_id = row[0]
                cursor.execute(
                    "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id) VALUES (?, ?)",
                    (image_id, np_id),
                )

        conn.commit()
        conn.close()

        # Notify frontend
        server.PromptServer.instance.send_sync("meld-nexus-image-saved", {"count": 1})

        return web.json_response({"success": True, "id": image_id})
    except Exception:
        logging.exception("[Meld-Flow] Failed to register image")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.get("/meld-nexus/list")
async def list_images(request):
    conn = get_db_connection()
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
        image_id = data.get("id")
        filename = data.get("filename") # Fallback for old frontend

        if not image_id and not filename:
            return web.json_response({"error": "id or filename is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        if image_id:
            cursor.execute("UPDATE images SET is_deleted = 1 WHERE id = ?", (image_id,))
        else:
            cursor.execute("UPDATE images SET is_deleted = 1 WHERE filename = ?", (filename,))

        if cursor.rowcount == 0:
            conn.close()
            return web.json_response({"error": "Image not found"}, status=404)

        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)
