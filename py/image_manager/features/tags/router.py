from aiohttp import web

from ...common.constants import RESERVED_TAG_KEYWORD
from ...common.db.client import db_connection
from ...common.schemas import (
    ApiResponse,
    BulkUpdateImageTagsRequest,
    CreateTagRequest,
    DeleteTagRequest,
    RenameTagRequest,
    TagRecord,
    UpdateImageTagsRequest,
)
from .repository import delete_tag, get_all_tags, rename_tag

routes = web.RouteTableDef()


@routes.post("/meld/image-tags")
async def update_image_tags(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = UpdateImageTagsRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.imageId is None:
            return web.json_response(ApiResponse(success=False, error="imageId is required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()

            # 1. Clear existing tags for this image
            cursor.execute("DELETE FROM tag_image_relations WHERE image_id = ?", (req.imageId,))

            # 2. Add new tags and create relations
            # Deduplicate tags from request
            unique_tags = list(dict.fromkeys(req.tags))
            for tag_name in unique_tags:
                tag_name = tag_name.strip()
                if not tag_name or tag_name.lower() == RESERVED_TAG_KEYWORD:
                    continue

                # Get or create tag
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag_name,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    cursor.execute(
                        "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)",
                        (req.imageId, tag_id),
                    )

            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/bulk-image-tags")
async def bulk_update_image_tags(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = BulkUpdateImageTagsRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.imageIds:
            return web.json_response(ApiResponse(success=False, error="imageIds is required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()

            # 1. Process tags to add
            # Deduplicate tags from request
            unique_add_tags = list(dict.fromkeys(req.addTags))
            for tag_name in unique_add_tags:
                tag_name = tag_name.strip()
                if not tag_name or tag_name.lower() == RESERVED_TAG_KEYWORD:
                    continue

                # Get or create tag
                cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (tag_name,))
                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    # Add to all selected images
                    for image_id in req.imageIds:
                        cursor.execute(
                            "INSERT OR IGNORE INTO tag_image_relations (image_id, tag_id) VALUES (?, ?)",
                            (image_id, tag_id),
                        )

            # 2. Process tags to remove
            for tag_name in req.removeTags:
                tag_name = tag_name.strip()
                if not tag_name:
                    continue

                cursor.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
                tag_row = cursor.fetchone()
                if tag_row:
                    tag_id = tag_row[0]
                    # Remove from all selected images
                    placeholders = ",".join(["?"] * len(req.imageIds))
                    cursor.execute(
                        f"DELETE FROM tag_image_relations WHERE tag_id = ? AND image_id IN ({placeholders})",
                        (tag_id, *req.imageIds),
                    )

            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/tags")
async def list_tags(request: web.Request) -> web.Response:
    try:
        with db_connection() as conn:
            cursor = conn.cursor()
            tags = get_all_tags(cursor)
        return web.json_response(ApiResponse(success=True, data=[tag.to_dict() for tag in tags]).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/tags")
async def create_tag(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = CreateTagRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.name:
            return web.json_response(ApiResponse(success=False, error="name is required").to_dict(), status=400)

        if req.name.lower() == RESERVED_TAG_KEYWORD:
            return web.json_response(
                ApiResponse(
                    success=False,
                    error=f"Tag name '{RESERVED_TAG_KEYWORD}' is reserved for search and cannot be used.",
                ).to_dict(),
                status=400,
            )

        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT OR IGNORE INTO tags (name) VALUES (?)", (req.name,))
            conn.commit()
            cursor.execute("SELECT id, name FROM tags WHERE name = ?", (req.name,))
            row = cursor.fetchone()

        if row:
            return web.json_response(
                ApiResponse(success=True, data=TagRecord(id=row[0], name=row[1]).to_dict()).to_dict()
            )
        return web.json_response(ApiResponse(success=False, error="Failed to create tag").to_dict(), status=500)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.delete("/meld/tags")
async def remove_tag(request: web.Request) -> web.Response:
    try:
        tag_id_str = request.query.get("id")
        if not tag_id_str:
            return web.json_response(ApiResponse(success=False, error="id is required").to_dict(), status=400)

        try:
            req = DeleteTagRequest(id=int(tag_id_str))
        except ValueError:
            return web.json_response(ApiResponse(success=False, error="id must be an integer").to_dict(), status=400)

        with db_connection() as conn:
            success = delete_tag(conn, req.id)

        if success:
            return web.json_response(ApiResponse(success=True).to_dict())
        return web.json_response(ApiResponse(success=False, error="Tag not found").to_dict(), status=404)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/tags/rename")
async def tag_rename_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = RenameTagRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.id is None or not req.name:
            return web.json_response(ApiResponse(success=False, error="id and name are required").to_dict(), status=400)

        if req.name.lower() == RESERVED_TAG_KEYWORD:
            return web.json_response(
                ApiResponse(
                    success=False,
                    error=f"Tag name '{RESERVED_TAG_KEYWORD}' is reserved for search and cannot be used.",
                ).to_dict(),
                status=400,
            )

        with db_connection() as conn:
            success = rename_tag(conn, req.id, req.name)

        if success:
            return web.json_response(ApiResponse(success=True).to_dict())
        return web.json_response(
            ApiResponse(success=False, error="Failed to rename tag (maybe name already exists?)").to_dict(),
            status=400,
        )
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
