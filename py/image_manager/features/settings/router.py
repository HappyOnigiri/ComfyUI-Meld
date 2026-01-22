import os

from aiohttp import web

from ...common.db.client import get_db_connection
from ...common.schemas import ApiResponse, UpdateSettingsRequest
from .repository import get_all_settings, upsert_setting

routes = web.RouteTableDef()


@routes.get("/meld/settings")
async def get_settings(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        db_settings = get_all_settings(cursor)
        conn.close()

        settings = {
            "dev_mode": os.environ.get("MELD_DEV") == "true",
            "gallery.show_parent_image": True,
            "gallery.show_parent_images": False,
            "gallery.trash_retention_days": 30,
            "sidebar.show_filename": "filename",
            "sidebar.show_dimensions": True,
            "sidebar.show_created_at": False,
            "sidebar.show_model_name": True,
            "sidebar.show_positive_prompt": True,
            "sidebar.show_negative_prompt": False,
            "sidebar.show_tags": True,
            "sidebar.thumbnail_size": 100,
            "viewer.details.max_positive_prompt_lines": 7,
            "viewer.details.max_negative_prompt_lines": 7,
            "viewer.show_icons": True,
            "viewer.small_image_mode": "fit",
            "fullscreen.small_image_mode": "fit",
            "gallery.matching_strategy": "phash_created",
            "gallery.lineage_max_depth": 5,
            "gallery.trash.show_missing": False,
            "gallery.view_mode": "grid_details",
            "gallery.suggest_phash_threshold": 82,
            "gallery.auto_link_phash_threshold": 92,
            "gallery.inherit_tags": True,
        }

        settings.update(db_settings)

        return web.json_response(ApiResponse(success=True, data=settings).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/settings")
async def save_settings(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = UpdateSettingsRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.key is None:
            return web.json_response(ApiResponse(success=False, error="key is required").to_dict(), status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        upsert_setting(cursor, req.key, req.value)
        conn.commit()
        conn.close()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
