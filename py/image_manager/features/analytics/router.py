import logging
import threading

from aiohttp import web

from ...common.db.client import get_db_connection
from ...common.schemas import ApiResponse
from .service import CATEGORIES, get_category_list, get_summary, run_aggregation

routes = web.RouteTableDef()

# Guard to prevent concurrent analytics refresh
_refresh_lock = threading.Lock()
_refresh_running = False

MAX_LIMIT = 1000


@routes.post("/meld/analytics/refresh")
async def refresh_analytics(request: web.Request) -> web.Response:
    """Trigger background re-aggregation. Returns immediately."""
    global _refresh_running
    try:
        with _refresh_lock:
            if _refresh_running:
                return web.json_response(
                    ApiResponse(success=False, error="Analytics refresh already in progress").to_dict(),
                    status=400,
                )
            _refresh_running = True

        def _run() -> None:
            global _refresh_running
            try:
                run_aggregation()
            except Exception as e:
                logging.exception(f"[Meld] Analytics refresh failed: {e}")
            finally:
                with _refresh_lock:
                    _refresh_running = False

        threading.Thread(target=_run, daemon=True).start()
        return web.json_response(ApiResponse(success=True, message="Analytics refresh started in background").to_dict())
    except Exception as e:
        with _refresh_lock:
            _refresh_running = False
        logging.exception(f"[Meld] Failed to start analytics refresh: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/analytics")
async def get_analytics_summary(request: web.Request) -> web.Response:
    """Return summary: total_images + top 5 per category."""
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        try:
            data = get_summary(cursor)
            return web.json_response(ApiResponse(success=True, data=data).to_dict())
        finally:
            cursor.close()
    except Exception as e:
        logging.exception(f"[Meld] Failed to get analytics summary: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
    finally:
        if conn is not None:
            conn.close()


def _parse_limit_offset(request: web.Request) -> tuple[int, int] | None:
    """Parse and validate limit/offset from query. Returns (limit, offset) or None if invalid."""
    try:
        limit_raw = request.query.get("limit", "100")
        offset_raw = request.query.get("offset", "0")
        limit = int(limit_raw)
        offset = int(offset_raw)
    except ValueError:
        return None
    if offset < 0 or limit <= 0 or limit > MAX_LIMIT:
        return None
    return limit, offset


@routes.get("/meld/analytics/{category}")
async def get_analytics_category(request: web.Request) -> web.Response:
    """Return full list for a category with limit, offset, sort, q."""
    conn = None
    try:
        category = request.match_info["category"]
        if category not in CATEGORIES:
            return web.json_response(
                ApiResponse(success=False, error=f"Unknown category: {category}").to_dict(),
                status=404,
            )

        parsed = _parse_limit_offset(request)
        if parsed is None:
            return web.json_response(
                ApiResponse(
                    success=False,
                    error=f"Invalid limit/offset: offset must be >= 0, limit must be 1..{MAX_LIMIT}",
                ).to_dict(),
                status=400,
            )
        limit, offset = parsed

        sort = request.query.get("sort", "count_desc")
        q = request.query.get("q", "").strip() or None

        if sort not in ("count_desc", "count_asc"):
            sort = "count_desc"

        conn = get_db_connection()
        cursor = conn.cursor()
        try:
            items, total = get_category_list(cursor, category, limit=limit, offset=offset, sort=sort, q=q)
            return web.json_response(ApiResponse(success=True, data=items, count=len(items), total=total).to_dict())
        finally:
            cursor.close()
    except Exception as e:
        logging.exception(f"[Meld] Failed to get analytics category: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
    finally:
        if conn is not None:
            conn.close()
