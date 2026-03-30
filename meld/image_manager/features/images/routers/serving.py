import asyncio
import hashlib
import logging
import os
import uuid
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass

import folder_paths
from aiohttp import web
from PIL import Image

from ....common.db.client import get_thumbnail_cache_dir, get_trash_dir
from ....common.exceptions import MeldError
from ....common.schemas import ApiResponse

routes = web.RouteTableDef()

_thumb_executor: ThreadPoolExecutor | None = None


def _get_thumb_executor() -> ThreadPoolExecutor:
    """Lazy-init module-level executor for thumbnail generation."""
    global _thumb_executor
    if _thumb_executor is None:
        _thumb_executor = ThreadPoolExecutor(max_workers=4, thread_name_prefix="meld-thumb")
    return _thumb_executor


def _generate_thumbnail(source_path: str, cache_path: str, size: int) -> None:
    """
    Synchronous helper to generate a thumbnail. Must run off the event loop.
    Uses an atomic write to prevent race conditions.
    """
    # Create a unique temporary path in the same directory for atomic rename
    temp_path = f"{cache_path}.{uuid.uuid4().hex}.tmp"

    try:
        with Image.open(source_path) as img:
            img.load()
            img.thumbnail((size, size), Image.Resampling.LANCZOS)
            img.save(temp_path, "WEBP", quality=85)

        # os.replace is atomic and works across most platforms if on the same filesystem
        os.replace(temp_path, cache_path)
    except Exception:
        # Cleanup temporary file if something went wrong
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except OSError:
                pass
        raise


@dataclass(frozen=True)
class ResolveError:
    """Structured error from _resolve_image_path_for_thumb."""

    status_code: int
    message: str


def _resolve_image_path_for_thumb(
    filename: str,
    subfolder: str,
    img_type: str,
) -> tuple[str | None, ResolveError | None]:
    """
    Resolve image path for thumbnail generation.
    Returns (absolute_path, resolve_error).
    If resolve_error is not None, absolute_path is None and caller should use
    resolve_error.status_code and resolve_error.message for the response.
    """
    if not filename or not img_type:
        return (None, ResolveError(400, "filename and type are required"))

    # Security: prevent path traversal
    if filename[0] == "/" or ".." in filename:
        return (None, ResolveError(400, "invalid filename"))

    filename = os.path.basename(filename)

    base_dir: str | None = None
    effective_subfolder = ""

    if img_type == "trash":
        base_dir = get_trash_dir()
        effective_subfolder = ""
    elif img_type == "output":
        base_dir = folder_paths.get_output_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "input":
        base_dir = folder_paths.get_input_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "temp":
        base_dir = folder_paths.get_temp_directory()
        effective_subfolder = subfolder or ""
    elif img_type == "custom":
        # subfolder for custom type is the full directory path (stored by importer).
        # Verify it is under a trusted base to prevent path traversal.
        if subfolder is None or subfolder == "":
            return (None, ResolveError(400, "subfolder is required for custom type"))
        full_path = os.path.normpath(os.path.abspath(os.path.join(subfolder, filename)))
        dir_path = os.path.dirname(full_path)
        dir_abs = os.path.abspath(dir_path)
        # Allowed roots: ComfyUI dirs and custom if available
        allowed_roots: list[str] = []
        for d in (
            folder_paths.get_output_directory(),
            folder_paths.get_input_directory(),
            folder_paths.get_temp_directory(),
            get_trash_dir(),
        ):
            if d:
                allowed_roots.append(os.path.abspath(d))
        get_custom = getattr(folder_paths, "get_custom_directory", None)
        if get_custom:
            custom_dir = get_custom()
            if custom_dir:
                allowed_roots.append(os.path.abspath(custom_dir))
        if not allowed_roots:
            return (None, ResolveError(400, "base directory not configured"))
        under_allowed = False
        for base_abs in allowed_roots:
            try:
                if os.path.commonpath([base_abs, dir_abs]) == base_abs:
                    under_allowed = True
                    break
            except ValueError:
                continue
        if not under_allowed:
            return (None, ResolveError(403, "path traversal detected"))
        if not os.path.isfile(full_path):
            return (None, ResolveError(404, "file not found"))
        if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            return (None, ResolveError(400, "unsupported format"))
        return (full_path, None)
    else:
        return (None, ResolveError(400, f"invalid type: {img_type}"))

    if base_dir is None:
        return (None, ResolveError(400, "base directory not configured"))

    full_path = os.path.normpath(os.path.abspath(os.path.join(base_dir, effective_subfolder, filename)))
    base_abs = os.path.abspath(base_dir)
    try:
        if os.path.commonpath([base_abs, full_path]) != base_abs:
            return (None, ResolveError(403, "path traversal detected"))
    except ValueError:
        return (None, ResolveError(403, "path traversal detected"))

    if not os.path.isfile(full_path):
        return (None, ResolveError(404, "file not found"))

    if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
        return (None, ResolveError(400, "unsupported format"))

    return (full_path, None)


@routes.get("/meld/view-thumb")
async def view_thumb_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        subfolder = request.query.get("subfolder") or ""
        img_type = request.query.get("type", "output")
        size_param = request.query.get("size", "200")
        try:
            size = min(400, max(1, int(size_param)))
        except ValueError:
            size = 200

        resolved, err = _resolve_image_path_for_thumb(filename or "", subfolder, img_type)
        if err is not None:
            return web.Response(status=err.status_code, text=err.message)

        if resolved is None:
            return web.Response(status=400, text="path resolution failed")

        source_path = resolved

        thumb_dir = get_thumbnail_cache_dir()
        os.makedirs(thumb_dir, exist_ok=True)
        cache_key = hashlib.sha256(f"{source_path}_{size}".encode()).hexdigest()
        cache_path = os.path.join(thumb_dir, f"{cache_key}.webp")

        cache_hit = False
        if os.path.exists(cache_path):
            try:
                if os.path.getmtime(source_path) <= os.path.getmtime(cache_path):
                    cache_hit = True
            except OSError:
                pass

        if not cache_hit:
            loop = asyncio.get_running_loop()
            await loop.run_in_executor(
                _get_thumb_executor(),
                _generate_thumbnail,
                source_path,
                cache_path,
                size,
            )

        response = web.FileResponse(
            cache_path,
            headers={"Cache-Control": "public, max-age=86400"},
        )
        return response
    except Exception as e:
        logging.exception("[Meld] Error in view_thumb: %s", e)
        return web.Response(status=500, text="Internal server error")


@routes.post("/meld/clear-thumbnail-cache")
async def clear_thumbnail_cache_endpoint(request: web.Request) -> web.Response:
    try:
        deleted_count = 0
        thumb_dir = get_thumbnail_cache_dir()
        if os.path.isdir(thumb_dir):
            for name in os.listdir(thumb_dir):
                if name.lower().endswith(".webp"):
                    fp = os.path.join(thumb_dir, name)
                    try:
                        os.remove(fp)
                        deleted_count += 1
                    except OSError as e:
                        logging.warning("[Meld] Failed to remove cache file %s: %s", fp, e)
        return web.json_response(ApiResponse(success=True, data={"deleted_count": deleted_count}).to_dict())
    except MeldError as e:
        logging.exception("[Meld] Error in clear_thumbnail_cache: %s", e)
        return web.json_response(
            ApiResponse(success=False, error=str(e)).to_dict(),
            status=e.status_code,
        )


@routes.get("/meld/view-trash")
async def view_trash_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        if not filename:
            return web.Response(status=400)

        if os.path.basename(filename) != filename:
            return web.Response(status=403)

        file_path = os.path.normpath(os.path.join(get_trash_dir(), filename))
        if not os.path.exists(file_path):
            return web.Response(status=404)

        return web.FileResponse(file_path)
    except Exception as e:
        logging.error(f"[Meld] Error in view_trash: {e}")
        return web.Response(status=500)


@routes.get("/meld/view-custom")
async def view_custom_endpoint(request: web.Request) -> web.StreamResponse:
    try:
        filename = request.query.get("filename")
        subfolder = request.query.get("subfolder")
        if not filename or subfolder is None:
            return web.Response(status=400)

        file_path = os.path.normpath(os.path.join(subfolder, filename))
        if not os.path.exists(file_path):
            return web.Response(status=404)

        if not filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            return web.Response(status=403)

        return web.FileResponse(file_path)
    except Exception as e:
        logging.error(f"[Meld] Error in view_custom: {e}")
        return web.Response(status=500)
