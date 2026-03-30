import json
import logging

from aiohttp import web

from ....common.db.client import db_connection
from ....common.exceptions import MeldError
from ....common.schemas import ApiResponse, LineageItem, LinkParentRequest
from ....features.settings.repository import get_all_settings
from ..service import get_parent_suggestions

routes = web.RouteTableDef()


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
