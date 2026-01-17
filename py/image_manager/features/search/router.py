import time

from aiohttp import web

from ...common.db.client import get_db_connection
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

        conn = get_db_connection()
        cursor = conn.cursor()
        suggestions = SearchService.get_suggestions(cursor, query, prefix_filter=prefix)
        conn.close()

        return web.json_response(suggestions)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/search-suggestions")
async def search_suggestions_endpoint(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        suggestions = SearchService.get_random_search_suggestions(cursor)
        conn.close()

        return web.json_response(suggestions)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/favorites")
async def list_favorites(request: web.Request) -> web.Response:
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, query, created_at FROM favorites ORDER BY created_at DESC")
        rows = cursor.fetchall()
        conn.close()

        favorites = [FavoriteRecord(id=row[0], name=row[1], query=row[2], created_at=row[3]).to_dict() for row in rows]

        return web.json_response(favorites)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/favorites")
async def save_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = CreateFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if not req.query:
            return web.json_response({"error": "query is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO favorites (name, query, created_at) VALUES (?, ?, ?)", (req.name, req.query, time.time())
        )
        conn.commit()
        conn.close()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/favorites/update")
async def update_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = UpdateFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if req.id is None or req.name is None:
            return web.json_response({"error": "id and name are required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        if req.query:
            cursor.execute("UPDATE favorites SET name = ?, query = ? WHERE id = ?", (req.name, req.query, req.id))
        else:
            cursor.execute("UPDATE favorites SET name = ? WHERE id = ?", (req.name, req.id))
        conn.commit()
        conn.close()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/favorites/delete")
async def delete_favorite(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = DeleteFavoriteRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        if req.id is None:
            return web.json_response({"error": "id is required"}, status=400)

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM favorites WHERE id = ?", (req.id,))
        conn.commit()
        conn.close()

        return web.json_response(ApiResponse(success=True).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)
