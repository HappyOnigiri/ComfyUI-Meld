import asyncio
import json
import logging
import os
import shutil
import threading
import time
from typing import Any

import folder_paths

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore

import server
from aiohttp import web
from PIL import Image

from ..load_image_configs.core.metadata_helper import MetadataHelper
from .database import (
    TRASH_DIR,
    add_model_relation,
    calculate_sha256,
    delete_tag,
    get_all_settings,
    get_all_tags,
    get_db_connection,
    get_or_create_model,
    rename_tag,
    upsert_setting,
)
from .search_service import SearchService
from .services import image_service, scan_service


@server.PromptServer.instance.routes.post("/meld/image-tags")
async def update_image_tags(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_id = data.get("imageId")
        tags = data.get("tags", [])  # List of tag names

        if image_id is None:
            return web.json_response({"error": "imageId is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        try:
            # 1. Clear existing tags for this image
            cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (image_id,))

            # 2. Add new tags and create relations
            for tag_name in tags:
                tag_name = tag_name.strip()
                if not tag_name:
                    continue

                # Get or create tag
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag_name,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    cursor.execute(
                        "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)", (image_id, tag_id)
                    )

            conn.commit()
            return web.json_response({"success": True})
        except Exception as e:
            conn.rollback()
            raise e
        finally:
            conn.close()

    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/bulk-image-tags")
async def bulk_update_image_tags(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_ids = data.get("imageIds", [])
        add_tags = data.get("addTags", [])
        remove_tags = data.get("removeTags", [])

        if not image_ids:
            return web.json_response({"error": "imageIds is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        try:
            # 1. Process tags to add
            for tag_name in add_tags:
                tag_name = tag_name.strip()
                if not tag_name:
                    continue

                # Get or create tag
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag_name,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    # Add to all selected images
                    for image_id in image_ids:
                        cursor.execute(
                            "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)",
                            (image_id, tag_id),
                        )

            # 2. Process tags to remove
            for tag_name in remove_tags:
                tag_name = tag_name.strip()
                if not tag_name:
                    continue

                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    # Remove from all selected images
                    placeholders = ",".join(["?"] * len(image_ids))
                    cursor.execute(
                        f"DELETE FROM tag_image_relations WHERE tag_id = ? AND image_id IN ({placeholders})",
                        (tag_id, *image_ids),
                    )

            conn.commit()
            return web.json_response({"success": True})
        except Exception as e:
            conn.rollback()
            raise e
        finally:
            conn.close()

    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/cleanup")
async def cleanup_endpoint(request: web.Request) -> web.Response:
    try:
        count = scan_service.perform_cleanup()
        return web.json_response({"success": True, "count": count})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/folders")
async def list_folders(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        fast = request.query.get("fast", "false").lower() == "true"
        logging.info(f"[Meld] GET /meld/folders type={base_type} path={path} fast={fast}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""  # Absolute path mode

        target_path = os.path.abspath(os.path.join(base_dir, path))

        if not os.path.exists(target_path):
            return web.json_response({"folders": [], "images": [], "image_count": 0})

        if not os.path.isdir(target_path):
            return web.json_response({"error": "Not a directory"}, status=400)

        folders: list[dict[str, Any]] = []
        images = []
        total_recursive_count = 0

        try:
            # Run blocking IO in a separate thread to avoid blocking the event loop
            loop = asyncio.get_event_loop()
            items = await loop.run_in_executor(None, os.listdir, target_path)

            for item in items:
                full_item_path = os.path.join(target_path, item)
                # Check isdir in a thread if needed, but for simple listdir results it's usually fast enough.
                # However, count_images_recursive and get_first_image_recursive MUST be in threads.
                if await loop.run_in_executor(None, os.path.isdir, full_item_path):
                    if fast:
                        folders.append({"name": item, "count": None, "preview": None})
                    else:
                        # Recursive count for subfolder
                        sub_count = await loop.run_in_executor(
                            None, scan_service.count_images_recursive, full_item_path
                        )

                        # Get sample image for preview
                        preview = None
                        sample_img_path = await loop.run_in_executor(
                            None, scan_service.get_first_image_recursive, full_item_path
                        )
                        if sample_img_path:
                            if base_dir:
                                rel_path = os.path.relpath(sample_img_path, base_dir)
                                filename = os.path.basename(rel_path)
                                subfolder = os.path.dirname(rel_path).replace("\\", "/")
                                preview = {
                                    "filename": filename,
                                    "subfolder": subfolder,
                                    "type": base_type,
                                }
                            else:
                                # Custom path mode
                                preview = {
                                    "filename": os.path.basename(sample_img_path),
                                    "subfolder": os.path.dirname(sample_img_path).replace("\\", "/"),
                                    "type": base_type,
                                }

                        folders.append({"name": item, "count": sub_count, "preview": preview})
                elif item.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    if base_dir:
                        images.append(
                            {
                                "filename": item,
                                "subfolder": path.replace("\\", "/"),
                                "type": base_type,
                            }
                        )
                    else:
                        # Custom path mode
                        images.append(
                            {
                                "filename": item,
                                "subfolder": target_path.replace("\\", "/"),
                                "type": base_type,
                            }
                        )

            # The top-level 'image_count' should also be recursive if it includes subdirectories.
            if not fast:
                total_recursive_count = await loop.run_in_executor(
                    None, scan_service.count_images_recursive, target_path
                )

        except PermissionError:
            return web.json_response({"error": "Permission denied"}, status=403)

        return web.json_response(
            {
                "folders": sorted(folders, key=lambda x: x["name"]),
                "images": images,
                "image_count": total_recursive_count,
            }
        )
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/folder-metadata")
async def get_folder_metadata(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        folder_names = request.query.get("folders", "").split(",")
        logging.info(f"[Meld] GET /meld/folder-metadata type={base_type} path={path} folders={folder_names}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""  # Absolute path mode

        target_path = os.path.abspath(os.path.join(base_dir, path))

        results = {}
        loop = asyncio.get_event_loop()
        for name in folder_names:
            if not name:
                continue
            full_item_path = os.path.join(target_path, name)
            if await loop.run_in_executor(None, os.path.isdir, full_item_path):
                sub_count = await loop.run_in_executor(None, scan_service.count_images_recursive, full_item_path)
                preview = None
                sample_img_path = await loop.run_in_executor(
                    None, scan_service.get_first_image_recursive, full_item_path
                )
                if sample_img_path:
                    if base_dir:
                        rel_path = os.path.relpath(sample_img_path, base_dir)
                        filename = os.path.basename(rel_path)
                        subfolder = os.path.dirname(rel_path).replace("\\", "/")
                        preview = {
                            "filename": filename,
                            "subfolder": subfolder,
                            "type": base_type,
                        }
                    else:
                        # Custom path mode
                        preview = {
                            "filename": os.path.basename(sample_img_path),
                            "subfolder": os.path.dirname(sample_img_path).replace("\\", "/"),
                            "type": base_type,
                        }
                results[name] = {"count": sub_count, "preview": preview}

        return web.json_response(results)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/path-image-count")
async def get_path_image_count(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        logging.info(f"[Meld] GET /meld/path-image-count type={base_type} path={path}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""

        target_path = os.path.abspath(os.path.join(base_dir, path))
        loop = asyncio.get_event_loop()
        if await loop.run_in_executor(None, os.path.isdir, target_path):
            count = await loop.run_in_executor(None, scan_service.count_images_recursive, target_path)
            return web.json_response({"count": count})
        return web.json_response({"count": 0})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/scan")
async def start_scan(request: web.Request) -> web.Response:
    if scan_service.get_scan_state()["is_running"]:
        return web.json_response({"error": "Scan already running"}, status=400)

    try:
        data = await request.json()
        img_type = data.get("type", "output")
        subfolder = data.get("subfolder", "")
        custom_path = data.get("custom_path", "")
        recursive = data.get("recursive", True)
        auto_link_parent = data.get("auto_link_parent", True)
        tags = data.get("tags", [])
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

        # In custom mode, base_dir for relative path calculation should be the target itself
        calc_base = target_base if img_type == "custom" else base_dir

        scan_service.start_scan_thread(
            calc_base,
            subfolder if img_type != "custom" else "",
            img_type,
            recursive,
            auto_link_parent,
            tags,
        )

        return web.json_response({"status": "started"})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/scan/cancel")
async def cancel_scan(request: web.Request) -> web.Response:
    scan_service.cancel_scan()
    return web.json_response({"status": "cancelling"})


@server.PromptServer.instance.routes.get("/meld/scan/status")
async def get_scan_status(request: web.Request) -> web.Response:
    return web.json_response(scan_service.get_scan_state())


@server.PromptServer.instance.routes.get("/meld/image/{image_id}/workflow")
async def get_image_workflow(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT workflow FROM images WHERE id = ? AND deleted_at IS NULL", (image_id,))
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


@server.PromptServer.instance.routes.get("/meld/image/{image_id}/snapshot_data")
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
                    WHERE mir.image_id = i.id LIMIT 1) as model_name,
                   i.width, i.height
            FROM images i WHERE i.id = ? AND i.deleted_at IS NULL
        """,
            (image_id,),
        )
        row = cursor.fetchone()
        conn.close()

        if not row:
            return web.json_response({"error": "Image not found"}, status=404)

        filename, subfolder, img_type, db_pos, db_neg, workflow_json, model_name, db_width, db_height = row

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
            "width": db_width or 512,
            "height": db_height or 512,
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
        logging.exception(f"[Meld] Failed to get snapshot data: {e}")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/tags")
async def list_tags(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        tags = get_all_tags(cursor)
        conn.close()
        return web.json_response(tags)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/tags")
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


@server.PromptServer.instance.routes.delete("/meld/tags")
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


@server.PromptServer.instance.routes.post("/meld/tags/rename")
async def tag_rename_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        tag_id = data.get("id")
        new_name = data.get("name")

        if tag_id is None or not new_name:
            return web.json_response({"error": "id and name are required"}, status=400)

        conn = get_db_connection()
        try:
            success = rename_tag(conn, int(tag_id), new_name)
            if success:
                return web.json_response({"success": True})
            return web.json_response({"error": "Failed to rename tag (maybe name already exists?)"}, status=400)
        finally:
            conn.close()
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/home-dir")
async def get_home_dir(request: web.Request) -> web.Response:
    try:
        home_dir = os.path.expanduser("~")
        return web.json_response({"home": home_dir})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/test")
async def test_endpoint(request: web.Request) -> web.Response:
    return web.json_response({"status": "ok", "message": "Meld is running"})


@server.PromptServer.instance.routes.get("/meld/settings")
async def get_settings(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        db_settings = get_all_settings(cursor)
        conn.close()

        # Default settings
        settings = {
            "dev_mode": os.environ.get("MELD_DEV") == "true",
            "gallery.show_parent_image": True,
            "gallery.hide_parent_images": True,
            "gallery.trash_retention_days": 30,
            "sidebar.show_filename": "filename",
            "sidebar.show_dimensions": True,
            "sidebar.show_created_at": False,
            "sidebar.show_model_name": True,
            "sidebar.show_positive_prompt": True,
            "sidebar.show_negative_prompt": False,
            "sidebar.show_tags": True,
            "viewer.details.max_positive_prompt_lines": 7,
            "viewer.details.max_negative_prompt_lines": 7,
            "viewer.show_icons": True,
            "gallery.matching_strategy": "phash_created",
            "gallery.lineage_max_depth": 5,
        }

        # Merge with DB settings
        settings.update(db_settings)

        return web.json_response(settings)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/settings")
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


@server.PromptServer.instance.routes.post("/meld/register")
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
        elif img_type == "custom":
            base_dir = ""  # Absolute path mode
        else:
            return web.json_response({"error": f"invalid type: {img_type}"}, status=400)

        # Resolve full path safely (prevent path traversal)
        if img_type == "custom":
            # For custom type, subfolder is already an absolute path
            full_path = os.path.abspath(os.path.join(subfolder, filename))
        else:
            full_path = os.path.abspath(os.path.join(base_dir, subfolder, filename))
            base_abs = os.path.abspath(base_dir)
            if os.path.commonpath([base_abs, full_path]) != base_abs:
                return web.json_response({"error": "invalid path"}, status=400)

        if not os.path.exists(full_path):
            return web.json_response({"error": f"File not found: {full_path}"}, status=404)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get matching strategy from settings
        db_settings = get_all_settings(cursor)
        matching_strategy = db_settings.get("gallery.matching_strategy", "phash_created")

        # Check if already registered
        cursor.execute(
            "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND deleted_at IS NULL", (filename, subfolder)
        )
        existing = cursor.fetchone()
        if existing:
            conn.close()
            return web.json_response({"success": True, "message": "Already registered", "id": existing[0]})

        # Extract metadata from PNG
        pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)

        timestamp = os.path.getmtime(full_path)

        # Get image dimensions
        width, height = 0, 0
        try:
            with Image.open(full_path) as img:
                width, height = img.size
        except Exception:
            pass

        # Calculate pHash
        phash = None
        sha256 = calculate_sha256(full_path)
        if imagehash is not None:
            try:
                with Image.open(full_path) as img:
                    phash = str(imagehash.phash(img))
            except Exception:
                logging.warning(f"[Meld] Failed to calculate phash for {full_path}")

        # Infer parent_id
        parent_id = scan_service.infer_parent_id(
            cursor, filename, subfolder, img_type, phash, timestamp, strategy=matching_strategy
        )

        # Insert Image
        sql = """
            INSERT INTO images
            (filename, subfolder, type, created_at, phash, sha256, width, height, parent_id, deleted_at, positive_prompt, negative_prompt, workflow)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?)
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
                width,
                height,
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
        server.PromptServer.instance.send_sync("meld-image-saved", {"count": 1})

        return web.json_response({"success": True, "id": image_id})
    except Exception:
        logging.exception("[Meld] Failed to register image")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.get("/meld/suggest")
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


@server.PromptServer.instance.routes.get("/meld/search-suggestions")
async def search_suggestions_endpoint(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        suggestions = SearchService.get_random_search_suggestions(cursor)
        conn.close()

        return web.json_response(suggestions)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/list")
async def list_images(request: web.Request) -> web.Response:
    try:
        offset = int(request.query.get("offset", 0))
        limit = int(request.query.get("limit", 1000000))
        query_str = request.query.get("query", "")
        view = request.query.get("view", "default")  # "default" or "trash"

        conn = get_db_connection()
        cursor = conn.cursor()

        search_sql, search_params = SearchService.build_search_sql(query_str)

        # Get settings
        db_settings = get_all_settings(cursor)
        lineage_max_depth = int(db_settings.get("gallery.lineage_max_depth", 5))

        # Determine deletion filter
        deleted_filter = "i.deleted_at IS NOT NULL" if view == "trash" else "i.deleted_at IS NULL"

        # Get total count
        count_sql = f"SELECT COUNT(*) FROM images i WHERE {deleted_filter}{search_sql}"
        cursor.execute(count_sql, search_params)
        total_count = cursor.fetchone()[0]

        # Fetch images with basic info
        fetch_sql = f"""
            SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.phash, i.sha256, i.parent_id,
                   p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
                   EXISTS(SELECT 1 FROM images c WHERE c.parent_id = i.id AND c.deleted_at IS NULL) as has_children,
                   i.positive_prompt, i.negative_prompt,
                   (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                    JOIN model_image_relations mir ON m.id = mir.model_id
                    WHERE mir.image_id = i.id) as model_name,
                   i.workflow, i.width, i.height, i.deleted_at
            FROM images i LEFT JOIN images p ON i.parent_id = p.id
            WHERE {deleted_filter}{search_sql} ORDER BY {"i.deleted_at DESC" if view == "trash" else "i.created_at DESC"} LIMIT ? OFFSET ?
        """
        cursor.execute(fetch_sql, (*search_params, limit, offset))
        images = cursor.fetchall()

        # Fetch ancestors in bulk if requested and depth > 1
        # (depth 1 is already joined in fetch_sql as p_filename etc.)
        image_ids = [img[0] for img in images]
        ancestors_map: dict[int, list[dict[str, Any]]] = {}
        if image_ids and lineage_max_depth > 1:
            placeholders = ",".join(["?"] * len(image_ids))
            ancestor_sql = f"""
                WITH RECURSIVE lineage AS (
                    SELECT i.id as start_id, i.parent_id, 1 as depth
                    FROM images i
                    WHERE i.id IN ({placeholders}) AND i.parent_id IS NOT NULL
                    UNION ALL
                    SELECT l.start_id, i.parent_id, l.depth + 1
                    FROM images i
                    JOIN lineage l ON i.id = l.parent_id
                    WHERE i.parent_id IS NOT NULL AND l.depth < ?
                )
                SELECT l.start_id, i.id, i.filename, i.subfolder, i.type
                FROM lineage l
                JOIN images i ON l.parent_id = i.id
                WHERE i.deleted_at IS NULL
                ORDER BY l.start_id, l.depth
            """
            cursor.execute(ancestor_sql, (*image_ids, lineage_max_depth))
            for start_id, a_id, a_fname, a_subf, a_type in cursor.fetchall():
                if start_id not in ancestors_map:
                    ancestors_map[start_id] = []
                if len(ancestors_map[start_id]) < lineage_max_depth:
                    ancestors_map[start_id].append(
                        {"id": a_id, "filename": a_fname, "subfolder": a_subf, "type": a_type}
                    )
        elif image_ids and lineage_max_depth == 1:
            # If depth is 1, we just use the immediate parent from the main query's results
            # No additional query needed here, we'll handle it in the loop below
            pass

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
                width,
                height,
                deleted_at,
            ) = img

            # If viewing trash, we treat type as 'trash' for the frontend
            effective_type = "trash" if deleted_at is not None else img_type

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
            if effective_type == "trash":
                base_dir = TRASH_DIR
                effective_subfolder = ""  # Trash files are in the root of TRASH_DIR
            elif img_type == "output":
                base_dir = folder_paths.get_output_directory()
                effective_subfolder = subfolder
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
                effective_subfolder = subfolder
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
                effective_subfolder = subfolder
            elif img_type == "custom":
                base_dir = ""  # subfolder is absolute path
                effective_subfolder = subfolder
            else:
                base_dir = None
                effective_subfolder = subfolder

            exists = False
            if base_dir is not None:
                full_path = os.path.join(base_dir, effective_subfolder, filename)
                exists = os.path.exists(full_path)

            # Fallback for depth 1 or missing in ancestors_map
            ancestors = ancestors_map.get(img_id, [])
            if not ancestors and lineage_max_depth >= 1 and parent_id and p_filename:
                ancestors = [{"id": parent_id, "filename": p_filename, "subfolder": p_subfolder, "type": p_type}]

            result_list.append(
                {
                    "id": img_id,
                    "filename": filename,
                    "subfolder": subfolder,
                    "type": effective_type,
                    "created_at": created_at,
                    "deleted_at": deleted_at,
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
                    "width": width,
                    "height": height,
                    "tags": tags,
                    "exists": exists,
                    "ancestors": ancestors,
                }
            )

        conn.close()
        return web.json_response({"images": result_list, "total": total_count, "offset": offset, "limit": limit})
    except Exception as e:
        logging.exception("[Meld] Failed to list images")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/related")
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
            "SELECT id, filename, subfolder, type, phash FROM images WHERE id != ? AND phash IS NOT NULL AND deleted_at IS NULL",
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
        logging.exception("[Meld] Failed to get related images")
        return web.json_response({"error": "internal error"}, status=500)


@server.PromptServer.instance.routes.post("/meld/restore")
async def restore_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_ids = data.get("ids", [])

        if not image_ids:
            return web.json_response({"error": "ids are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        placeholders = ",".join(["?"] * len(image_ids))
        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", image_ids
        )
        images = cursor.fetchall()

        restored_count = 0
        for img_id, trash_filename, subfolder, img_type, deleted_at in images:
            if deleted_at is None:
                continue

            # 1. Resolve original base directory
            if img_type == "output":
                base_dir = folder_paths.get_output_directory()
            elif img_type == "input":
                base_dir = folder_paths.get_input_directory()
            elif img_type == "temp":
                base_dir = folder_paths.get_temp_directory()
            elif img_type == "custom":
                base_dir = ""
            else:
                continue

            trash_full_path = os.path.join(TRASH_DIR, trash_filename)
            if not os.path.exists(trash_full_path):
                # File missing from trash, but we can still "restore" its DB status
                cursor.execute("UPDATE images SET deleted_at = NULL WHERE id = ?", (img_id,))
                restored_count += 1
                continue

            # 2. Reconstruct original filename (remove timestamp prefix)
            # The format was f"{int(now)}_{filename}"
            parts = trash_filename.split("_", 1)
            original_filename = parts[1] if len(parts) > 1 else trash_filename

            # 3. Ensure subfolder exists
            target_dir = os.path.join(base_dir, subfolder)
            os.makedirs(target_dir, exist_ok=True)

            # 4. Handle filename collision
            final_filename = image_service.get_unique_filename(base_dir, subfolder, original_filename)
            target_full_path = os.path.join(target_dir, final_filename)

            try:
                shutil.move(trash_full_path, target_full_path)
                # 5. Update DB
                cursor.execute(
                    "UPDATE images SET deleted_at = NULL, filename = ? WHERE id = ?", (final_filename, img_id)
                )
                restored_count += 1
            except Exception as e:
                logging.error(f"[Meld] Failed to restore file {trash_filename}: {e}")
                continue

        conn.commit()
        conn.close()
        return web.json_response({"success": True, "count": restored_count})
    except Exception as e:
        logging.exception("[Meld] Restore failed")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/bulk-delete")
async def bulk_delete_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_ids = data.get("ids", [])
        permanent = data.get("permanent", False) or data.get("delete_files", False)  # Backward compatibility

        if not image_ids:
            return web.json_response({"error": "ids are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get file paths and current status
        placeholders = ",".join(["?"] * len(image_ids))
        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", image_ids
        )
        images = cursor.fetchall()

        deleted_count = 0
        now = time.time()

        for img_id, filename, subfolder, img_type, deleted_at in images:
            # 1. Resolve current full path
            if deleted_at is not None:
                # Already in trash
                base_dir = TRASH_DIR
                current_subfolder = ""
            else:
                # Normal location
                if img_type == "output":
                    base_dir = folder_paths.get_output_directory()
                elif img_type == "input":
                    base_dir = folder_paths.get_input_directory()
                elif img_type == "temp":
                    base_dir = folder_paths.get_temp_directory()
                elif img_type == "custom":
                    base_dir = ""
                else:
                    continue
                current_subfolder = subfolder

            current_full_path = os.path.abspath(os.path.join(base_dir, current_subfolder, filename))

            if permanent:
                # --- Permanent Delete ---
                if os.path.exists(current_full_path):
                    try:
                        os.remove(current_full_path)
                    except Exception as e:
                        logging.warning(f"[Meld] Failed to permanently delete file {current_full_path}: {e}")

                # Update children to set parent_id to NULL
                cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
                # Remove from DB
                cursor.execute("DELETE FROM images WHERE id = ?", (img_id,))
                # Also cleanup relations
                cursor.execute("DELETE FROM positive_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM negative_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM model_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (img_id,))

            else:
                # --- Logical Delete (Move to Trash) ---
                if deleted_at is not None:
                    # Already logically deleted, skip
                    continue

                if os.path.exists(current_full_path):
                    new_filename = f"{int(now)}_{filename}"
                    new_full_path = os.path.join(TRASH_DIR, new_filename)
                    try:
                        shutil.move(current_full_path, new_full_path)
                        # Update DB with new filename and deleted_at
                        # IMPORTANT: subfolder is NOT changed (used for restoration)
                        cursor.execute(
                            "UPDATE images SET deleted_at = ?, filename = ? WHERE id = ?", (now, new_filename, img_id)
                        )
                    except Exception as e:
                        logging.error(f"[Meld] Failed to move file to trash {current_full_path}: {e}")
                        continue
                else:
                    # File missing but we still mark it as deleted in DB
                    cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))

            deleted_count += 1

        conn.commit()
        conn.close()
        return web.json_response({"success": True, "count": deleted_count})
    except Exception as e:
        logging.exception("[Meld] Bulk delete failed")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/delete")
async def delete_image(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_id = data.get("id")
        filename = data.get("filename")  # Fallback for old frontend
        permanent = data.get("permanent", False)

        if not image_id and not filename:
            return web.json_response({"error": "id or filename is required"}, status=400)

        # Re-use bulk_delete logic by wrapping id in a list
        if image_id:
            ids = [image_id]
        else:
            # Find IDs from filename
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT id FROM images WHERE filename = ?", (filename,))
            ids = [row[0] for row in cursor.fetchall()]
            conn.close()

        if not ids:
            return web.json_response({"error": "Image not found"}, status=404)

        # Call bulk_delete internal logic or just redirect request context-wise
        # For simplicity, we implement the same logic here or reuse bulk_delete function
        # But we can't easily call bulk_delete because it expects a Request object.
        # Let's just use a helper or reimplement briefly.

        # Actually, let's just make it a call to a helper function if needed,
        # but for now, I'll just reuse the logic as it's cleaner to keep them separate but consistent.

        # To avoid code duplication, I'll define a helper internally if this was a larger refactor,
        # but following the rules, I'll keep it straightforward.
        # Wait, I can just use a modified version of the request or similar? No.

        # Let's just implement it simply.
        conn = get_db_connection()
        cursor = conn.cursor()

        placeholders = ",".join(["?"] * len(ids))
        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", ids
        )
        images = cursor.fetchall()

        now = time.time()
        for img_id, img_filename, subfolder, img_type, deleted_at in images:
            # Resolve current path
            if deleted_at is not None:
                base_dir = TRASH_DIR
                current_subfolder = ""
            else:
                if img_type == "output":
                    base_dir = folder_paths.get_output_directory()
                elif img_type == "input":
                    base_dir = folder_paths.get_input_directory()
                elif img_type == "temp":
                    base_dir = folder_paths.get_temp_directory()
                elif img_type == "custom":
                    base_dir = ""
                else:
                    continue
                current_subfolder = subfolder

            current_full_path = os.path.abspath(os.path.join(base_dir, current_subfolder, img_filename))

            if permanent:
                if os.path.exists(current_full_path):
                    try:
                        os.remove(current_full_path)
                    except Exception:
                        pass
                cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
                cursor.execute("DELETE FROM images WHERE id = ?", (img_id,))
                cursor.execute("DELETE FROM positive_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM negative_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM model_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (img_id,))
            else:
                if deleted_at is None:
                    if os.path.exists(current_full_path):
                        new_filename = f"{int(now)}_{img_filename}"
                        new_full_path = os.path.join(TRASH_DIR, new_filename)
                        try:
                            shutil.move(current_full_path, new_full_path)
                            cursor.execute(
                                "UPDATE images SET deleted_at = ?, filename = ? WHERE id = ?",
                                (now, new_filename, img_id),
                            )
                        except Exception:
                            continue
                    else:
                        cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))

        conn.commit()
        conn.close()
        return web.json_response({"success": True})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.post("/meld/link-parent")
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


@server.PromptServer.instance.routes.get("/meld/suggest-parents")
async def suggest_parents(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")
        threshold = int(request.query.get("threshold", 12))

        if not image_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get settings
        db_settings = get_all_settings(cursor)
        strategy = db_settings.get("gallery.matching_strategy", "phash_created")

        # Get target image info
        cursor.execute(
            "SELECT phash, created_at, filename, subfolder, type FROM images WHERE id = ?",
            (image_id,),
        )
        row = cursor.fetchone()
        if not row:
            conn.close()
            return web.json_response([])

        target_phash, target_created_at, filename, subfolder, img_type = row

        suggestions = image_service.get_parent_suggestions(
            cursor,
            int(image_id),
            target_phash,
            target_created_at,
            filename,
            subfolder,
            img_type,
            strategy=strategy,
            threshold=threshold,
        )

        conn.close()
        # Return top matches
        return web.json_response(suggestions[:20])
    except Exception as e:
        logging.exception("[Meld] Failed to suggest parents")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/lineage")
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
               i.workflow, i.width, i.height
        FROM images i LEFT JOIN images p ON i.parent_id = p.id
        WHERE (i.id IN (SELECT id FROM ancestors) OR i.id IN (SELECT id FROM descendants)) AND i.deleted_at IS NULL
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
                    "width": row[14],
                    "height": row[15],
                }
            )

        conn.close()
        return web.json_response(result)
    except Exception as e:
        logging.exception("[Meld] Failed to get lineage")
        return web.json_response({"error": str(e)}, status=500)


@server.PromptServer.instance.routes.get("/meld/favorites")
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


@server.PromptServer.instance.routes.post("/meld/favorites")
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


@server.PromptServer.instance.routes.post("/meld/favorites/update")
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


@server.PromptServer.instance.routes.post("/meld/favorites/delete")
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
        count = scan_service.perform_cleanup()
        if count > 0:
            logging.info(f"[Meld] Extension load cleanup: Removed {count} missing images from database.")
    except Exception as e:
        logging.warning(f"[Meld] Extension load cleanup failed: {e}")


threading.Thread(target=_run_auto_cleanup, daemon=True).start()
