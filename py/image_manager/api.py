import logging
import os
import threading

import server
from aiohttp import web

from .common.db.runtime_state import set_startup_cleanup_running
from .common.schemas import ApiResponse
from .features.analytics.router import routes as analytics_routes
from .features.databases.router import routes as database_routes
from .features.images.router import routes as image_routes
from .features.importer.router import routes as import_routes
from .features.importer.service import perform_cleanup
from .features.search.router import routes as search_routes
from .features.settings.router import routes as setting_routes
from .features.tags.router import routes as tag_routes
from .features.workflows.router import routes as workflow_routes

# Register all routes to ComfyUI
utility_routes = web.RouteTableDef()


def _register_routes(source_routes: web.RouteTableDef) -> None:
    for r in source_routes:
        if isinstance(r, web.RouteDef):
            # RouteTableDef.route() returns a decorator, which we call immediately
            server.PromptServer.instance.routes.route(r.method, r.path, **r.kwargs)(r.handler)


# Common/Utility routes
@utility_routes.get("/meld/home-dir")
async def get_home_dir(request: web.Request) -> web.Response:
    try:
        home_dir = os.path.expanduser("~")
        return web.json_response(ApiResponse(success=True, data={"home": home_dir}).to_dict())
    except Exception as e:
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=500)


@utility_routes.get("/meld/test")
async def test_endpoint(request: web.Request) -> web.Response:
    return web.json_response(ApiResponse(success=True, message="Meld is running", data={"status": "ok"}).to_dict())


if server.PromptServer.instance is not None:
    _register_routes(analytics_routes)
    _register_routes(tag_routes)
    _register_routes(workflow_routes)
    _register_routes(import_routes)
    _register_routes(search_routes)
    _register_routes(image_routes)
    _register_routes(database_routes)
    _register_routes(setting_routes)
    _register_routes(utility_routes)
else:
    logging.warning("[Meld] PromptServer instance not found. API routes could not be registered.")


# --- Automatic cleanup (at extension load time) ---
# Synchronization: analytics aggregation waits for cleanup to finish before running.
_cleanup_done_event = threading.Event()


def _run_auto_cleanup() -> None:
    """Run cleanup in the background"""
    import time

    time.sleep(5)  # Wait a bit to prioritize other initialization tasks
    set_startup_cleanup_running(True)
    try:
        count = perform_cleanup()
        if count > 0:
            logging.info(f"[Meld] Extension load cleanup: Removed {count} missing images from database.")
    except Exception as e:
        logging.warning(f"[Meld] Extension load cleanup failed: {e}")
    finally:
        set_startup_cleanup_running(False)
        _cleanup_done_event.set()


def _run_analytics_aggregation() -> None:
    """Run analytics aggregation in the background. Waits for cleanup to complete first."""
    from .features.analytics.service import run_aggregation

    if not _cleanup_done_event.wait(timeout=60):
        logging.warning("[Meld] Analytics aggregation: cleanup did not complete within 60s, proceeding anyway.")
    try:
        run_aggregation()
    except Exception as e:
        logging.warning(f"[Meld] Analytics aggregation failed: {e}")


threading.Thread(target=_run_auto_cleanup, daemon=True).start()
threading.Thread(target=_run_analytics_aggregation, daemon=True).start()
