import asyncio
import hashlib
import json
import logging
import os
import shutil
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from typing import Any

import folder_paths
import server
from aiohttp import web
from PIL import Image

from ....load_image_configs.core.metadata_helper import MetadataHelper
from ...common.db.client import db_connection, get_thumbnail_cache_dir, get_trash_dir
from ...common.exceptions import MeldError, ValidationError
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
    UpdateImageNotesRequest,
)
from ...features.settings.repository import get_all_settings
from ..importer.service import infer_parent_id
from ..search.service import SearchService
from .repository import (
    calculate_sha256,
    collect_deleted_ancestors,
    inherit_tags,
    permanent_delete,
    restore_image,
    restore_image_with_rename,
    soft_delete,
    soft_delete_to_trash,
)
from .service import get_parent_suggestions, get_unique_filename

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
                        new_filename = f"{int(now)}_{filename}"
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
                            new_filename = f"{int(now)}_{img_filename}"
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


@routes.post("/meld/link-parent")
async def link_parent_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = LinkParentRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.childId is None:
            return web.json_response(ApiResponse(success=False, error="childId is required").to_dict(), status=400)

        if req.childId == req.parentId:
            return web.json_response(
                ApiResponse(success=False, error="Cannot set an image as its own parent").to_dict(), status=400
            )

        with db_connection() as conn:
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
                        return web.json_response(
                            ApiResponse(
                                success=False, error="Parent image must be older than the child image"
                            ).to_dict(),
                            status=400,
                        )

            cursor.execute("UPDATE images SET parent_id = ? WHERE id = ?", (req.parentId, req.childId))
            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/suggest-parents")
async def suggest_parents_endpoint(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")

        with db_connection() as conn:
            cursor = conn.cursor()

            db_settings = get_all_settings(cursor)
            default_threshold = db_settings.get("gallery.suggest_phash_threshold", 82)
            try:
                threshold_pct = float(request.query.get("threshold", default_threshold))
            except (ValueError, TypeError):
                return web.json_response(
                    ApiResponse(success=False, error="threshold must be a valid number").to_dict(), status=400
                )
            threshold = round(64 * (1 - threshold_pct / 100))

            if not image_id:
                return web.json_response(ApiResponse(success=False, error="id is required").to_dict(), status=400)
            strategy = db_settings.get("gallery.matching_strategy", "phash_created")

            cursor.execute(
                "SELECT phash, created_at, filename, subfolder, type FROM images WHERE id = ?",
                (image_id,),
            )
            row = cursor.fetchone()
            if not row:
                return web.json_response(ApiResponse(success=True, data=[]).to_dict())

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

        return web.json_response(ApiResponse(success=True, data=[s.to_dict() for s in suggestions[:20]]).to_dict())
    except MeldError as e:
        logging.exception("[Meld] Failed to suggest parents")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/lineage")
async def get_lineage_endpoint(request: web.Request) -> web.Response:
    try:
        image_id = request.query.get("id")
        if not image_id:
            return web.json_response(ApiResponse(success=False, error="id is required").to_dict(), status=400)

        with db_connection() as conn:
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
                   i.workflow, i.width, i.height, i.user_notes
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
                        user_notes=row[16],
                        tags=tags,
                    ).to_dict()
                )

        return web.json_response(ApiResponse(success=True, data=result).to_dict())
    except MeldError as e:
        logging.exception("[Meld] Failed to get lineage")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


_thumb_executor: ThreadPoolExecutor | None = None


def _get_thumb_executor() -> ThreadPoolExecutor:
    """Lazy-init module-level executor for thumbnail generation."""
    global _thumb_executor
    if _thumb_executor is None:
        _thumb_executor = ThreadPoolExecutor(max_workers=4, thread_name_prefix="meld-thumb")
    return _thumb_executor


def _generate_thumbnail(source_path: str, cache_path: str, size: int) -> None:
    """
    Synchronous helper to generate a thumbnail. Must run off the event loop.
    Uses an atomic write to prevent race conditions.
    """
    # Create a unique temporary path in the same directory for atomic rename
    temp_path = f"{cache_path}.{uuid.uuid4().hex}.tmp"

    try:
        with Image.open(source_path) as img:
            img.load()
            img.thumbnail((size, size), Image.Resampling.LANCZOS)
            img.save(temp_path, "WEBP", quality=85)

        # os.replace is atomic and works across most platforms if on the same filesystem
        os.replace(temp_path, cache_path)
    except Exception:
        # Cleanup temporary file if something went wrong
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except OSError:
                pass
        raise


@dataclass(frozen=True)
class ResolveError:
    """Structured error from _resolve_image_path_for_thumb."""

    status_code: int
    message: str


def _resolve_image_path_for_thumb(
    filename: str,
    subfolder: str,
    img_type: str,
) -> tuple[str | None, ResolveError | None]:
    """
    Resolve image path for thumbnail generation.
    Returns (absolute_path, resolve_error).
    If resolve_error is not None, absolute_path is None and caller should use
    resolve_error.status_code and resolve_error.message for the response.
    """
    if not filename or not img_type:
        return (None, ResolveError(400, "filename and type are required"))

    # Security: prevent path traversal
    if filename[0] == "/" or ".." in filename:
        return (None, ResolveError(400, "invalid filename"))

    filename = os.path.basename(filename)

    base_dir: str | None = None
    effective_subfolder = ""

    if img_type == "trash":
        base_dir = get_trash_dir()
        effective_subfolder = ""
    elif img_type == "output":
        base_dir = folder_paths.get_output_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "input":
        base_dir = folder_paths.get_input_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "temp":
        base_dir = folder_paths.get_temp_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "custom":
        # subfolder for custom type is the full directory path (stored by importer).
        # Verify it is under a trusted base to prevent path traversal.
        if subfolder is None or subfolder == "":
            return (None, ResolveError(400, "subfolder is required for custom type"))
        full_path = os.path.normpath(os.path.abspath(os.path.join(subfolder, filename)))
        dir_path = os.path.dirname(full_path)
        dir_abs = os.path.abspath(dir_path)
        # Allowed roots: ComfyUI dirs and custom if available
        allowed_roots: list[str] = []
        for d in (
            folder_paths.get_output_directory(),
            folder_paths.get_input_directory(),
            folder_paths.get_temp_directory(),
            get_trash_dir(),
        ):
            if d:
                allowed_roots.append(os.path.abspath(d))
        get_custom = getattr(folder_paths, "get_custom_directory", None)
        if get_custom:
            custom_dir = get_custom()
            if custom_dir:
                allowed_roots.append(os.path.abspath(custom_dir))
        if not allowed_roots:
            return (None, ResolveError(400, "base directory not configured"))
        under_allowed = False
        for base_abs in allowed_roots:
            try:
                if os.path.commonpath([base_abs, dir_abs]) == base_abs:
                    under_allowed = True
                    break
            except ValueError:
                continue
        if not under_allowed:
            return (None, ResolveError(403, "path traversal detected"))
        if not os.path.isfile(full_path):
            return (None, ResolveError(404, "file not found"))
        if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            return (None, ResolveError(400, "unsupported format"))
        return (full_path, None)
    else:
        return (None, ResolveError(400, f"invalid type: {img_type}"))

    if base_dir is None:
        return (None, ResolveError(400, "base directory not configured"))

    full_path = os.path.normpath(os.path.abspath(os.path.join(base_dir, effective_subfolder, filename)))
    base_abs = os.path.abspath(base_dir)
    try:
        if os.path.commonpath([base_abs, full_path]) != base_abs:
            return (None, ResolveError(403, "path traversal detected"))
    except ValueError:
        return (None, ResolveError(403, "path traversal detected"))

    if not os.path.isfile(full_path):
        return (None, ResolveError(404, "file not found"))

    if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
        return (None, ResolveError(400, "unsupported format"))

    return (full_path, None)


@routes.get("/meld/view-thumb")
async def view_thumb_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        subfolder = request.query.get("subfolder") or ""
        img_type = request.query.get("type", "output")
        size_param = request.query.get("size", "200")
        try:
            size = min(400, max(1, int(size_param)))
        except ValueError:
            size = 200

        resolved, err = _resolve_image_path_for_thumb(filename or "", subfolder, img_type)
        if err is not None:
            return web.Response(status=err.status_code, text=err.message)

        if resolved is None:
            return web.Response(status=400, text="path resolution failed")

        source_path = resolved

        thumb_dir = get_thumbnail_cache_dir()
        os.makedirs(thumb_dir, exist_ok=True)
        cache_key = hashlib.sha256(f"{source_path}_{size}".encode()).hexdigest()
        cache_path = os.path.join(thumb_dir, f"{cache_key}.webp")

        cache_hit = False
        if os.path.exists(cache_path):
            try:
                if os.path.getmtime(source_path) <= os.path.getmtime(cache_path):
                    cache_hit = True
            except OSError:
                pass

        if not cache_hit:
            loop = asyncio.get_running_loop()
            await loop.run_in_executor(
                _get_thumb_executor(),
                _generate_thumbnail,
                source_path,
                cache_path,
                size,
            )

        response = web.FileResponse(
            cache_path,
            headers={"Cache-Control": "public, max-age=86400"},
        )
        return response
    except Exception as e:
        logging.exception("[Meld] Error in view_thumb: %s", e)
        return web.Response(status=500, text="Internal server error")


@routes.post("/meld/clear-thumbnail-cache")
async def clear_thumbnail_cache_endpoint(request: web.Request) -> web.Response:
    try:
        deleted_count = 0
        thumb_dir = get_thumbnail_cache_dir()
        if os.path.isdir(thumb_dir):
            for name in os.listdir(thumb_dir):
                if name.lower().endswith(".webp"):
                    fp = os.path.join(thumb_dir, name)
                    try:
                        os.remove(fp)
                        deleted_count += 1
                    except OSError as e:
                        logging.warning("[Meld] Failed to remove cache file %s: %s", fp, e)
        return web.json_response(ApiResponse(success=True, data={"deleted_count": deleted_count}).to_dict())
    except MeldError as e:
        logging.exception("[Meld] Error in clear_thumbnail_cache: %s", e)
        return web.json_response(
            ApiResponse(success=False, error=str(e)).to_dict(),
            status=e.status_code,
        )


@routes.get("/meld/view-trash")
async def view_trash_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        if not filename:
            return web.Response(status=400)

        if os.path.basename(filename) != filename:
            return web.Response(status=403)

        file_path = os.path.normpath(os.path.join(get_trash_dir(), filename))
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
                "SELECT id FROM images WHERE filename = ? AND subfolder = ? AND deleted_at IS NULL",
                (req.filename, req.subfolder),
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


def _get_image_path(img_type: str, subfolder: str, filename: str) -> str | None:
    if img_type == "output":
        base_dir = folder_paths.get_output_directory()
    elif img_type == "input":
        base_dir = folder_paths.get_input_directory()
    elif img_type == "temp":
        base_dir = folder_paths.get_temp_directory()
    elif img_type == "custom":
        # custom images must be within a known directory to prevent arbitrary file access
        get_custom = getattr(folder_paths, "get_custom_directory", None)
        if get_custom:
            base_dir = get_custom()
        else:
            base_dir = folder_paths.get_input_directory()
    else:
        return None

    if not base_dir:
        return None

    # Secure path resolution
    base_abs = os.path.abspath(base_dir)
    full_path = os.path.normpath(os.path.abspath(os.path.join(base_abs, subfolder, filename)))

    # Verify containment
    try:
        if os.path.commonpath([base_abs, full_path]) != base_abs:
            logging.warning(f"[Meld] Prevented suspicious file access: {full_path} outside of {base_abs}")
            return None
    except ValueError:
        return None

    return full_path


def _strip_png_metadata_fast(data: bytes) -> bytes | None:
    import io
    import struct

    if len(data) < 8 or data[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    out = io.BytesIO()
    out.write(data[:8])
    offset = 8
    saw_any_chunk = False
    saw_iend = False
    while offset + 8 <= len(data):
        chunk_length = struct.unpack(">I", data[offset : offset + 4])[0]
        chunk_type = data[offset + 4 : offset + 8]
        chunk_full_size = 12 + chunk_length
        if offset + chunk_full_size > len(data):
            return None
        saw_any_chunk = True
        if chunk_type == b"IEND":
            saw_iend = True
        if chunk_type not in (b"tEXt", b"zTXt", b"iTXt"):
            out.write(data[offset : offset + chunk_full_size])
        offset += chunk_full_size
    if not saw_any_chunk or not saw_iend:
        return None
    return out.getvalue()


def _strip_webp_metadata_fast(data: bytes) -> bytes | None:
    import io
    import struct

    if len(data) < 12 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        return None
    out = io.BytesIO()
    out.write(data[:12])
    offset = 12
    vp8x_pos = -1
    vp8x_data = bytearray()
    saw_any_chunk = False
    while offset + 8 <= len(data):
        chunk_id = data[offset : offset + 4]
        chunk_size = struct.unpack("<I", data[offset + 4 : offset + 8])[0]
        padding = chunk_size % 2
        chunk_full_size = 8 + chunk_size + padding
        if offset + chunk_full_size > len(data):
            return None
        saw_any_chunk = True
        chunk_data = data[offset : offset + chunk_full_size]
        if chunk_id in (b"EXIF", b"XMP "):
            pass  # skip metadata
        elif chunk_id == b"VP8X":
            vp8x_pos = out.tell()
            vp8x_data = bytearray(chunk_data)
            out.write(vp8x_data)
        else:
            out.write(chunk_data)
        offset += chunk_full_size
    total_size = out.tell()
    if not saw_any_chunk or total_size <= 12:
        return None
    if vp8x_pos != -1 and len(vp8x_data) >= 12:
        flags = struct.unpack("<I", vp8x_data[8:12])[0]
        flags &= ~8  # Unset EXIF
        flags &= ~4  # Unset XMP
        vp8x_data[8:12] = struct.pack("<I", flags)
        current_pos = out.tell()
        out.seek(vp8x_pos)
        out.write(vp8x_data)
        out.seek(current_pos)
    out.seek(4)
    out.write(struct.pack("<I", total_size - 8))
    return out.getvalue()


def _strip_metadata(image_path: str) -> bytes:
    import io

    try:
        with open(image_path, "rb") as f:
            data = f.read()

        if data.startswith(b"\x89PNG\r\n\x1a\n"):
            try:
                res = _strip_png_metadata_fast(data)
                if res is not None:
                    return res
            except Exception as e:
                logging.warning(f"[Meld] Fast PNG strip failed for {image_path}: {e}")

        if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
            try:
                res = _strip_webp_metadata_fast(data)
                if res is not None:
                    return res
            except Exception as e:
                logging.warning(f"[Meld] Fast WebP strip failed for {image_path}: {e}")

        # Fallback for JPEG or if fast paths fail
        with Image.open(io.BytesIO(data)) as img:
            # Paste into a new image to strip metadata
            clean_img = Image.new(img.mode, img.size)
            clean_img.paste(img)
            buffer = io.BytesIO()
            img_format = img.format or "PNG"

            if img_format.upper() in ["JPEG", "JPG"]:
                clean_img.save(buffer, format="JPEG", quality=95)
            elif img_format.upper() == "WEBP":
                clean_img.save(buffer, format="WEBP", lossless=True)
            else:
                clean_img.save(buffer, format="PNG")

            return buffer.getvalue()
    except Exception as e:
        logging.error(f"[Meld] Failed to process image {image_path}: {e}")
        raise ValidationError("Invalid image file") from e


# Resize filter name -> Pillow Resampling constant mapping
_RESAMPLING_FILTERS: dict[str, "Image.Resampling"] = {
    "lanczos": Image.Resampling.LANCZOS,
    "bicubic": Image.Resampling.BICUBIC,
    "bilinear": Image.Resampling.BILINEAR,
    "box": Image.Resampling.BOX,
    "hamming": Image.Resampling.HAMMING,
    "nearest": Image.Resampling.NEAREST,
}


def _process_image_for_download(
    image_path: str,
    remove_metadata: bool,
    resize_mode: str,
    resize_value: float,
    resize_filter: str = "lanczos",
) -> bytes:
    """Process image for download. If no resize or metadata removal is needed, read as-is.
    If resize is needed, use Pillow to resize while maintaining aspect ratio (no upscaling).
    Metadata is preserved or removed according to the remove_metadata flag.
    """
    import io

    from PIL.PngImagePlugin import PngInfo

    needs_resize = False
    if resize_mode == "percent" and 0 < resize_value < 100:
        needs_resize = True
    elif resize_mode == "max_edge" and resize_value > 0:
        needs_resize = True

    # If no resize needed, delegate to existing processing
    if not needs_resize:
        if remove_metadata:
            return _strip_metadata(image_path)
        with open(image_path, "rb") as f:
            return f.read()

    # Fall back to LANCZOS for unknown filter names
    resampling = _RESAMPLING_FILTERS.get(resize_filter, Image.Resampling.LANCZOS)

    # Resize needed: open with Pillow and process
    with Image.open(image_path) as img:
        orig_w, orig_h = img.size
        orig_format = img.format or "PNG"
        orig_info = dict(img.info)  # Copy metadata for preservation
        orig_mode = img.mode

        # Calculate new dimensions (maintain aspect ratio, no upscaling)
        if resize_mode == "percent":
            scale = resize_value / 100.0
            new_w = max(1, int(orig_w * scale))
            new_h = max(1, int(orig_h * scale))
        else:  # max_edge
            max_dim = int(resize_value)
            if orig_w <= max_dim and orig_h <= max_dim:
                # Already within max edge size, no resize needed
                if remove_metadata:
                    return _strip_metadata(image_path)
                with open(image_path, "rb") as f:
                    return f.read()
            if orig_w >= orig_h:
                scale = max_dim / orig_w
            else:
                scale = max_dim / orig_h
            new_w = max(1, int(orig_w * scale))
            new_h = max(1, int(orig_h * scale))

        resized = img.resize((new_w, new_h), resampling)

    buffer = io.BytesIO()
    fmt = orig_format.upper()

    if fmt in ("JPEG", "JPG"):
        if remove_metadata:
            resized.save(buffer, format="JPEG", quality=95)
        else:
            # Preserve metadata: reattach exif/icc_profile if available
            save_kwargs: dict[str, Any] = {"format": "JPEG", "quality": 95}
            if orig_info.get("exif"):
                save_kwargs["exif"] = orig_info["exif"]
            if orig_info.get("icc_profile"):
                save_kwargs["icc_profile"] = orig_info["icc_profile"]
            resized.save(buffer, **save_kwargs)
    elif fmt == "WEBP":
        if remove_metadata:
            resized.save(buffer, format="WEBP", lossless=(orig_mode not in ("RGB", "L")))
        else:
            # Preserve metadata: reattach exif/xmp/icc_profile if available
            save_kwargs = {"format": "WEBP", "lossless": (orig_mode not in ("RGB", "L"))}
            if orig_info.get("exif"):
                save_kwargs["exif"] = orig_info["exif"]
            if orig_info.get("xmp"):
                save_kwargs["xmp"] = orig_info["xmp"]
            if orig_info.get("icc_profile"):
                save_kwargs["icc_profile"] = orig_info["icc_profile"]
            resized.save(buffer, **save_kwargs)
    else:
        # PNG: re-apply metadata via PngInfo when preserving metadata
        if remove_metadata:
            resized.save(buffer, format="PNG")
        else:
            pnginfo = PngInfo()
            for k, v in orig_info.items():
                key = str(k)
                if isinstance(v, str):
                    pnginfo.add_text(key, v)
                elif isinstance(v, bytes):
                    try:
                        pnginfo.add_text(key, v.decode("latin-1"))
                    except Exception:
                        pass
            resized.save(buffer, format="PNG", pnginfo=pnginfo)

    return buffer.getvalue()


@routes.post("/meld/download/zip")
async def download_zip(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_ids = data.get("imageIds", [])
        remove_metadata = data.get("removeMetadata", False)
        resize_mode = str(data.get("resizeMode", "none"))  # "none" | "percent" | "max_edge"
        resize_filter = str(data.get("resizeFilter", "lanczos"))
        try:
            resize_value = float(data.get("resizeValue", 100))
        except (TypeError, ValueError):
            return web.json_response(
                ApiResponse(success=False, error="resizeValue must be a valid number").to_dict(), status=400
            )

        if not image_ids:
            return web.json_response(ApiResponse(success=False, error="No image IDs provided").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            placeholders = ",".join(["?"] * len(image_ids))
            cursor.execute(f"SELECT id, filename, subfolder, type FROM images WHERE id IN ({placeholders})", image_ids)
            rows = cursor.fetchall()

        import io
        import zipfile

        zip_buffer = io.BytesIO()

        ALLOWED_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")
        with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zf:
            for _img_id, filename, subfolder, img_type in rows:
                if not filename.lower().endswith(ALLOWED_EXTENSIONS):
                    continue

                path = _get_image_path(img_type, subfolder, filename)
                if path and os.path.exists(path):
                    try:
                        img_bytes = _process_image_for_download(
                            path, remove_metadata, resize_mode, resize_value, resize_filter
                        )
                        zf.writestr(filename, img_bytes)
                    except Exception:
                        logging.warning(f"[Meld] Skipping invalid or corrupted image in zip: {path}")
                        continue

        zip_buffer.seek(0)
        return web.Response(
            body=zip_buffer.read(),
            content_type="application/zip",
            headers={"Content-Disposition": 'attachment; filename="meld_images.zip"'},
        )
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        import traceback

        traceback.print_exc()
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/download/raw")
async def download_raw(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_id = data.get("imageId")
        remove_metadata = data.get("removeMetadata", False)
        resize_mode = str(data.get("resizeMode", "none"))  # "none" | "percent" | "max_edge"
        resize_filter = str(data.get("resizeFilter", "lanczos"))
        try:
            resize_value = float(data.get("resizeValue", 100))
        except (TypeError, ValueError):
            return web.json_response(
                ApiResponse(success=False, error="resizeValue must be a valid number").to_dict(), status=400
            )

        if not image_id:
            return web.json_response(ApiResponse(success=False, error="No image ID provided").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT filename, subfolder, type FROM images WHERE id = ?", (image_id,))
            row = cursor.fetchone()

        if not row:
            return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

        filename, subfolder, img_type = row
        ALLOWED_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")
        if not filename.lower().endswith(ALLOWED_EXTENSIONS):
            return web.json_response(ApiResponse(success=False, error="Disallowed file type").to_dict(), status=400)

        path = _get_image_path(img_type, subfolder, filename)

        if not path or not os.path.exists(path):
            return web.json_response(ApiResponse(success=False, error="File not found on disk").to_dict(), status=404)

        try:
            img_bytes = _process_image_for_download(path, remove_metadata, resize_mode, resize_value, resize_filter)
        except Exception as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid image file: {e}").to_dict(), status=400)

        content_type = "image/png"
        if filename.lower().endswith((".jpg", ".jpeg")):
            content_type = "image/jpeg"
        elif filename.lower().endswith(".webp"):
            content_type = "image/webp"

        headers = {"Content-Disposition": f'attachment; filename="{filename}"'}
        return web.Response(body=img_bytes, content_type=content_type, headers=headers)
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        import traceback

        traceback.print_exc()
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)
