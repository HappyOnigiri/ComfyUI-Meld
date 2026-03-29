from aiohttp import web

from ...common.schemas import (
    ApiResponse,
    CreateDatabaseRequest,
    DeleteDatabaseRequest,
    RenameDatabaseRequest,
    SwitchDatabaseRequest,
)
from .service import (
    create_database_and_get_payload,
    delete_database_and_get_payload,
    get_database_payload,
    rename_database_and_get_payload,
    switch_database_and_get_payload,
)

routes = web.RouteTableDef()


@routes.get("/meld/databases")
async def get_databases(request: web.Request) -> web.Response:
    try:
        return web.json_response(ApiResponse(success=True, data=get_database_payload()).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/databases")
async def create_database_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = CreateDatabaseRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.name:
            return web.json_response(ApiResponse(success=False, error="name is required").to_dict(), status=400)

        payload = create_database_and_get_payload(req.name, req.switch_to_new)
        return web.json_response(ApiResponse(success=True, data=payload).to_dict())
    except FileExistsError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=409)
    except RuntimeError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=409)
    except ValueError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=400)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/databases/switch")
async def switch_database_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = SwitchDatabaseRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.name:
            return web.json_response(ApiResponse(success=False, error="name is required").to_dict(), status=400)

        payload = switch_database_and_get_payload(req.name)
        return web.json_response(ApiResponse(success=True, data=payload).to_dict())
    except FileNotFoundError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=404)
    except RuntimeError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=409)
    except ValueError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=400)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/databases/delete")
async def delete_database_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = DeleteDatabaseRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.name:
            return web.json_response(ApiResponse(success=False, error="name is required").to_dict(), status=400)
        if req.confirm_text != "delete":
            return web.json_response(
                ApiResponse(success=False, error='confirm_text must be exactly "delete"').to_dict(),
                status=400,
            )

        payload = delete_database_and_get_payload(req.name)
        return web.json_response(ApiResponse(success=True, data=payload).to_dict())
    except FileNotFoundError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=404)
    except RuntimeError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=409)
    except ValueError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=400)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@routes.post("/meld/databases/rename")
async def rename_database_endpoint(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        try:
            req = RenameDatabaseRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid schema: {e}").to_dict(), status=400)

        if not req.name:
            return web.json_response(ApiResponse(success=False, error="name is required").to_dict(), status=400)
        if not req.new_name:
            return web.json_response(ApiResponse(success=False, error="new_name is required").to_dict(), status=400)

        payload = rename_database_and_get_payload(req.name, req.new_name)
        return web.json_response(ApiResponse(success=True, data=payload).to_dict())
    except FileNotFoundError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=404)
    except (FileExistsError, RuntimeError) as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=409)
    except ValueError as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=400)
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)
