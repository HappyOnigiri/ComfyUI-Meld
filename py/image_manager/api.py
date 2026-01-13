import json
import logging
import os
from typing import Any

import folder_paths

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore
import threading
import time

import server
from aiohttp import web
from PIL import Image

from ..load_image_configs.core.metadata_helper import MetadataHelper
from .database import (
    add_model_relation,
    calculate_sha256,
    delete_tag,
    find_closest_parent,
    get_all_settings,
    get_all_tags,
    get_db_connection,
    get_or_create_model,
    upsert_setting,
)
from .search_service import SearchService

_scan_state = {"is_running": False, "should_cancel": False}


def perform_cleanup() -> int:
    """Logic to logically delete image data that does not exist in the DB"""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        # 削除されていない全画像を取得
        cursor.execute("SELECT id, filename, subfolder, type FROM images WHERE is_deleted = 0")
        images = cursor.fetchall()

        missing_count = 0
        for img_id, filename, subfolder, img_type in images:
            # パスの解決
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            else:
                continue

            full_path = os.path.join(base_dir, subfolder, filename)

            # ファイルが存在しなければ is_deleted = 1 に更新
            if not os.path.exists(full_path):
                cursor.execute("UPDATE images SET is_deleted = 1 WHERE id = ?", (img_id,))
                missing_count += 1

        if missing_count > 0:
            conn.commit()
        return missing_count
    finally:
        conn.close()


def _scan_thread(base_dir: str, subfolder: str, recursive: bool, auto_link_parent: bool) -> None:
    global _scan_state
    conn = None
    new_count = 0
    total = 0
    processed = 0
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
                cursor.execute("SELECT id FROM images WHERE sha256 = ? AND is_deleted = 0", (sha256,))
                existing = cursor.fetchone()
                if existing:
                    processed += 1
                    server.PromptServer.instance.send_sync(
                        "meld-nexus-scan-progress", {"current": processed, "total": total, "phase": "registering"}
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
                img_type = "output" if "output" in base_dir else "input"  # Simple heuristic
                sql = """
                    INSERT INTO images
                    (filename, subfolder, type, created_at, phash, sha256, is_deleted, positive_prompt, negative_prompt, workflow)
                    VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
                """
                cursor.execute(
                    sql,
                    (
                        filename,
                        rel_path,
                        img_type,
                        timestamp,
                        phash,
                        sha256,
                        pos,
                        neg,
                        wf_json,
                    ),
                )
                image_id = cursor.lastrowid

                # Insert Model Relation
                if model:
                    m_id = get_or_create_model(cursor, model)
                    add_model_relation(cursor, image_id, m_id)

                newly_registered_ids.append(image_id)
                new_count += 1

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
                                "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id, strength) VALUES (?, ?, ?)",
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
                                "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id, strength) VALUES (?, ?, ?)",
                                (image_id, np_id, strength),
                            )

                processed += 1
                server.PromptServer.instance.send_sync(
                    "meld-nexus-scan-progress", {"current": processed, "total": total, "phase": "registering"}
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
            total_linking = len(newly_registered_ids)
            processed_linking = 0
            for img_id in newly_registered_ids:
                if _scan_state["should_cancel"]:
                    break

                # Get phash and metadata for linking
                cursor.execute(
                    "SELECT filename, subfolder, type, phash, created_at FROM images WHERE id = ?", (img_id,)
                )
                row = cursor.fetchone()
                if not row:
                    processed_linking += 1
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

                processed_linking += 1
                if processed_linking % 5 == 0 or processed_linking == total_linking:
                    server.PromptServer.instance.send_sync(
                        "meld-nexus-scan-progress",
                        {"current": processed_linking, "total": total_linking, "phase": "linking"},
                    )

            conn.commit()

    except Exception as e:
        logging.exception(f"[Meld-Flow] Scan thread failed: {e}")
    finally:
        if conn:
            conn.close()
        _scan_state["is_running"] = False
        _scan_state["should_cancel"] = False
        server.PromptServer.instance.send_sync(
            "meld-nexus-scan-finished", {"status": "completed", "new_count": new_count, "total_count": processed}
        )


@server.PromptServer.instance.routes.post("/api/meld-nexus/cleanup")
async def cleanup_endpoint(request: web.Request) -> web.Response:
    try:
        count = perform_cleanup()
        return web.json_response({"success": True, "count": count})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/folders")
async def list_folders(request: web.Request) -> web.Response:
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
async def start_scan(request: web.Request) -> web.Response:
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
async def cancel_scan(request: web.Request) -> web.Response:
    global _scan_state
    _scan_state["should_cancel"] = True
    return web.json_response({"status": "cancelling"})


@server.PromptServer.instance.routes.get("/api/meld-nexus/scan/status")
async def get_scan_status(request: web.Request) -> web.Response:
    return web.json_response(_scan_state)


def extract_source_filenames(workflow_json: str | dict | None, prompt_json: str | dict | None) -> list[str]:
    filenames = set()

    # Helper to check for image inputs
    def check_inputs(inputs: dict) -> None:
        if not isinstance(inputs, dict):
            return
        # Common widget names for image loading
        for key, val in inputs.items():
            if key in ["image", "filename", "image_path"] and isinstance(val, str):
                filenames.add(val)

    # Parse workflow_json (graph format)
    if workflow_json:
        try:
            data = json.loads(workflow_json) if isinstance(workflow_json, str) else workflow_json
            if isinstance(data, dict):
                nodes = data.get("nodes", [])
                if isinstance(nodes, list):
                    for node in nodes:
                        widgets_values = node.get("widgets_values")
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
                    check_inputs(node_data.get("inputs", {}))
        except Exception:
            pass

    return list(filenames)


@server.PromptServer.instance.routes.get("/api/meld-nexus/image/{image_id}/workflow")
async def get_image_workflow(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT workflow FROM images WHERE id = ? AND is_deleted = 0", (image_id,))
        row = cursor.fetchone()
        conn.close()

        if row and row[0]:
            try:
                # workflow is stored as JSON string in DB
                workflow_data = json.loads(row[0])
                return web.json_response({"workflow": workflow_data})
            except Exception as e:
                return web.json_response({"error": f"Failed to parse workflow: {str(e)}"}, status=500)

        return web.json_response({"error": "Workflow not found"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/image/{image_id}/snapshot_data")
async def get_image_snapshot_data(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT i.filename, i.subfolder, i.type, i.positive_prompt, i.negative_prompt, i.workflow,
                   (SELECT m.name FROM models m
                    JOIN model_image_relations mir ON m.id = mir.model_id
                    WHERE mir.image_id = i.id LIMIT 1) as model_name
            FROM images i WHERE i.id = ? AND i.is_deleted = 0
        """,
            (image_id,),
        )
        row = cursor.fetchone()
        conn.close()

        if not row:
            return web.json_response({"error": "Image not found"}, status=404)

        filename, subfolder, img_type, db_pos, db_neg, workflow_json, model_name = row

        # Resolve path to extract full metadata if possible
        if img_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif img_type == "input":
            base_dir = folder_paths.get_input_directory()
        elif img_type == "temp":
            base_dir = folder_paths.get_temp_directory()
        else:
            base_dir = None

        data = {
            "model_name": model_name or "v1-5-pruned-emaonly.ckpt",
            "positive": db_pos or "",
            "negative": db_neg or "",
            "seed": 0,
            "steps": 20,
            "cfg": 8.0,
            "sampler_name": "euler",
            "scheduler": "normal",
            "width": 512,
            "height": 512,
        }

        if base_dir:
            full_path = os.path.join(base_dir, subfolder, filename)
            if os.path.exists(full_path):
                with Image.open(full_path) as img:
                    data["width"], data["height"] = img.size

                # Use MetadataHelper to get more details (seed, steps, etc.)
                (
                    pos,
                    neg,
                    m_name,
                    wf_json,
                    pr_json,
                    a1111_text,
                    logs,
                ) = MetadataHelper.extract_metadata(full_path)

                # Update with more accurate info if found
                if m_name:
                    data["model_name"] = m_name
                if pos:
                    data["positive"] = pos
                if neg:
                    data["negative"] = neg

                # Get KSampler params
                k_params: dict[str, Any] = {}
                found_k = False
                if wf_json:
                    k_params, found_k = MetadataHelper.get_ksampler_params(wf_json, [])

                if not found_k and pr_json:
                    k_params, found_k = MetadataHelper.get_ksampler_params_from_prompt(pr_json, [])

                if not found_k and a1111_text:
                    k_params = MetadataHelper.parse_a1111_params(a1111_text)
                    found_k = bool(k_params)

                if found_k:
                    for k in ["seed", "steps", "cfg", "sampler_name", "scheduler"]:
                        if k in k_params and k_params[k] is not None:
                            data[k] = k_params[k]

        return web.json_response(data)
    except Exception as e:
        logging.exception(f"[Meld-Flow] Failed to get snapshot data: {e}")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/tags")
async def list_tags(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        tags = get_all_tags(cursor)
        conn.close()
        return web.json_response(tags)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/tags")
async def create_tag(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        name = data.get("name")
        if not name:
            return web.json_response({"error": "name is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (name,))
        conn.commit()
        cursor.execute("SELECT id, name FROM tags WHERE name = ?", (name,))
        row = cursor.fetchone()
        conn.close()

        if row:
            return web.json_response({"id": row[0], "name": row[1]})
        return web.json_response({"error": "Failed to create tag"}, status=500)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.delete("/api/meld-nexus/tags")
async def remove_tag(request: web.Request) -> web.Response:
    try:
        tag_id = request.query.get("id")
        if not tag_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        success = delete_tag(conn, int(tag_id))
        conn.close()

        if success:
            return web.json_response({"success": True})
        return web.json_response({"error": "Tag not found"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/test")
async def test_endpoint(request: web.Request) -> web.Response:
    return web.json_response({"status": "ok", "message": "Meld Nexus is running"})


@server.PromptServer.instance.routes.get("/api/meld-nexus/settings")
async def get_settings(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        db_settings = get_all_settings(cursor)
        conn.close()

        # Default settings
        settings = {
            "dev_mode": os.environ.get("MELDFLOW_DEV") == "true",
            "gallery.show_parent_image": True,
            "gallery.hide_parent_images": True,
            "sidebar.show_filename": True,
            "sidebar.show_model_name": True,
            "sidebar.show_positive_prompt": True,
            "sidebar.show_negative_prompt": False,
            "sidebar.show_tags": True,
        }

        # Merge with DB settings
        settings.update(db_settings)

        return web.json_response(settings)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/settings")
async def save_settings(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        key = data.get("key")
        value = data.get("value")

        if key is None:
            return web.json_response({"error": "key is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        upsert_setting(cursor, key, value)
        conn.commit()
        conn.close()

        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/register")
async def register_image(request: web.Request) -> web.Response:
    try:
        if request.has_body and request.content_type == "application/json":
            data = await request.json()
        else:
            return web.json_response({"error": "Content-Type must be application/json"}, status=400)

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
            "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND is_deleted = 0", (filename, subfolder)
        )
        existing = cursor.fetchone()
        if existing:
            conn.close()
            return web.json_response({"success": True, "message": "Already registered", "id": existing[0]})

        # Extract metadata from PNG
        pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)

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
            (filename, subfolder, type, created_at, phash, sha256, parent_id, is_deleted, positive_prompt, negative_prompt, workflow)
            VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
        """
        cursor.execute(
            sql,
            (
                filename,
                subfolder,
                img_type,
                timestamp,
                phash,
                sha256,
                parent_id,
                pos,
                neg,
                wf_json,
            ),
        )
        image_id = cursor.lastrowid

        # Insert Model Relation
        if model:
            m_id = get_or_create_model(cursor, model)
            add_model_relation(cursor, image_id, m_id)

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
                        "INSERT INTO positive_prompt_image_relations (image_id, positive_prompt_id, strength) VALUES (?, ?, ?)",
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
                        "INSERT INTO negative_prompt_image_relations (image_id, negative_prompt_id, strength) VALUES (?, ?, ?)",
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


@server.PromptServer.instance.routes.get("/api/meld-nexus/suggest")
async def suggest_endpoint(request: web.Request) -> web.Response:
    try:
        query = request.query.get("query", "")
        prefix = request.query.get("type", None)

        conn = get_db_connection()
        cursor = conn.cursor()
        suggestions = SearchService.get_suggestions(cursor, query, prefix_filter=prefix)
        conn.close()

        return web.json_response(suggestions)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/search-suggestions")
async def search_suggestions_endpoint(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        suggestions = SearchService.get_random_search_suggestions(cursor)
        conn.close()

        return web.json_response(suggestions)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/list")
async def list_images(request: web.Request) -> web.Response:
    try:
        offset = int(request.query.get("offset", 0))
        limit = int(request.query.get("limit", 1000000))
        query_str = request.query.get("query", "")

        conn = get_db_connection()
        cursor = conn.cursor()

        search_sql, search_params = SearchService.build_search_sql(query_str)

        # Get total count
        count_sql = f"SELECT COUNT(*) FROM images i WHERE i.is_deleted = 0{search_sql}"
        cursor.execute(count_sql, search_params)
        total_count = cursor.fetchone()[0]

        # Fetch images with basic info
        fetch_sql = f"""
            SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.phash, i.sha256, i.parent_id,
                   p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
                   EXISTS(SELECT 1 FROM images c WHERE c.parent_id = i.id AND c.is_deleted = 0) as has_children,
                   i.positive_prompt, i.negative_prompt,
                   (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                    JOIN model_image_relations mir ON m.id = mir.model_id
                    WHERE mir.image_id = i.id) as model_name,
                   i.workflow
            FROM images i LEFT JOIN images p ON i.parent_id = p.id
            WHERE i.is_deleted = 0{search_sql} ORDER BY i.created_at DESC LIMIT ? OFFSET ?
        """
        cursor.execute(fetch_sql, (*search_params, limit, offset))
        images = cursor.fetchall()

        result_list = []

        for img in images:
            (
                img_id,
                filename,
                subfolder,
                img_type,
                created_at,
                phash,
                sha256,
                parent_id,
                p_filename,
                p_subfolder,
                p_type,
                has_children,
                db_positive,
                db_negative,
                model_name,
                workflow,
            ) = img

            # Fetch positive prompt (reconstructed from normalized tables as fallback or secondary)
            cursor.execute(
                "SELECT pp.name, r.strength FROM positive_prompts pp JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id WHERE r.image_id = ?",
                (img_id,),
            )
            pos_rows = cursor.fetchall()
            pos_list = []
            for name, strength in pos_rows:
                pos_list.append(name if strength == 1.0 else f"({name}:{strength})")
            reconstructed_positive = ", ".join(pos_list)

            # Fetch negative prompt
            cursor.execute(
                "SELECT np.name, r.strength FROM negative_prompts np JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id WHERE r.image_id = ?",
                (img_id,),
            )
            neg_rows = cursor.fetchall()
            neg_list = []
            for name, strength in neg_rows:
                neg_list.append(name if strength == 1.0 else f"({name}:{strength})")
            reconstructed_negative = ", ".join(neg_list)

            # Use DB columns if available, otherwise fallback to reconstructed
            positive = db_positive if db_positive is not None else reconstructed_positive
            negative = db_negative if db_negative is not None else reconstructed_negative

            # Fetch tags
            cursor.execute(
                "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
                (img_id,),
            )
            tag_rows = cursor.fetchall()
            tags = [t[0] for t in tag_rows]

            # Check if file exists
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            else:
                base_dir = None

            exists = False
            if base_dir:
                full_path = os.path.join(base_dir, subfolder, filename)
                exists = os.path.exists(full_path)

            result_list.append(
                {
                    "id": img_id,
                    "filename": filename,
                    "subfolder": subfolder,
                    "type": img_type,
                    "created_at": created_at,
                    "phash": phash,
                    "sha256": sha256,
                    "parent_id": parent_id,
                    "parent_filename": p_filename,
                    "parent_subfolder": p_subfolder,
                    "parent_type": p_type,
                    "has_children": bool(has_children),
                    "positive": positive,
                    "negative": negative,
                    "positive_prompt": db_positive,
                    "negative_prompt": db_negative,
                    "model_name": model_name,
                    "workflow": workflow,
                    "tags": tags,
                    "exists": exists,
                }
            )

        conn.close()
        return web.json_response({"images": result_list, "total": total_count, "offset": offset, "limit": limit})
    except Exception as e:
        logging.exception("[Meld-Flow] Failed to list images")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/related")
async def get_related_images(request: web.Request) -> web.Response:
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
            return web.json_response([])  # Return empty if no phash

        target_phash = row[0]

        # Fetch all other images with phash
        cursor.execute(
            "SELECT id, filename, subfolder, type, phash FROM images WHERE id != ? AND phash IS NOT NULL AND is_deleted = 0",
            (image_id,),
        )
        other_images = cursor.fetchall()

        def hamming_distance(h1: str, h2: str) -> int:
            try:
                return bin(int(h1, 16) ^ int(h2, 16)).count("1")
            except Exception:
                return 999

        related = []
        for img_id, filename, subfolder, img_type, phash in other_images:
            dist = hamming_distance(target_phash, phash)
            if dist <= threshold:
                related.append(
                    {"id": img_id, "filename": filename, "subfolder": subfolder, "type": img_type, "distance": dist}
                )

        # Sort by distance
        related.sort(key=lambda x: x["distance"])

        conn.close()
        return web.json_response(related[:20])  # Limit to top 20
    except Exception:
        logging.exception("[Meld-Flow] Failed to get related images")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/bulk-delete")
async def bulk_delete_images(request: web.Request) -> web.Response:
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
async def delete_image(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_id = data.get("id")
        filename = data.get("filename")  # Fallback for old frontend

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
                (filename,),
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
async def link_parent(request: web.Request) -> web.Response:
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
                    return web.json_response({"error": "Parent image must be older than the child image"}, status=400)

        cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (parent_id, child_id))
        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/suggest-parents")
async def suggest_parents(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")
        threshold = int(request.query.get("threshold", 12))  # Slightly higher threshold for suggestions

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
                        cursor.execute(
                            f"SELECT id, filename, subfolder, type, phash, created_at FROM images WHERE filename IN ({placeholders}) AND is_deleted = 0 AND id != ? AND created_at < ?",
                            (*source_filenames, image_id, target_created_at),
                        )
                        for match in cursor.fetchall():
                            source_matches.append(
                                {
                                    "id": match[0],
                                    "filename": match[1],
                                    "subfolder": match[2],
                                    "type": match[3],
                                    "distance": 0,
                                    "created_at": match[5],
                                    "is_source_match": True,
                                }
                            )
        except Exception as e:
            logging.warning(f"[Meld-Flow] Failed to extract source filenames: {e}")

        # 2. Find pHash matches
        phash_matches = []
        if target_phash:
            # Fetch images created BEFORE the target image
            cursor.execute(
                "SELECT id, filename, subfolder, type, phash, created_at FROM images WHERE id != ? AND phash IS NOT NULL AND is_deleted = 0 AND created_at < ? ORDER BY created_at DESC",
                (image_id, target_created_at),
            )
            other_images = cursor.fetchall()

            def hamming_distance(h1: str, h2: str) -> int:
                try:
                    return bin(int(h1, 16) ^ int(h2, 16)).count("1")
                except Exception:
                    return 999

            for img_id, filename, subfolder, img_type, phash, created_at in other_images:
                # Skip if already in source matches
                if any(m["id"] == img_id for m in source_matches):
                    continue

                dist = hamming_distance(target_phash, phash)
                if dist <= threshold:
                    phash_matches.append(
                        {
                            "id": img_id,
                            "filename": filename,
                            "subfolder": subfolder,
                            "type": img_type,
                            "distance": dist,
                            "created_at": created_at,
                            "is_source_match": False,
                        }
                    )

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
async def get_lineage(request: web.Request) -> web.Response:
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
        SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.parent_id, i.phash,
               p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
               i.positive_prompt, i.negative_prompt,
               (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                JOIN model_image_relations mir ON m.id = mir.model_id
                WHERE mir.image_id = i.id) as model_name,
               i.workflow
        FROM images i LEFT JOIN images p ON i.parent_id = p.id
        WHERE (i.id IN (SELECT id FROM ancestors) OR i.id IN (SELECT id FROM descendants)) AND i.is_deleted = 0
        ORDER BY i.created_at
        """

        cursor.execute(sql, (image_id, image_id))
        rows = cursor.fetchall()

        result = []
        for row in rows:
            result.append(
                {
                    "id": row[0],
                    "filename": row[1],
                    "subfolder": row[2],
                    "type": row[3],
                    "created_at": row[4],
                    "parent_id": row[5],
                    "phash": row[6],
                    "parent_filename": row[7],
                    "parent_subfolder": row[8],
                    "parent_type": row[9],
                    "positive": row[10] or "",
                    "negative": row[11] or "",
                    "positive_prompt": row[10],
                    "negative_prompt": row[11],
                    "model_name": row[12],
                    "workflow": row[13],
                }
            )

        conn.close()
        return web.json_response(result)
    except Exception as e:
        logging.exception("[Meld-Flow] Failed to get lineage")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/api/meld-nexus/favorites")
async def list_favorites(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, query, created_at FROM favorites ORDER BY created_at DESC")
        rows = cursor.fetchall()
        conn.close()

        favorites = []
        for row in rows:
            favorites.append({"id": row[0], "name": row[1], "query": row[2], "created_at": row[3]})

        return web.json_response(favorites)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/favorites")
async def save_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        name = data.get("name", "")
        query = data.get("query", "")

        if not query:
            return web.json_response({"error": "query is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO favorites (name, query, created_at) VALUES (?, ?, ?)", (name, query, time.time()))
        conn.commit()
        conn.close()

        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/favorites/update")
async def update_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        fav_id = data.get("id")
        name = data.get("name")

        if fav_id is None or name is None:
            return web.json_response({"error": "id and name are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE favorites SET name = ? WHERE id = ?", (name, fav_id))
        conn.commit()
        conn.close()

        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/api/meld-nexus/favorites/delete")
async def delete_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        fav_id = data.get("id")

        if fav_id is None:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM favorites WHERE id = ?", (fav_id,))
        conn.commit()
        conn.close()

        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


# --- Automatic cleanup (at extension load time) ---
def _run_auto_cleanup() -> None:
    """Run cleanup in the background"""
    import time

    time.sleep(5)  # Wait a bit to prioritize other initialization tasks
    try:
        count = perform_cleanup()
        if count > 0:
            logging.info(f"[Meld-Flow] Extension load cleanup: Removed {count} missing images from database.")
    except Exception as e:
        logging.warning(f"[Meld-Flow] Extension load cleanup failed: {e}")


threading.Thread(target=_run_auto_cleanup, daemon=True).start()
