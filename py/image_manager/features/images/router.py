import json
import logging
import os
import shutil
import time
from typing import Any

import folder_paths
import server
from aiohttp import web
from PIL import Image

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore

from ....load_image_configs.core.metadata_helper import MetadataHelper
from ...common.db.client import TRASH_DIR, get_db_connection
from ...common.model_repo import add_model_relation, get_or_create_model
from ...common.schemas import (
    ApiResponse,
    BulkDeleteRequest,
    DeleteImageRequest,
    ImageListItem,
    ImageListResponse,
    ImageSnapshotResponse,
    LineageItem,
    LinkParentRequest,
    RegisterImageRequest,
    RestoreImagesRequest,
    SearchImagesRequest,
)
from ...features.settings.repository import get_all_settings
from ..importer.service import infer_parent_id
from ..search.service import SearchService
from .repository import calculate_sha256
from .service import get_parent_suggestions, get_unique_filename

routes = web.RouteTableDef()


@routes.get("/meld/image/{image_id}/details")
async def get_image_details(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        conn = get_db_connection()
        cursor = conn.cursor()

        # Fetch full image details from DB
        sql = """
            SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.phash, i.sha256, i.parent_id,
                   p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
                   EXISTS(SELECT 1 FROM images c WHERE c.parent_id = i.id AND c.deleted_at IS NULL) as has_children,
                   i.positive_prompt, i.negative_prompt,
                   (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                    JOIN model_image_relations mir ON m.id = mir.model_id
                    WHERE mir.image_id = i.id) as model_name,
                   i.workflow, i.width, i.height, i.deleted_at
            FROM images i LEFT JOIN images p ON i.parent_id = p.id
            WHERE i.id = ?
        """
        cursor.execute(sql, (image_id,))
        img = cursor.fetchone()

        if not img:
            conn.close()
            return web.json_response({"error": "Image not found"}, status=404)

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

        # Fetch tags
        cursor.execute(
            "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
            (image_id,),
        )
        tags = [row[0] for row in cursor.fetchall()]

        # Reconstruct prompts if necessary
        positive = db_positive
        if positive is None:
            cursor.execute(
                "SELECT pp.name, r.strength FROM positive_prompts pp JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id WHERE r.image_id = ?",
                (image_id,),
            )
            positive = ", ".join([row[0] if row[1] == 1.0 else f"({row[0]}:{row[1]})" for row in cursor.fetchall()])

        negative = db_negative
        if negative is None:
            cursor.execute(
                "SELECT np.name, r.strength FROM negative_prompts np JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id WHERE r.image_id = ?",
                (image_id,),
            )
            negative = ", ".join([row[0] if row[1] == 1.0 else f"({row[0]}:{row[1]})" for row in cursor.fetchall()])

        # Ancestors
        ancestors = []
        if parent_id and p_filename:
            ancestors = [{"id": parent_id, "filename": p_filename, "subfolder": p_subfolder, "type": p_type}]

        conn.close()

        item = ImageListItem(
            id=img_id,
            filename=filename,
            subfolder=subfolder,
            type="trash" if deleted_at is not None else img_type,
            created_at=created_at,
            deleted_at=deleted_at,
            phash=phash,
            sha256=sha256,
            parent_id=parent_id,
            parent_filename=p_filename,
            parent_subfolder=p_subfolder,
            parent_type=p_type,
            has_children=bool(has_children),
            positive=positive,
            negative=negative,
            positive_prompt=db_positive,
            negative_prompt=db_negative,
            model_name=model_name,
            workflow=workflow,
            width=width,
            height=height,
            is_minimal=False,
            tags=tags,
            exists=True,
            ancestors=ancestors,
        )

        return web.json_response(item.to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/image/{image_id}/workflow")
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
                workflow_data = json.loads(row[0])
                return web.json_response({"workflow": workflow_data})
            except Exception as e:
                return web.json_response({"error": f"Failed to parse workflow: {str(e)}"}, status=500)

        return web.json_response({"error": "Workflow not found"}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/image/{image_id}/snapshot_data")
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

        if img_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif img_type == "input":
            base_dir = folder_paths.get_input_directory()
        elif img_type == "temp":
            base_dir = folder_paths.get_temp_directory()
        else:
            base_dir = None

        data = ImageSnapshotResponse(
            model_name=model_name or "v1-5-pruned-emaonly.ckpt",
            positive=db_pos or "",
            negative=db_neg or "",
            seed=0,
            steps=20,
            cfg=8.0,
            sampler_name="euler",
            scheduler="normal",
            width=db_width or 512,
            height=db_height or 512,
        )

        if base_dir:
            full_path = os.path.join(base_dir, subfolder, filename)
            if os.path.exists(full_path):
                with Image.open(full_path) as img:
                    data.width, data.height = img.size

                (
                    pos,
                    neg,
                    m_name,
                    wf_json,
                    pr_json,
                    a1111_text,
                    logs,
                ) = MetadataHelper.extract_metadata(full_path)

                if m_name:
                    data.model_name = m_name
                if pos:
                    data.positive = pos
                if neg:
                    data.negative = neg

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
                            setattr(data, k, k_params[k])

        return web.json_response(data.to_dict())
    except Exception as e:
        logging.exception(f"[Meld] Failed to get snapshot data: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/list")
async def list_images(request: web.Request) -> web.Response:
    try:
        start_time = time.time()
        is_minimal = request.query.get("minimal", "false").lower() == "true"
        req = SearchImagesRequest(
            offset=int(request.query.get("offset", 0)),
            limit=int(request.query.get("limit", 1000000)),
            query=request.query.get("query", ""),
            view=request.query.get("view", "default"),
        )

        conn = get_db_connection()
        cursor = conn.cursor()

        search_sql, search_params, order_sql = SearchService.build_search_sql(req.query)

        db_settings = get_all_settings(cursor)
        lineage_max_depth = int(db_settings.get("gallery.lineage_max_depth", 5))

        deleted_filter = "i.deleted_at IS NOT NULL" if req.view == "trash" else "i.deleted_at IS NULL"

        count_sql = f"SELECT COUNT(*) FROM images i WHERE {deleted_filter}{search_sql}"
        cursor.execute(count_sql, search_params)
        total_count = cursor.fetchone()[0]

        if order_sql:
            final_order = order_sql
        else:
            final_order = "i.deleted_at DESC" if req.view == "trash" else "i.created_at DESC"

        fetch_sql = f"""
            SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.phash, i.sha256, i.parent_id,
                   p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
                   EXISTS(SELECT 1 FROM images c WHERE c.parent_id = i.id AND c.deleted_at IS NULL) as has_children,
                   i.positive_prompt, i.negative_prompt,
                   (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                    JOIN model_image_relations mir ON m.id = mir.model_id
                    WHERE mir.image_id = i.id) as model_name,
                   NULL as workflow, i.width, i.height, i.deleted_at
            FROM images i LEFT JOIN images p ON i.parent_id = p.id
            WHERE {deleted_filter}{search_sql} ORDER BY {final_order} LIMIT ? OFFSET ?
        """
        cursor.execute(fetch_sql, (*search_params, req.limit, req.offset))
        images = cursor.fetchall()

        image_ids = [img[0] for img in images]
        ancestors_map: dict[int, list[dict[str, Any]]] = {}
        tags_map: dict[int, list[str]] = {}
        reconstructed_pos_map: dict[int, list[str]] = {}
        reconstructed_neg_map: dict[int, list[str]] = {}

        if image_ids:
            placeholders = ",".join(["?"] * len(image_ids))

            cursor.execute(
                f"SELECT r.image_id, t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id IN ({placeholders})",
                image_ids,
            )
            for img_id, tag_name in cursor.fetchall():
                if img_id not in tags_map:
                    tags_map[img_id] = []
                tags_map[img_id].append(tag_name)

            if lineage_max_depth > 1:
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

            needs_reconstruction_pos = [img[0] for img in images if img[12] is None] if not is_minimal else []
            if needs_reconstruction_pos:
                ph = ",".join(["?"] * len(needs_reconstruction_pos))
                cursor.execute(
                    f"SELECT r.image_id, pp.name, r.strength FROM positive_prompts pp JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id WHERE r.image_id IN ({ph})",
                    needs_reconstruction_pos,
                )
                for img_id, name, strength in cursor.fetchall():
                    if img_id not in reconstructed_pos_map:
                        reconstructed_pos_map[img_id] = []
                    reconstructed_pos_map[img_id].append(name if strength == 1.0 else f"({name}:{strength})")

            needs_reconstruction_neg = [img[0] for img in images if img[13] is None] if not is_minimal else []
            if needs_reconstruction_neg:
                ph = ",".join(["?"] * len(needs_reconstruction_neg))
                cursor.execute(
                    f"SELECT r.image_id, np.name, r.strength FROM negative_prompts np JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id WHERE r.image_id IN ({ph})",
                    needs_reconstruction_neg,
                )
                for img_id, name, strength in cursor.fetchall():
                    if img_id not in reconstructed_neg_map:
                        reconstructed_neg_map[img_id] = []
                    reconstructed_neg_map[img_id].append(name if strength == 1.0 else f"({name}:{strength})")

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

            effective_type = "trash" if deleted_at is not None else img_type
            positive = db_positive if db_positive is not None else ", ".join(reconstructed_pos_map.get(img_id, []))
            negative = db_negative if db_negative is not None else ", ".join(reconstructed_neg_map.get(img_id, []))

            if is_minimal:
                if positive and len(positive) > 200:
                    positive = positive[:200] + "..."
                if negative and len(negative) > 200:
                    negative = negative[:200] + "..."

            tags = tags_map.get(img_id, [])

            base_dir = None
            effective_subfolder = ""
            if effective_type == "trash":
                base_dir = TRASH_DIR
                effective_subfolder = ""
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
                base_dir = ""
                effective_subfolder = subfolder

            exists = False
            if base_dir is not None:
                full_path = os.path.normpath(os.path.abspath(os.path.join(base_dir, effective_subfolder, filename)))
                exists = os.path.exists(full_path)

            ancestors = ancestors_map.get(img_id, [])
            if not ancestors and lineage_max_depth >= 1 and parent_id and p_filename:
                ancestors = [{"id": parent_id, "filename": p_filename, "subfolder": p_subfolder, "type": p_type}]

            result_list.append(
                ImageListItem(
                    id=img_id,
                    filename=filename,
                    subfolder=subfolder,
                    type=effective_type,
                    created_at=created_at,
                    deleted_at=deleted_at,
                    phash=phash,
                    sha256=sha256,
                    parent_id=parent_id,
                    parent_filename=p_filename,
                    parent_subfolder=p_subfolder,
                    parent_type=p_type,
                    has_children=bool(has_children),
                    positive=positive,
                    negative=negative,
                    positive_prompt=positive if is_minimal else db_positive,
                    negative_prompt=negative if is_minimal else db_negative,
                    model_name=model_name,
                    workflow=workflow,
                    width=width,
                    height=height,
                    is_minimal=is_minimal,
                    tags=tags,
                    exists=exists,
                    ancestors=ancestors,
                )
            )

        conn.close()
        response = ImageListResponse(
            images=result_list,
            total=total_count,
            offset=req.offset,
            limit=req.limit,
        )
        logging.info(
            f"[Meld] list_images: found {len(result_list)}/{total_count} images (limit={req.limit}, offset={req.offset}) in {time.time() - start_time:.3f}s"
        )

        return web.json_response(response.to_dict())
    except Exception as e:
        logging.exception("[Meld] Failed to list images")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/restore")
async def restore_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = RestoreImagesRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if not req.ids:
            return web.json_response({"error": "ids are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        all_ids_to_restore = set(req.ids)
        placeholders = ",".join(["?"] * len(req.ids))

        ancestor_query = f"""
            WITH RECURSIVE lineage AS (
                SELECT id, parent_id, deleted_at FROM images WHERE id IN ({placeholders})
                UNION ALL
                SELECT i.id, i.parent_id, i.deleted_at FROM images i
                JOIN lineage l ON i.id = l.parent_id
                WHERE l.deleted_at IS NOT NULL
            )
            SELECT id FROM lineage WHERE deleted_at IS NOT NULL
        """
        cursor.execute(ancestor_query, req.ids)
        for (ancestor_id,) in cursor.fetchall():
            all_ids_to_restore.add(ancestor_id)

        final_ids = list(all_ids_to_restore)
        placeholders = ",".join(["?"] * len(final_ids))

        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders}) ORDER BY created_at ASC",
            final_ids,
        )
        images = cursor.fetchall()

        restored_ids = []
        for img_id, trash_filename, subfolder, img_type, deleted_at in images:
            if deleted_at is None:
                continue

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

            trash_full_path = os.path.normpath(os.path.join(TRASH_DIR, trash_filename))
            if not os.path.exists(trash_full_path):
                cursor.execute("UPDATE images SET deleted_at = NULL WHERE id = ?", (img_id,))
                restored_ids.append(img_id)
                continue

            parts = trash_filename.split("_", 1)
            original_filename = parts[1] if len(parts) > 1 else trash_filename

            target_dir = os.path.join(base_dir, subfolder)
            os.makedirs(target_dir, exist_ok=True)

            final_filename = get_unique_filename(base_dir, subfolder, original_filename)
            target_full_path = os.path.join(target_dir, final_filename)

            try:
                shutil.move(trash_full_path, target_full_path)
                cursor.execute(
                    "UPDATE images SET deleted_at = NULL, filename = ? WHERE id = ?", (final_filename, img_id)
                )
                restored_ids.append(img_id)
            except Exception as e:
                logging.error(f"[Meld] Failed to restore file {trash_filename}: {e}")
                continue

        conn.commit()
        conn.close()
        return web.json_response(
            ApiResponse(success=True, count=len(restored_ids), data={"restored_ids": restored_ids}).to_dict()
        )
    except Exception as e:
        logging.exception("[Meld] Restore failed")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/bulk-delete")
async def bulk_delete_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = BulkDeleteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if not req.ids:
            return web.json_response({"error": "ids are required"}, status=400)

        permanent = req.permanent or req.delete_files

        conn = get_db_connection()
        cursor = conn.cursor()

        placeholders = ",".join(["?"] * len(req.ids))
        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", req.ids
        )
        images = cursor.fetchall()

        deleted_count = 0
        now = time.time()

        for img_id, filename, subfolder, img_type, deleted_at in images:
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

            current_full_path = os.path.normpath(os.path.abspath(os.path.join(base_dir, current_subfolder, filename)))

            if permanent:
                if os.path.exists(current_full_path):
                    try:
                        os.remove(current_full_path)
                    except Exception as e:
                        logging.warning(f"[Meld] Failed to permanently delete file {current_full_path}: {e}")

                cursor.execute("UPDATE images SET parent_id = NULL WHERE parent_id = ?", (img_id,))
                cursor.execute("DELETE FROM images WHERE id = ?", (img_id,))
                cursor.execute("DELETE FROM positive_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM negative_prompt_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM model_image_relations WHERE image_id = ?", (img_id,))
                cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (img_id,))

            else:
                if deleted_at is not None:
                    continue

                if os.path.exists(current_full_path):
                    new_filename = f"{int(now)}_{filename}"
                    new_full_path = os.path.join(TRASH_DIR, new_filename)
                    try:
                        shutil.move(current_full_path, new_full_path)
                        cursor.execute(
                            "UPDATE images SET deleted_at = ?, filename = ? WHERE id = ?", (now, new_filename, img_id)
                        )
                    except Exception as e:
                        logging.error(f"[Meld] Failed to move file to trash {current_full_path}: {e}")
                        continue
                else:
                    cursor.execute("UPDATE images SET deleted_at = ? WHERE id = ?", (now, img_id))

            deleted_count += 1

        conn.commit()
        conn.close()
        return web.json_response(ApiResponse(success=True, count=deleted_count).to_dict())
    except Exception as e:
        logging.exception("[Meld] Bulk delete failed")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/delete")
async def delete_image_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = DeleteImageRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if not req.id and not req.filename:
            return web.json_response({"error": "id or filename is required"}, status=400)

        if req.id:
            ids = [req.id]
        else:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT id FROM images WHERE filename = ?", (req.filename,))
            ids = [row[0] for row in cursor.fetchall()]
            conn.close()

        if not ids:
            return web.json_response({"error": "Image not found"}, status=404)

        conn = get_db_connection()
        cursor = conn.cursor()

        placeholders = ",".join(["?"] * len(ids))
        cursor.execute(
            f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", ids
        )
        images = cursor.fetchall()

        now = time.time()
        for img_id, img_filename, subfolder, img_type, deleted_at in images:
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

            current_full_path = os.path.normpath(
                os.path.abspath(os.path.join(base_dir, current_subfolder, img_filename))
            )

            if req.permanent:
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
        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/link-parent")
async def link_parent_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = LinkParentRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if req.childId is None:
            return web.json_response({"error": "childId is required"}, status=400)

        if req.childId == req.parentId:
            return web.json_response({"error": "Cannot set an image as its own parent"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

        if req.parentId is not None:
            cursor.execute("SELECT created_at FROM images WHERE id = ?", (req.childId,))
            child_row = cursor.fetchone()
            cursor.execute("SELECT created_at FROM images WHERE id = ?", (req.parentId,))
            parent_row = cursor.fetchone()

            if child_row and parent_row:
                child_created = child_row[0]
                parent_created = parent_row[0]
                if parent_created >= child_created:
                    conn.close()
                    return web.json_response({"error": "Parent image must be older than the child image"}, status=400)

        cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (req.parentId, req.childId))
        conn.commit()
        conn.close()
        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/suggest-parents")
async def suggest_parents_endpoint(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")

        conn = get_db_connection()
        cursor = conn.cursor()

        db_settings = get_all_settings(cursor)
        default_threshold = db_settings.get("gallery.suggest_phash_threshold", 82)
        threshold_pct = float(request.query.get("threshold", default_threshold))
        threshold = round(64 * (1 - threshold_pct / 100))

        if not image_id:
            conn.close()
            return web.json_response({"error": "id is required"}, status=400)
        strategy = db_settings.get("gallery.matching_strategy", "phash_created")

        cursor.execute(
            "SELECT phash, created_at, filename, subfolder, type FROM images WHERE id = ?",
            (image_id,),
        )
        row = cursor.fetchone()
        if not row:
            conn.close()
            return web.json_response([])

        target_phash, target_created_at, filename, subfolder, img_type = row

        suggestions = get_parent_suggestions(
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
        return web.json_response([s.to_dict() for s in suggestions[:20]])
    except Exception as e:
        logging.exception("[Meld] Failed to suggest parents")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/lineage")
async def get_lineage_endpoint(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")
        if not image_id:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()

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
            img_id = row[0]

            cursor.execute(
                "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
                (img_id,),
            )
            tag_rows = cursor.fetchall()
            tags = [t[0] for t in tag_rows]

            result.append(
                LineageItem(
                    id=img_id,
                    filename=row[1],
                    subfolder=row[2],
                    type=row[3],
                    created_at=row[4],
                    parent_id=row[5],
                    phash=row[6],
                    parent_filename=row[7],
                    parent_subfolder=row[8],
                    parent_type=row[9],
                    positive=row[10] or "",
                    negative=row[11] or "",
                    positive_prompt=row[10],
                    negative_prompt=row[11],
                    model_name=row[12],
                    workflow=row[13],
                    width=row[14],
                    height=row[15],
                    tags=tags,
                ).to_dict()
            )

        conn.close()
        return web.json_response(result)
    except Exception as e:
        logging.exception("[Meld] Failed to get lineage")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/view-trash")
async def view_trash_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        if not filename:
            return web.Response(status=400)

        if os.path.basename(filename) != filename:
            return web.Response(status=403)

        file_path = os.path.normpath(os.path.join(TRASH_DIR, filename))
        if not os.path.exists(file_path):
            return web.Response(status=404)

        return web.FileResponse(file_path)
    except Exception as e:
        logging.error(f"[Meld] Error in view_trash: {e}")
        return web.Response(status=500)


@routes.get("/meld/view-custom")
async def view_custom_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        subfolder = request.query.get("subfolder")
        if not filename or subfolder is None:
            return web.Response(status=400)

        file_path = os.path.normpath(os.path.join(subfolder, filename))
        if not os.path.exists(file_path):
            return web.Response(status=404)

        if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            return web.Response(status=403)

        return web.FileResponse(file_path)
    except Exception as e:
        logging.error(f"[Meld] Error in view_custom: {e}")
        return web.Response(status=500)


@routes.post("/meld/register")
async def register_image_endpoint(request: web.Request) -> web.Response:
    try:
        if request.has_body and request.content_type == "application/json":
            data = await request.json()
        else:
            return web.json_response({"error": "Content-Type must be application/json"}, status=400)

        try:
            req = RegisterImageRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if not req.filename:
            return web.json_response({"error": "filename is required"}, status=400)

        if os.path.basename(req.filename) != req.filename:
            return web.json_response({"error": "invalid filename"}, status=400)

        if req.type == "output":
            base_dir = folder_paths.get_output_directory()
        elif req.type == "input":
            base_dir = folder_paths.get_input_directory()
        elif req.type == "temp":
            base_dir = folder_paths.get_temp_directory()
        elif req.type == "custom":
            base_dir = ""
        else:
            return web.json_response({"error": f"invalid type: {req.type}"}, status=400)

        if req.type == "custom":
            full_path = os.path.abspath(os.path.join(req.subfolder, req.filename))
        else:
            full_path = os.path.abspath(os.path.join(base_dir, req.subfolder, req.filename))
            base_abs = os.path.abspath(base_dir)
            if os.path.commonpath([base_abs, full_path]) != base_abs:
                return web.json_response({"error": "invalid path"}, status=400)

        if not os.path.exists(full_path):
            return web.json_response({"error": f"File not found: {full_path}"}, status=404)

        conn = get_db_connection()
        cursor = conn.cursor()

        db_settings = get_all_settings(cursor)
        matching_strategy = db_settings.get("gallery.matching_strategy", "phash_created")

        sha256 = calculate_sha256(full_path)

        cursor.execute(
            "SELECT id FROM images WHERE sha256 = ? AND deleted_at IS NULL",
            (sha256,),
        )
        existing_sha = cursor.fetchone()
        if existing_sha:
            conn.close()
            return web.json_response(
                ApiResponse(
                    success=True, message="Already registered (hash match)", data={"id": existing_sha[0]}
                ).to_dict()
            )

        cursor.execute(
            "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND deleted_at IS NULL",
            (req.filename, req.subfolder),
        )
        existing = cursor.fetchone()
        if existing:
            conn.close()
            return web.json_response(
                ApiResponse(success=True, message="Already registered (path match)", data={"id": existing[0]}).to_dict()
            )

        pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)

        timestamp = os.path.getmtime(full_path)

        width, height = 0, 0
        try:
            with Image.open(full_path) as img:
                width, height = img.size
        except Exception:
            pass

        phash = None
        if imagehash is not None:
            try:
                with Image.open(full_path) as img:
                    phash = str(imagehash.phash(img))
            except Exception:
                logging.warning(f"[Meld] Failed to calculate phash for {full_path}")

        parent_id = infer_parent_id(
            cursor, req.filename, req.subfolder, req.type, phash, timestamp, strategy=matching_strategy
        )

        sql = """
            INSERT INTO images
            (filename, subfolder, type, created_at, phash, sha256, width, height, parent_id, deleted_at, positive_prompt, negative_prompt, workflow)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?)
        """
        cursor.execute(
            sql,
            (
                req.filename,
                req.subfolder,
                req.type,
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

        if model:
            m_id = get_or_create_model(cursor, model)
            add_model_relation(cursor, image_id, m_id)

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

        server.PromptServer.instance.send_sync("meld-image-saved", {"count": 1})

        return web.json_response(ApiResponse(success=True, data={"id": image_id}).to_dict())
    except Exception:
        logging.exception("[Meld] Failed to register image")
        return web.json_response({"error": "internal error"}, status=500)
