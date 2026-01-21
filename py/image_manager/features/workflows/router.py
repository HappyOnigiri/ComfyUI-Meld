import logging

from aiohttp import web

from .service import get_workflow_raw, list_workflows

routes = web.RouteTableDef()


@routes.get("/meld/workflows")
async def get_workflows_endpoint(request: web.Request) -> web.Response:
    try:
        workflows = list_workflows()
        return web.json_response(workflows)
    except Exception as e:
        logging.error(f"[Meld] GET /meld/workflows failed: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/workflow/raw")
async def get_workflow_raw_endpoint(request: web.Request) -> web.Response:
    try:
        name = request.query.get("name")
        if not name:
            return web.json_response({"error": "Missing 'name' parameter"}, status=400)

        workflow = get_workflow_raw(name)
        if workflow is None:
            return web.json_response({"error": f"Workflow '{name}' not found"}, status=404)

        return web.json_response(workflow)
    except Exception as e:
        logging.error(f"[Meld] GET /meld/workflow/raw failed: {e}")
        return web.json_response({"error": str(e)}, status=500)
