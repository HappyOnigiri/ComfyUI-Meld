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

from .....load_image_configs.core.metadata_helper import MetadataHelper
from ....common.db.client import db_connection, get_trash_dir
from ....common.exceptions import MeldError
from ....common.model_repo import add_model_relation, get_or_create_model
from ....common.schemas import (
    ApiResponse,
    BulkDeleteRequest,
    DeleteImageRequest,
    ImageListItem,
    ImageListResponse,
    ImageSnapshotResponse,
    RegisterImageRequest,
    RestoreImagesRequest,
    SearchImagesRequest,
    UpdateImageNotesRequest,
)
from ....features.settings.repository import get_all_settings
from ...importer.service import infer_parent_id
from ...search.service import SearchService
from ..repository import (
    calculate_sha256,
    collect_deleted_ancestors,
    inherit_tags,
    permanent_delete,
    restore_image,
    restore_image_with_rename,
    soft_delete,
    soft_delete_to_trash,
)
from ..service import get_unique_filename

routes = web.RouteTableDef()


def _text_contains_flux(value: str | None) -> bool:
    if not value:
        return False
    return "flux" in value.lower()


def _is_flux_metadata(
    model_name: str | None,
    workflow_json: str | None,
    prompt_json: str | None,
    a1111_text: str | None,
) -> bool:
    # Requirement: auto-detect Flux vs SD without hiding user options.
    # Keep the heuristic conservative: only return True when clear hints exist.
    if _text_contains_flux(model_name):
        return True
    if _text_contains_flux(workflow_json):
        return True
    if _text_contains_flux(prompt_json):
        return True
    if _text_contains_flux(a1111_text):
        return True
    return False


def _extract_guidance_value(data: object) -> float | None:
    """Extract guidance value from nested data structure.

    Args:
        data: The data to search for guidance values.
    """
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(key, str) and key.lower() in {"guidance", "guidance_scale"}:
                if isinstance(value, (int, float)):
                    return float(value)
            found = _extract_guidance_value(value)
            if found is not None:
                return found
        return None
    if isinstance(data, list):
        for item in data:
            found = _extract_guidance_value(item)
            if found is not None:
                return found
        return None
    return None


def _extract_guidance_from_json(json_text: str | None) -> float | None:
    if not json_text:
        return None
    try:
        return _extract_guidance_value(json.loads(json_text))
    except Exception:
        return None


@routes.get("/meld/image/{image_id}/details")
async def get_image_details(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        with db_connection() as conn:
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
                       i.workflow, i.width, i.height, i.deleted_at, i.user_notes
                FROM images i LEFT JOIN images p ON i.parent_id = p.id
                WHERE i.id = ?
            """
            cursor.execute(sql, (image_id,))
            img = cursor.fetchone()

            if not img:
                return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

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
                user_notes,
            ) = img

            # Fetch tags
            cursor.execute(
                "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
                (image_id,),
            )
            tags = [row[0] for row in cursor.fetchall()]

            # Fetch parsed positive prompt keywords from relations (for Core Prompt feature)
            cursor.execute(
                "SELECT pp.name FROM positive_prompts pp JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id WHERE r.image_id = ?",
                (image_id,),
            )
            positive_prompt_keywords = [row[0] for row in cursor.fetchall()]

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
            user_notes=user_notes,
            exists=True,
            ancestors=ancestors,
            positive_prompt_keywords=positive_prompt_keywords,
        )

        return web.json_response(ApiResponse(success=True, data=item.to_dict()).to_dict())
    except MeldError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/image/{image_id}/workflow")
async def get_image_workflow(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT workflow FROM images WHERE id = ? AND deleted_at IS NULL", (image_id,))
            row = cursor.fetchone()

        if row and row[0]:
            try:
                workflow_data = json.loads(row[0])
                return web.json_response(ApiResponse(success=True, data={"workflow": workflow_data}).to_dict())
            except Exception as e:
                return web.json_response(
                    ApiResponse(success=False, error=f"Failed to parse workflow: {str(e)}").to_dict(), status=500
                )

        return web.json_response(ApiResponse(success=False, error="Workflow not found").to_dict(), status=404)
    except MeldError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/image/{image_id}/snapshot_data")
async def get_image_snapshot_data(request: web.Request) -> web.Response:
    try:
        image_id = request.match_info["image_id"]
        with db_connection() as conn:
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

        if not row:
            return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

        filename, subfolder, img_type, db_pos, db_neg, workflow_json, model_name, db_width, db_height = row

        if img_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif img_type == "input":
            base_dir = folder_paths.get_input_directory()
        elif img_type == "temp":
            base_dir = folder_paths.get_temp_directory()
        elif img_type == "custom":
            base_dir = ""
        else:
            base_dir = None

        data = ImageSnapshotResponse(
            model_name=model_name or "v1-5-pruned-emaonly.ckpt",
            positive=db_pos or "",
            negative=db_neg or "",
            seed=0,
            steps=20,
            cfg=8.0,
            guidance=3.5,
            clip_name1="",
            clip_name2="",
            clip_type="",
            clip_device="",
            sampler_name="euler",
            scheduler="normal",
            width=db_width or 512,
            height=db_height or 512,
            is_flux=_is_flux_metadata(model_name, workflow_json, None, None),
        )

        if base_dir is not None:
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
                    raw_kp, found_k = MetadataHelper.get_ksampler_params(wf_json, [])
                    k_params = dict(raw_kp) if raw_kp else {}
                    guidance_val = _extract_guidance_from_json(wf_json)
                    if guidance_val is not None:
                        data.guidance = guidance_val

                if not found_k and pr_json:
                    raw_kp, found_k = MetadataHelper.get_ksampler_params_from_prompt(pr_json, [])
                    k_params = dict(raw_kp) if raw_kp else {}
                    guidance_val = _extract_guidance_from_json(pr_json)
                    if guidance_val is not None:
                        data.guidance = guidance_val

                if not found_k and a1111_text:
                    raw_kp = MetadataHelper.parse_a1111_params(a1111_text)
                    k_params = dict(raw_kp) if raw_kp else {}
                    found_k = bool(k_params)
                    guidance_val = _extract_guidance_from_json(a1111_text)
                    if guidance_val is not None:
                        data.guidance = guidance_val

                data.is_flux = _is_flux_metadata(m_name, wf_json, pr_json, a1111_text)

                if found_k:
                    for k in ["seed", "steps", "cfg", "sampler_name", "scheduler"]:
                        if k in k_params and k_params[k] is not None:
                            setattr(data, k, k_params[k])

                clip_params, clip_found = MetadataHelper.get_dual_clip_params(wf_json, [])
                if not clip_found and pr_json:
                    clip_params, clip_found = MetadataHelper.get_dual_clip_params(pr_json, [])

                if clip_found:
                    data.clip_name1 = str(clip_params.get("clip_name1") or "")
                    data.clip_name2 = str(clip_params.get("clip_name2") or "")
                    data.clip_type = str(clip_params.get("clip_type") or "")
                    data.clip_device = str(clip_params.get("clip_device") or "")

        return web.json_response(ApiResponse(success=True, data=data.to_dict()).to_dict())
    except MeldError as e:
        logging.exception(f"[Meld] Failed to get snapshot data: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/list")
async def list_images(request: web.Request) -> web.Response:
    try:
        start_time = time.time()
        is_minimal = request.query.get("minimal", "false").lower() == "true"
        try:
            offset = int(request.query.get("offset", 0))
            limit = int(request.query.get("limit", 1000000))
        except (ValueError, TypeError):
            return web.json_response(
                ApiResponse(success=False, error="offset and limit must be integers").to_dict(), status=400
            )
        req = SearchImagesRequest(
            offset=offset,
            limit=limit,
            query=request.query.get("query", ""),
            view=request.query.get("view", "default"),
        )

        with db_connection() as conn:
            cursor = conn.cursor()

            search_sql, search_params, order_sql = SearchService.build_search_sql(req.query)

            db_settings = get_all_settings(cursor)
            try:
                lineage_max_depth = int(db_settings.get("gallery.lineage_max_depth", 5))
            except (ValueError, TypeError):
                lineage_max_depth = 5

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
                       NULL as workflow, i.width, i.height, i.deleted_at, i.user_notes
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
                for row_img_id, tag_name in cursor.fetchall():
                    iid: int = int(row_img_id)
                    if iid not in tags_map:
                        tags_map[iid] = []
                    tags_map[iid].append(tag_name)

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
                        sid: int = int(start_id)
                        if sid not in ancestors_map:
                            ancestors_map[sid] = []
                        if len(ancestors_map[sid]) < lineage_max_depth:
                            ancestors_map[sid].append(
                                {"id": a_id, "filename": a_fname, "subfolder": a_subf, "type": a_type}
                            )

                needs_reconstruction_pos = [img[0] for img in images if img[12] is None] if not is_minimal else []
                if needs_reconstruction_pos:
                    ph = ",".join(["?"] * len(needs_reconstruction_pos))
                    cursor.execute(
                        f"SELECT r.image_id, pp.name, r.strength FROM positive_prompts pp JOIN positive_prompt_image_relations r ON pp.id = r.positive_prompt_id WHERE r.image_id IN ({ph})",
                        needs_reconstruction_pos,
                    )
                    for row_img_id, name, strength in cursor.fetchall():
                        iid = int(row_img_id)
                        if iid not in reconstructed_pos_map:
                            reconstructed_pos_map[iid] = []
                        reconstructed_pos_map[iid].append(name if strength == 1.0 else f"({name}:{strength})")

                needs_reconstruction_neg = [img[0] for img in images if img[13] is None] if not is_minimal else []
                if needs_reconstruction_neg:
                    ph = ",".join(["?"] * len(needs_reconstruction_neg))
                    cursor.execute(
                        f"SELECT r.image_id, np.name, r.strength FROM negative_prompts np JOIN negative_prompt_image_relations r ON np.id = r.negative_prompt_id WHERE r.image_id IN ({ph})",
                        needs_reconstruction_neg,
                    )
                    for row_img_id, name, strength in cursor.fetchall():
                        iid = int(row_img_id)
                        if iid not in reconstructed_neg_map:
                            reconstructed_neg_map[iid] = []
                        reconstructed_neg_map[iid].append(name if strength == 1.0 else f"({name}:{strength})")

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
                user_notes,
            ) = img

            effective_type = "trash" if deleted_at is not None else img_type
            positive = db_positive if db_positive is not None else ", ".join(reconstructed_pos_map.get(img_id, []))
            negative = db_negative if db_negative is not None else ", ".join(reconstructed_neg_map.get(img_id, []))

            if is_minimal:
                if positive and len(positive) > 200:
                    _pos: str = str(positive)
                    positive = _pos[:200] + "..."
                if negative and len(negative) > 200:
                    _neg: str = str(negative)
                    negative = _neg[:200] + "..."
                if user_notes and len(user_notes) > 200:
                    _notes: str = str(user_notes)
                    user_notes = _notes[:200] + "..."

            tags = tags_map.get(img_id, [])

            base_dir = None
            effective_subfolder = ""
            if effective_type == "trash":
                base_dir = get_trash_dir()
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
                    user_notes=user_notes,
                    exists=exists,
                    ancestors=ancestors,
                )
            )

        response = ImageListResponse(
            images=result_list,
            total=total_count,
            offset=req.offset,
            limit=req.limit,
        )
        logging.info(
            f"[Meld] list_images: found {len(result_list)}/{total_count} images (limit={req.limit}, offset={req.offset}) in {time.time() - start_time:.3f}s"
        )

        return web.json_response(
            ApiResponse(
                success=True,
                data=response.to_dict(),
                count=total_count,  # Keep it in data
            ).to_dict()
        )
    except MeldError as e:
        logging.exception("[Meld] Failed to list images")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/restore")
async def restore_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = RestoreImagesRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.ids:
            return web.json_response(ApiResponse(success=False, error="ids are required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()

            all_ids_to_restore = collect_deleted_ancestors(cursor, req.ids)

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

                trash_full_path = os.path.normpath(os.path.join(get_trash_dir(), trash_filename))
                if not os.path.exists(trash_full_path):
                    restore_image(cursor, img_id)
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
                    restore_image_with_rename(cursor, img_id, final_filename)
                    restored_ids.append(img_id)
                except Exception as e:
                    logging.error(f"[Meld] Failed to restore file {trash_filename}: {e}")
                    continue

            conn.commit()

        return web.json_response(
            ApiResponse(success=True, count=len(restored_ids), data={"restored_ids": restored_ids}).to_dict()
        )
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] Restore failed")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/bulk-delete")
async def bulk_delete_images(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = BulkDeleteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.ids:
            return web.json_response(ApiResponse(success=False, error="ids are required").to_dict(), status=400)

        permanent = req.permanent or req.delete_files

        with db_connection() as conn:
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
                    base_dir = get_trash_dir()
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
                    os.path.abspath(os.path.join(base_dir, current_subfolder, filename))
                )

                if permanent:
                    if os.path.exists(current_full_path):
                        try:
                            os.remove(current_full_path)
                        except Exception as e:
                            logging.warning(f"[Meld] Failed to permanently delete file {current_full_path}: {e}")

                    permanent_delete(cursor, img_id)

                else:
                    if deleted_at is not None:
                        continue

                    if os.path.exists(current_full_path):
                        new_filename = get_unique_filename(get_trash_dir(), "", f"{int(now)}_{filename}")
                        new_full_path = os.path.join(get_trash_dir(), new_filename)
                        try:
                            shutil.move(current_full_path, new_full_path)
                            soft_delete_to_trash(cursor, img_id, now, new_filename)
                        except Exception as e:
                            logging.error(f"[Meld] Failed to move file to trash {current_full_path}: {e}")
                            continue
                    else:
                        soft_delete(cursor, img_id, now)

                deleted_count += 1

            conn.commit()

        return web.json_response(ApiResponse(success=True, count=deleted_count).to_dict())
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] Bulk delete failed")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/image-notes")
async def update_image_notes(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = UpdateImageNotesRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()

            # Check if image exists
            cursor.execute("SELECT id FROM images WHERE id = ?", (req.imageId,))
            if not cursor.fetchone():
                return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

            # Update notes (trash images are also allowed)
            cursor.execute("UPDATE images SET user_notes = ? WHERE id = ?", (req.userNotes, req.imageId))
            conn.commit()

            # Fetch updated image details to return
            # Using a simplified version of get_image_details logic
            sql = """
                SELECT i.id, i.filename, i.subfolder, i.type, i.created_at, i.phash, i.sha256, i.parent_id,
                       p.filename as parent_filename, p.subfolder as parent_subfolder, p.type as parent_type,
                       EXISTS(SELECT 1 FROM images c WHERE c.parent_id = i.id AND c.deleted_at IS NULL) as has_children,
                       i.positive_prompt, i.negative_prompt,
                       (SELECT GROUP_CONCAT(m.name, ', ') FROM models m
                        JOIN model_image_relations mir ON m.id = mir.model_id
                        WHERE mir.image_id = i.id) as model_name,
                       i.workflow, i.width, i.height, i.deleted_at, i.user_notes
                FROM images i LEFT JOIN images p ON i.parent_id = p.id
                WHERE i.id = ?
            """
            cursor.execute(sql, (req.imageId,))
            img = cursor.fetchone()

            # Reconstruct prompts and tags (same as get_image_details)
            cursor.execute(
                "SELECT t.name FROM tags t JOIN tag_image_relations r ON t.id = r.tag_id WHERE r.image_id = ?",
                (req.imageId,),
            )
            tags = [row[0] for row in cursor.fetchall()]

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
                user_notes,
            ) = img

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
            positive=db_positive or "",
            negative=db_negative or "",
            positive_prompt=db_positive,
            negative_prompt=db_negative,
            model_name=model_name,
            workflow=workflow,
            width=width,
            height=height,
            is_minimal=False,
            tags=tags,
            user_notes=user_notes,
            exists=True,
            ancestors=[],  # Simplified
        )

        return web.json_response(ApiResponse(success=True, data=item.to_dict()).to_dict())
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] Failed to update image notes")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/delete")
async def delete_image_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = DeleteImageRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.id and not req.filename:
            return web.json_response(
                ApiResponse(success=False, error="id or filename is required").to_dict(), status=400
            )

        if req.id:
            ids = [req.id]
        else:
            with db_connection() as conn:
                cursor = conn.cursor()
                cursor.execute("SELECT id FROM images WHERE filename = ?", (req.filename,))
                ids = [row[0] for row in cursor.fetchall()]

        if not ids:
            return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

        with db_connection() as conn:
            cursor = conn.cursor()

            placeholders = ",".join(["?"] * len(ids))
            cursor.execute(
                f"SELECT id, filename, subfolder, type, deleted_at FROM images WHERE id IN ({placeholders})", ids
            )
            images = cursor.fetchall()

            now = time.time()
            for img_id, img_filename, subfolder, img_type, deleted_at in images:
                if deleted_at is not None:
                    base_dir = get_trash_dir()
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
                    permanent_delete(cursor, img_id)
                else:
                    if deleted_at is None:
                        if os.path.exists(current_full_path):
                            new_filename = get_unique_filename(get_trash_dir(), "", f"{int(now)}_{img_filename}")
                            new_full_path = os.path.join(get_trash_dir(), new_filename)
                            try:
                                shutil.move(current_full_path, new_full_path)
                                soft_delete_to_trash(cursor, img_id, now, new_filename)
                            except Exception:
                                continue
                        else:
                            soft_delete(cursor, img_id, now)

            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/register")
async def register_image_endpoint(request: web.Request) -> web.Response:
    try:
        if request.has_body and request.content_type == "application/json":
            data = await request.json()
        else:
            return web.json_response(
                ApiResponse(success=False, error="Content-Type must be application/json").to_dict(), status=400
            )

        try:
            req = RegisterImageRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.filename:
            return web.json_response(ApiResponse(success=False, error="filename is required").to_dict(), status=400)

        if os.path.basename(req.filename) != req.filename:
            return web.json_response(ApiResponse(success=False, error="invalid filename").to_dict(), status=400)

        if req.type == "output":
            base_dir = folder_paths.get_output_directory()
        elif req.type == "input":
            base_dir = folder_paths.get_input_directory()
        elif req.type == "temp":
            base_dir = folder_paths.get_temp_directory()
        elif req.type == "custom":
            base_dir = ""
        else:
            return web.json_response(
                ApiResponse(success=False, error=f"invalid type: {req.type}").to_dict(), status=400
            )

        if req.type == "custom":
            full_path = os.path.abspath(os.path.join(req.subfolder, req.filename))
        else:
            full_path = os.path.abspath(os.path.join(base_dir, req.subfolder, req.filename))
            base_abs = os.path.abspath(base_dir)
            if os.path.commonpath([base_abs, full_path]) != base_abs:
                return web.json_response(ApiResponse(success=False, error="invalid path").to_dict(), status=400)

        if not os.path.exists(full_path):
            return web.json_response(
                ApiResponse(success=False, error=f"File not found: {full_path}").to_dict(), status=404
            )

        with db_connection() as conn:
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
                return web.json_response(
                    ApiResponse(
                        success=True, message="Already registered (hash match)", data={"id": existing_sha[0]}
                    ).to_dict()
                )

            cursor.execute(
                "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND type = ? AND deleted_at IS NULL",
                (req.filename, req.subfolder, req.type),
            )
            existing = cursor.fetchone()
            if existing:
                return web.json_response(
                    ApiResponse(
                        success=True, message="Already registered (path match)", data={"id": existing[0]}
                    ).to_dict()
                )

            pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataHelper.extract_metadata(full_path)

            timestamp = os.path.getmtime(full_path)

            width, height = 0, 0
            try:
                with Image.open(full_path) as img:
                    width, height = img.size
            except Exception:
                pass

            imagehash = MetadataHelper.get_imagehash()
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

            # Inherit tags if enabled and parent exists
            if image_id is not None and parent_id and db_settings.get("gallery.inherit_tags", True):
                inherit_tags(cursor, image_id, parent_id)

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

        server.PromptServer.instance.send_sync("meld-image-saved", {"count": 1})

        return web.json_response(ApiResponse(success=True, data={"id": image_id}).to_dict())
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] Failed to register image")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)
