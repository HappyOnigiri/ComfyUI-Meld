import logging
import os

import folder_paths

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore
import server
from aiohttp import web
from PIL import Image

from ..load_image_configs.metadata_helper import MetadataHelper
from .database import get_db_connection


@server.PromptServer.instance.routes.get("/api/meld-nexus/test")
async def test_endpoint(request):
    return web.json_response({"status": "ok", "message": "Meld Nexus is running"})


@server.PromptServer.instance.routes.get("/api/meld-nexus/settings")
async def get_settings(request):
    return web.json_response({
        "dev_mode": os.environ.get("MELDFLOW_DEV") == "true"
    })


@server.PromptServer.instance.routes.post("/api/meld-nexus/register")
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

        # Calculate pHash
        phash = None
        if imagehash is not None:
            try:
                with Image.open(full_path) as img:
                    phash = str(imagehash.phash(img))
            except Exception:
                logging.warning(f"[Meld-Flow] Failed to calculate phash for {full_path}")

        # Insert Image
        cursor.execute(
            "INSERT INTO images (filename, subfolder, type, created_at, phash, is_deleted) VALUES (?, ?, ?, ?, ?, 0)",
            (filename, subfolder, img_type, timestamp, phash),
        )
        image_id = cursor.lastrowid

        # Insert Prompts
        pos_list = MetadataHelper.smart_split(pos) if pos else []
        neg_list = MetadataHelper.smart_split(neg) if neg else []

        for p in pos_list:
            prompt_results = MetadataHelper.parse_prompt_with_weight(p)
            for clean_name, strength in prompt_results:
                if not clean_name:
                    continue
                cursor.execute("INSERT OR IGNORE INTO positive_prompts (name) VALUES (?)", (clean_name,))
                cursor.execute("SELECT id FROM positive_prompts WHERE name = ?", (clean_name,))
                row = cursor.fetchone()
                if row:
                    pp_id = row[0]
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
                row = cursor.fetchone()
                if row:
                    np_id = row[0]
                    cursor.execute(
                        "INSERT INTO negative_prompt_image_relations "
                        "(image_id, negative_prompt_id, strength) VALUES (?, ?, ?)",
                        (image_id, np_id, strength),
                    )

        conn.commit()
        conn.close()

        # Notify frontend
        server.PromptServer.instance.send_sync("meld-nexus-image-saved", {"count": 1})

        return web.json_response({"success": True, "id": image_id})
    except Exception:
        logging.exception("[Meld-Flow] Failed to register image")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/list")
async def list_images(request):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Fetch images with basic info
    cursor.execute("""
        SELECT id, filename, subfolder, type, created_at, phash
        FROM images WHERE is_deleted = 0 ORDER BY created_at DESC
    """)
    images = cursor.fetchall()

    result_list = []

    for img in images:
        img_id, filename, subfolder, img_type, created_at, phash = img

        # Fetch positive prompt
        cursor.execute("""
            SELECT pp.name, r.strength FROM positive_prompts pp
            JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id
            WHERE r.image_id = ?
        """, (img_id,))
        pos_rows = cursor.fetchall()
        pos_list = []
        for name, strength in pos_rows:
            if strength == 1.0:
                pos_list.append(name)
            else:
                pos_list.append(f"({name}:{strength})")
        positive = ", ".join(pos_list)

        # Fetch negative prompt
        cursor.execute("""
            SELECT np.name, r.strength FROM negative_prompts np
            JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id
            WHERE r.image_id = ?
        """, (img_id,))
        neg_rows = cursor.fetchall()
        neg_list = []
        for name, strength in neg_rows:
            if strength == 1.0:
                neg_list.append(name)
            else:
                neg_list.append(f"({name}:{strength})")
        negative = ", ".join(neg_list)

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
            "type": img_type,
            "created_at": created_at,
            "phash": phash,
            "positive": positive,
            "negative": negative,
            "tags": tags
        })

    conn.close()
    return web.json_response(result_list)

@server.PromptServer.instance.routes.get("/api/meld-nexus/related")
async def get_related_images(request):
    try:
        image_id = request.query.get("id")
        threshold = int(request.query.get("threshold", 8))

        if not image_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get the target phash
        cursor.execute("SELECT phash FROM images WHERE id = ?", (image_id,))
        row = cursor.fetchone()
        if not row or not row[0]:
            conn.close()
            return web.json_response([]) # Return empty if no phash

        target_phash = row[0]

        # Fetch all other images with phash
        cursor.execute("""
            SELECT id, filename, subfolder, type, phash FROM images
            WHERE id != ? AND phash IS NOT NULL AND is_deleted = 0
        """, (image_id,))
        other_images = cursor.fetchall()

        def hamming_distance(h1, h2):
            try:
                return bin(int(h1, 16) ^ int(h2, 16)).count('1')
            except Exception:
                return 999

        related = []
        for img_id, filename, subfolder, img_type, phash in other_images:
            dist = hamming_distance(target_phash, phash)
            if dist <= threshold:
                related.append({
                    "id": img_id,
                    "filename": filename,
                    "subfolder": subfolder,
                    "type": img_type,
                    "distance": dist
                })

        # Sort by distance
        related.sort(key=lambda x: x["distance"])

        conn.close()
        return web.json_response(related[:20]) # Limit to top 20
    except Exception:
        logging.exception("[Meld-Flow] Failed to get related images")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/bulk-delete")
async def bulk_delete_images(request):
    try:
        data = await request.json()
        image_ids = data.get("ids", [])
        delete_files = data.get("delete_files", False)

        if not image_ids:
            return web.json_response({"error": "ids are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get file paths before deleting from DB
        placeholders = ",".join(["?"] * len(image_ids))
        cursor.execute(f"SELECT id, filename, subfolder, type FROM images WHERE id IN ({placeholders})", image_ids)
        images = cursor.fetchall()

        deleted_count = 0
        for img_id, filename, subfolder, img_type in images:
            if delete_files:
                # Resolve base directory
                if img_type == "output":
                    base_dir = folder_paths.get_output_directory()
                elif img_type == "input":
                    base_dir = folder_paths.get_input_directory()
                elif img_type == "temp":
                    base_dir = folder_paths.get_temp_directory()
                else:
                    continue

                # Resolve full path safely
                full_path = os.path.abspath(os.path.join(base_dir, subfolder, filename))
                if os.path.exists(full_path):
                    try:
                        os.remove(full_path)
                    except Exception as e:
                        logging.warning(f"[Meld-Flow] Failed to delete file {full_path}: {e}")

            cursor.execute("UPDATE images SET is_deleted = 1 WHERE id = ?", (img_id,))
            deleted_count += 1

        conn.commit()
        conn.close()
        return web.json_response({"success": True, "count": deleted_count})
    except Exception as e:
        logging.exception("[Meld-Flow] Bulk delete failed")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/delete")
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
