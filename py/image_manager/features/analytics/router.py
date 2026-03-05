import logging

from aiohttp import web

from ...common.db.client import get_db_connection
from ...common.schemas import ApiResponse
from .service import CATEGORIES, get_category_list, get_summary, run_aggregation

routes = web.RouteTableDef()


@routes.post("/meld/analytics/refresh")
async def refresh_analytics(request: web.Request) -> web.Response:
    """Trigger background re-aggregation. Returns immediately."""
    try:
        import threading

        def _run() -> None:
            try:
                run_aggregation()
            except Exception as e:
                logging.exception(f"[Meld] Analytics refresh failed: {e}")

        threading.Thread(target=_run, daemon=True).start()
        return web.json_response(ApiResponse(success=True, message="Analytics refresh started in background").to_dict())
    except Exception as e:
        logging.exception(f"[Meld] Failed to start analytics refresh: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/analytics")
async def get_analytics_summary(request: web.Request) -> web.Response:
    """Return summary: total_images + top 5 per category."""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        data = get_summary(cursor)
        conn.close()
        return web.json_response(ApiResponse(success=True, data=data).to_dict())
    except Exception as e:
        logging.exception(f"[Meld] Failed to get analytics summary: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/analytics/{category}")
async def get_analytics_category(request: web.Request) -> web.Response:
    """Return full list for a category with limit, offset, sort, q."""
    try:
        category = request.match_info["category"]
        if category not in CATEGORIES:
            return web.json_response(
                ApiResponse(success=False, error=f"Unknown category: {category}").to_dict(),
                status=400,
            )

        limit = int(request.query.get("limit", 100))
        offset = int(request.query.get("offset", 0))
        sort = request.query.get("sort", "count_desc")
        q = request.query.get("q", "").strip() or None

        if sort not in ("count_desc", "count_asc"):
            sort = "count_desc"

        conn = get_db_connection()
        cursor = conn.cursor()
        items, total = get_category_list(cursor, category, limit=limit, offset=offset, sort=sort, q=q)
        conn.close()

        return web.json_response(ApiResponse(success=True, data=items, count=len(items), total=total).to_dict())
    except ValueError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=400)
    except Exception as e:
        logging.exception(f"[Meld] Failed to get analytics category: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
