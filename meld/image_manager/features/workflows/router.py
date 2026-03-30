import logging

from aiohttp import web

from ...common.exceptions import MeldError
from ...common.schemas import ApiResponse
from .service import get_workflow_raw, list_workflows

routes = web.RouteTableDef()


@routes.get("/meld/workflows")
async def get_workflows_endpoint(request: web.Request) -> web.Response:
    try:
        workflows = list_workflows()
        return web.json_response(ApiResponse(success=True, data=workflows).to_dict())
    except MeldError as e:
        logging.error(f"[Meld] GET /meld/workflows failed: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.get("/meld/workflow/raw")
async def get_workflow_raw_endpoint(request: web.Request) -> web.Response:
    try:
        name = request.query.get("name")
        if not name:
            return web.json_response(ApiResponse(success=False, error="Missing 'name' parameter").to_dict(), status=400)

        workflow = get_workflow_raw(name)
        if workflow is None:
            return web.json_response(
                ApiResponse(success=False, error=f"Workflow '{name}' not found").to_dict(), status=404
            )

        return web.json_response(ApiResponse(success=True, data=workflow).to_dict())
    except MeldError as e:
        logging.error(f"[Meld] GET /meld/workflow/raw failed: {e}")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)
