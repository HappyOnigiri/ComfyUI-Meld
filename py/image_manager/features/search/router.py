import time

from aiohttp import web

from ...common.db.client import db_connection
from ...common.schemas import (
    ApiResponse,
    CreateFavoriteRequest,
    DeleteFavoriteRequest,
    FavoriteRecord,
    UpdateFavoriteRequest,
)
from .service import SearchService

routes = web.RouteTableDef()


@routes.get("/meld/suggest")
async def suggest_endpoint(request: web.Request) -> web.Response:
    try:
        query = request.query.get("query", "")
        prefix = request.query.get("type", None)

        with db_connection() as conn:
            cursor = conn.cursor()
            suggestions = SearchService.get_suggestions(cursor, query, prefix_filter=prefix)

        return web.json_response(ApiResponse(success=True, data=suggestions).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/search-suggestions")
async def search_suggestions_endpoint(request: web.Request) -> web.Response:
    try:
        with db_connection() as conn:
            cursor = conn.cursor()
            suggestions = SearchService.get_random_search_suggestions(cursor)

        return web.json_response(ApiResponse(success=True, data=suggestions).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/search-keywords")
async def search_keywords_endpoint(request: web.Request) -> web.Response:
    try:
        keywords = SearchService.get_all_available_keywords()
        return web.json_response(ApiResponse(success=True, data=keywords).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/search-config")
async def search_config_endpoint(request: web.Request) -> web.Response:
    try:
        config = SearchService.get_search_config()
        return web.json_response(ApiResponse(success=True, data=config).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.get("/meld/favorites")
async def list_favorites(request: web.Request) -> web.Response:
    try:
        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, name, query, created_at FROM favorites ORDER BY created_at DESC")
            rows = cursor.fetchall()

        favorites = [FavoriteRecord(id=row[0], name=row[1], query=row[2], created_at=row[3]).to_dict() for row in rows]

        return web.json_response(ApiResponse(success=True, data=favorites).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/favorites")
async def save_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = CreateFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.query:
            return web.json_response(ApiResponse(success=False, error="query is required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO favorites (name, query, created_at) VALUES (?, ?, ?)", (req.name, req.query, time.time())
            )
            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/favorites/update")
async def update_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = UpdateFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.id is None or req.name is None:
            return web.json_response(ApiResponse(success=False, error="id and name are required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            if req.query:
                cursor.execute("UPDATE favorites SET name = ?, query = ? WHERE id = ?", (req.name, req.query, req.id))
            else:
                cursor.execute("UPDATE favorites SET name = ? WHERE id = ?", (req.name, req.id))
            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/favorites/delete")
async def delete_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = DeleteFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if req.id is None:
            return web.json_response(ApiResponse(success=False, error="id is required").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM favorites WHERE id = ?", (req.id,))
            conn.commit()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
