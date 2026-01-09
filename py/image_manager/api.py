import server
from aiohttp import web

from .database import get_db_connection


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
