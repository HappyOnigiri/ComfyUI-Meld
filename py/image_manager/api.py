import json
import logging
import os

import folder_paths

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore
import threading

import server
from aiohttp import web
from PIL import Image

from ..load_image_configs.metadata_helper import MetadataHelper
from .database import calculate_sha256, find_closest_parent, get_db_connection

_scan_state = {"is_running": False, "should_cancel": False}


def _scan_thread(base_dir, subfolder, recursive, auto_link_parent):
    global _scan_state
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        target_dir = os.path.join(base_dir, subfolder)
        image_files = []

        # Collect all image files
        for root, _, files in os.walk(target_dir):
            if not recursive and root != target_dir:
                continue
            for f in files:
                if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    image_files.append(os.path.join(root, f))

        total = len(image_files)
        processed = 0

        # Step 1: Register all images
        newly_registered_ids = []
        for full_path in image_files:
            if _scan_state["should_cancel"]:
                break

            try:
                # Basic info
                filename = os.path.basename(full_path)
                # subfolder relative to base_dir
                rel_path = os.path.relpath(os.path.dirname(full_path), base_dir)
                if rel_path == ".":
                    rel_path = ""

                # Check if already registered (by filename and subfolder or by sha256)
                sha256 = calculate_sha256(full_path)
                cursor.execute(
                    "SELECT id FROM images WHERE sha256 = ? AND is_deleted = 0",
                    (sha256,),
                )
                existing = cursor.fetchone()
                if existing:
                    processed += 1
                    server.PromptServer.instance.send_sync(
                        "meld-nexus-scan-progress", {"current": processed, "total": total}
                    )
                    continue

                # Extract metadata
                pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)
                timestamp = os.path.getmtime(full_path)

                # Calculate pHash
                phash = None
                if imagehash is not None:
                    try:
                        with Image.open(full_path) as img:
                            phash = str(imagehash.phash(img))
                    except Exception:
                        pass

                # Insert Image
                img_type = "output" if "output" in base_dir else "input" # Simple heuristic
                sql = """
                    INSERT INTO images
                    (filename, subfolder, type, created_at, phash, sha256, is_deleted)
                    VALUES (?, ?, ?, ?, ?, ?, 0)
                """
                cursor.execute(
                    sql,
                    (filename, rel_path, img_type, timestamp, phash, sha256),
                )
                image_id = cursor.lastrowid
                newly_registered_ids.append(image_id)

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
                                "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id, strength) "
                                "VALUES (?, ?, ?)",
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
                                "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id, strength) "
                                "VALUES (?, ?, ?)",
                                (image_id, np_id, strength),
                            )

                processed += 1
                server.PromptServer.instance.send_sync(
                    "meld-nexus-scan-progress", {"current": processed, "total": total}
                )

                # Commit periodically or at the end
                if processed % 10 == 0:
                    conn.commit()

            except Exception as e:
                logging.warning(f"[Meld-Flow] Failed to process {full_path}: {e}")
                processed += 1

        conn.commit()

        # Step 2: Parent Linking (Auto)
        if auto_link_parent and not _scan_state["should_cancel"]:
            for img_id in newly_registered_ids:
                if _scan_state["should_cancel"]:
                    break

                # Get phash and metadata for linking
                cursor.execute(
                    "SELECT filename, subfolder, type, phash, created_at FROM images WHERE id = ?", (img_id,)
                )
                row = cursor.fetchone()
                if not row:
                    continue
                fname, subf, itype, iphash, icreated = row

                parent_id = None

                # Rule 1: Filename match in metadata
                try:
                    if itype == "output":
                        base = folder_paths.get_output_directory()
                    elif itype == "input":
                        base = folder_paths.get_input_directory()
                    else:
                        base = folder_paths.get_temp_directory()

                    p_full = os.path.join(base, subf, fname)
                    _, _, _, wf_json, pr_json, _, _ = MetadataHelper.extract_metadata(p_full)
                    source_filenames = extract_source_filenames(wf_json, pr_json)
                    if source_filenames:
                        placeholders = ",".join(["?"] * len(source_filenames))
                        sql = (
                            f"SELECT id FROM images WHERE filename IN ({placeholders}) "
                            "AND is_deleted = 0 AND created_at < ? ORDER BY created_at DESC LIMIT 1"
                        )
                        cursor.execute(sql, (*source_filenames, icreated))
                        res = cursor.fetchone()
                        if res:
                            parent_id = res[0]
                except Exception:
                    pass

                # Rule 2: pHash match
                if parent_id is None and iphash:
                    parent_id = find_closest_parent(iphash, cursor, exclude_id=img_id, before_timestamp=icreated)

                if parent_id and parent_id != img_id:
                    cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (parent_id, img_id))

            conn.commit()

    except Exception as e:
        logging.exception(f"[Meld-Flow] Scan thread failed: {e}")
    finally:
        if conn:
            conn.close()
        _scan_state["is_running"] = False
        _scan_state["should_cancel"] = False
        server.PromptServer.instance.send_sync("meld-nexus-scan-finished", {"status": "completed"})


@server.PromptServer.instance.routes.get("/api/meld-nexus/folders")
async def list_folders(request):
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""  # Absolute path mode

        target_path = os.path.abspath(os.path.join(base_dir, path))

        if not os.path.exists(target_path):
            return web.json_response([])

        if not os.path.isdir(target_path):
            return web.json_response({"error": "Not a directory"}, status=400)

        folders = []
        try:
            for item in os.listdir(target_path):
                full_item_path = os.path.join(target_path, item)
                if os.path.isdir(full_item_path):
                    folders.append(item)
        except PermissionError:
            return web.json_response({"error": "Permission denied"}, status=403)

        return web.json_response(sorted(folders))
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/scan")
async def start_scan(request):
    global _scan_state
    if _scan_state["is_running"]:
        return web.json_response({"error": "Scan already running"}, status=400)

    try:
        data = await request.json()
        img_type = data.get("type", "output")
        subfolder = data.get("subfolder", "")
        custom_path = data.get("custom_path", "")
        recursive = data.get("recursive", True)
        auto_link_parent = data.get("auto_link_parent", True)
        base_dir = ""

        if img_type == "output":
            base_dir = folder_paths.get_output_directory()
            target_base = os.path.join(base_dir, subfolder)
        elif img_type == "input":
            base_dir = folder_paths.get_input_directory()
            target_base = os.path.join(base_dir, subfolder)
        elif img_type == "custom":
            if not custom_path:
                return web.json_response({"error": "Custom path is required"}, status=400)
            target_base = custom_path
        else:
            return web.json_response({"error": "Invalid type"}, status=400)

        target_base = os.path.abspath(target_base)
        if not os.path.exists(target_base):
            return web.json_response({"error": f"Path does not exist: {target_base}"}, status=404)

        _scan_state["is_running"] = True
        _scan_state["should_cancel"] = False

        # In custom mode, base_dir for relative path calculation should be the target itself
        calc_base = target_base if img_type == "custom" else base_dir

        thread = threading.Thread(
            target=_scan_thread,
            args=(calc_base, subfolder if img_type != "custom" else "", recursive, auto_link_parent),
        )
        thread.start()

        return web.json_response({"status": "started"})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/scan/cancel")
async def cancel_scan(request):
    global _scan_state
    _scan_state["should_cancel"] = True
    return web.json_response({"status": "cancelling"})


@server.PromptServer.instance.routes.get("/api/meld-nexus/scan/status")
async def get_scan_status(request):
    return web.json_response(_scan_state)


def extract_source_filenames(workflow_json, prompt_json):
    filenames = set()

    # Helper to check for image inputs
    def check_inputs(inputs):
        if not isinstance(inputs, dict):
            return
        # Common widget names for image loading
        for key, val in inputs.items():
            if key in ['image', 'filename', 'image_path'] and isinstance(val, str):
                filenames.add(val)

    # Parse workflow_json (graph format)
    if workflow_json:
        try:
            data = json.loads(workflow_json) if isinstance(workflow_json, str) else workflow_json
            if isinstance(data, dict):
                nodes = data.get('nodes', [])
                if isinstance(nodes, list):
                    for node in nodes:
                        widgets_values = node.get('widgets_values')
                        if isinstance(widgets_values, list):
                            for val in widgets_values:
                                if isinstance(val, str) and any(
                                    val.lower().endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".webp"]
                                ):
                                    filenames.add(val)
        except Exception:
            pass

    # Parse prompt_json (API format)
    if prompt_json:
        try:
            data = json.loads(prompt_json) if isinstance(prompt_json, str) else prompt_json
            if isinstance(data, dict):
                for node_data in data.values():
                    check_inputs(node_data.get('inputs', {}))
        except Exception:
            pass

    return list(filenames)


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
        sha256 = calculate_sha256(full_path)
        if imagehash is not None:
            try:
                with Image.open(full_path) as img:
                    phash = str(imagehash.phash(img))
            except Exception:
                logging.warning(f"[Meld-Flow] Failed to calculate phash for {full_path}")

        # Infer parent_id
        parent_id = find_closest_parent(phash, cursor, before_timestamp=timestamp)

        # Insert Image
        sql = """
            INSERT INTO images
            (filename, subfolder, type, created_at, phash, sha256, parent_id, is_deleted)
            VALUES (?, ?, ?, ?, ?, ?, ?, 0)
        """
        cursor.execute(
            sql,
            (filename, subfolder, img_type, timestamp, phash, sha256, parent_id),
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
        SELECT id, filename, subfolder, type, created_at, phash, sha256, parent_id
        FROM images WHERE is_deleted = 0 ORDER BY created_at DESC
    """)
    images = cursor.fetchall()

    result_list = []

    for img in images:
        img_id, filename, subfolder, img_type, created_at, phash, sha256, parent_id = img

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
            "sha256": sha256,
            "parent_id": parent_id,
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
            # Update children to set parent_id to NULL when parent is deleted
            cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
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
            # Update children to set parent_id to NULL when parent is deleted
            cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (image_id,))
            cursor.execute("UPDATE images SET is_deleted = 1 WHERE id = ?", (image_id,))
        else:
            # Update children for all images with this filename
            cursor.execute(
                "UPDATE images SET parent_id = NULL WHERE parent_id IN (SELECT id FROM images WHERE filename = ?)",
                (filename,)
            )
            cursor.execute("UPDATE images SET is_deleted = 1 WHERE filename = ?", (filename,))

        if cursor.rowcount == 0:
            conn.close()
            return web.json_response({"error": "Image not found"}, status=404)

        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/link-parent")
async def link_parent(request):
    try:
        data = await request.json()
        child_id = data.get("childId")
        parent_id = data.get("parentId")

        if child_id is None:
            return web.json_response({"error": "childId is required"}, status=400)

        if child_id == parent_id:
             return web.json_response({"error": "Cannot set an image as its own parent"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Check created_at timestamps to prevent circular dependencies (parent must be older than child)
        if parent_id is not None:
            cursor.execute("SELECT created_at FROM images WHERE id = ?", (child_id,))
            child_row = cursor.fetchone()
            cursor.execute("SELECT created_at FROM images WHERE id = ?", (parent_id,))
            parent_row = cursor.fetchone()

            if child_row and parent_row:
                child_created = child_row[0]
                parent_created = parent_row[0]
                if parent_created >= child_created:
                    conn.close()
                    return web.json_response(
                        {"error": "Parent image must be older than the child image"},
                        status=400
                    )

        cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (parent_id, child_id))
        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/suggest-parents")
async def suggest_parents(request):
    try:
        image_id = request.query.get("id")
        threshold = int(request.query.get("threshold", 12)) # Slightly higher threshold for suggestions

        if not image_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get the target phash and file info
        cursor.execute("SELECT phash, created_at, filename, subfolder, type FROM images WHERE id = ?", (image_id,))
        row = cursor.fetchone()
        if not row:
            conn.close()
            return web.json_response([])

        target_phash = row[0]
        target_created_at = row[1]
        filename = row[2]
        subfolder = row[3]
        img_type = row[4]

        # 1. Find source filenames from metadata
        source_matches = []
        try:
             # Resolve base directory
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            else:
                base_dir = None

            if base_dir:
                full_path = os.path.join(base_dir, subfolder, filename)
                if os.path.exists(full_path):
                     pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)
                     source_filenames = extract_source_filenames(wf_json, pr_json)

                     if source_filenames:
                         placeholders = ",".join(["?"] * len(source_filenames))
                         cursor.execute(f"""
                            SELECT id, filename, subfolder, type, phash, created_at
                            FROM images
                            WHERE filename IN ({placeholders}) AND is_deleted = 0 AND id != ? AND created_at < ?
                         """, (*source_filenames, image_id, target_created_at))
                         for match in cursor.fetchall():
                             source_matches.append({
                                "id": match[0],
                                "filename": match[1],
                                "subfolder": match[2],
                                "type": match[3],
                                "distance": 0, # Perfect match logic
                                "created_at": match[5],
                                "is_source_match": True
                             })
        except Exception as e:
            logging.warning(f"[Meld-Flow] Failed to extract source filenames: {e}")

        # 2. Find pHash matches
        phash_matches = []
        if target_phash:
            # Fetch images created BEFORE the target image
            cursor.execute("""
                SELECT id, filename, subfolder, type, phash, created_at FROM images
                WHERE id != ? AND phash IS NOT NULL AND is_deleted = 0 AND created_at < ?
                ORDER BY created_at DESC
            """, (image_id, target_created_at))
            other_images = cursor.fetchall()

            def hamming_distance(h1, h2):
                try:
                    return bin(int(h1, 16) ^ int(h2, 16)).count('1')
                except Exception:
                    return 999

            for img_id, filename, subfolder, img_type, phash, created_at in other_images:
                # Skip if already in source matches
                if any(m["id"] == img_id for m in source_matches):
                    continue

                dist = hamming_distance(target_phash, phash)
                if dist <= threshold:
                    phash_matches.append({
                        "id": img_id,
                        "filename": filename,
                        "subfolder": subfolder,
                        "type": img_type,
                        "distance": dist,
                        "created_at": created_at,
                        "is_source_match": False
                    })

            # Sort by distance, then by created_at (most recent first)
            phash_matches.sort(key=lambda x: (x["distance"], -x["created_at"]))

        # Combine: Source matches first, then top 3 pHash matches
        final_suggestions = source_matches + phash_matches[:3]

        conn.close()
        return web.json_response(final_suggestions)
    except Exception as e:
        logging.exception("[Meld-Flow] Failed to suggest parents")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/lineage")
async def get_lineage(request):
    try:
        image_id = request.query.get("id")
        if not image_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Recursive query to get all ancestors and descendants
        sql = """
        WITH RECURSIVE
        ancestors(id) AS (
            SELECT id FROM images WHERE id = ?
            UNION
            SELECT i.parent_id FROM images i JOIN ancestors a ON i.id = a.id WHERE i.parent_id IS NOT NULL
        ),
        descendants(id) AS (
            SELECT id FROM images WHERE id = ?
            UNION
            SELECT i.id FROM images i JOIN descendants d ON i.parent_id = d.id
        )
        SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.parent_id, i.phash
        FROM images i
        WHERE (i.id IN (SELECT id FROM ancestors) OR i.id IN (SELECT id FROM descendants))
        AND i.is_deleted = 0
        ORDER BY i.created_at
        """

        cursor.execute(sql, (image_id, image_id))
        rows = cursor.fetchall()

        result = []
        for row in rows:
            result.append({
                "id": row[0],
                "filename": row[1],
                "subfolder": row[2],
                "type": row[3],
                "created_at": row[4],
                "parent_id": row[5],
                "phash": row[6]
            })

        conn.close()
        return web.json_response(result)
    except Exception as e:
        logging.exception("[Meld-Flow] Failed to get lineage")
        return web.json_response({"error": str(e)}, status=500)
