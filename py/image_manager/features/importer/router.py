import asyncio
import logging
import os

import folder_paths
from aiohttp import web

from ...common.schemas import (
    ApiResponse,
    FolderItem,
    FolderMetadata,
    FolderPreview,
    FoldersResponse,
    ImageItem,
    ScanRequest,
)
from .service import (
    cancel_scan,
    count_images_recursive,
    get_first_image_recursive,
    get_scan_state,
    perform_cleanup,
    start_scan_thread,
)

routes = web.RouteTableDef()


@routes.post("/meld/cleanup")
async def cleanup_endpoint(request: web.Request) -> web.Response:
    try:
        count = perform_cleanup()
        return web.json_response({"success": True, "count": count})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/folders")
async def list_folders(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        fast = request.query.get("fast", "false").lower() == "true"
        logging.info(f"[Meld] GET /meld/folders type={base_type} path={path} fast={fast}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""  # Absolute path mode

        target_path = os.path.abspath(os.path.join(base_dir, path))

        if not os.path.exists(target_path):
            return web.json_response({"folders": [], "images": [], "image_count": 0})

        if not os.path.isdir(target_path):
            return web.json_response({"error": "Not a directory"}, status=400)

        folders: list[FolderItem] = []
        images: list[ImageItem] = []
        total_recursive_count = 0

        try:
            # Run blocking IO in a separate thread to avoid blocking the event loop
            loop = asyncio.get_event_loop()
            items = await loop.run_in_executor(None, os.listdir, target_path)

            for item in items:
                full_item_path = os.path.join(target_path, item)
                if await loop.run_in_executor(None, os.path.isdir, full_item_path):
                    if fast:
                        folders.append(FolderItem(name=item, count=None, preview=None))
                    else:
                        # Recursive count for subfolder
                        sub_count = await loop.run_in_executor(None, count_images_recursive, full_item_path)

                        # Get sample image for preview
                        preview = None
                        sample_img_path = await loop.run_in_executor(None, get_first_image_recursive, full_item_path)
                        if sample_img_path:
                            if base_dir:
                                rel_path = os.path.relpath(sample_img_path, base_dir)
                                filename = os.path.basename(rel_path)
                                subfolder = os.path.dirname(rel_path).replace("\\", "/")
                                preview = FolderPreview(
                                    filename=filename,
                                    subfolder=subfolder,
                                    type=base_type,
                                )
                            else:
                                # Custom path mode
                                preview = FolderPreview(
                                    filename=os.path.basename(sample_img_path),
                                    subfolder=os.path.dirname(sample_img_path).replace("\\", "/"),
                                    type=base_type,
                                )

                        folders.append(FolderItem(name=item, count=sub_count, preview=preview))
                elif item.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    if base_dir:
                        images.append(
                            ImageItem(
                                filename=item,
                                subfolder=path.replace("\\", "/"),
                                type=base_type,
                            )
                        )
                    else:
                        # Custom path mode
                        images.append(
                            ImageItem(
                                filename=item,
                                subfolder=target_path.replace("\\", "/"),
                                type=base_type,
                            )
                        )

            # The top-level 'image_count' should also be recursive if it includes subdirectories.
            if not fast:
                total_recursive_count = await loop.run_in_executor(None, count_images_recursive, target_path)
            else:
                total_recursive_count = len(images)

        except PermissionError:
            return web.json_response({"error": "Permission denied"}, status=403)

        folders.sort(key=lambda x: x.name.lower())
        images.sort(key=lambda x: x.filename.lower())

        response = FoldersResponse(
            folders=folders,
            images=images,
            image_count=total_recursive_count,
        )
        return web.json_response(response.to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/folder-metadata")
async def get_folder_metadata_endpoint(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        folder_names = request.query.get("folders", "").split(",")
        logging.info(f"[Meld] GET /meld/folder-metadata type={base_type} path={path} folders={folder_names}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""  # Absolute path mode

        target_path = os.path.abspath(os.path.join(base_dir, path))

        results = {}
        loop = asyncio.get_event_loop()
        for name in folder_names:
            if not name:
                continue
            full_item_path = os.path.join(target_path, name)
            if await loop.run_in_executor(None, os.path.isdir, full_item_path):
                sub_count = await loop.run_in_executor(None, count_images_recursive, full_item_path)
                preview = None
                sample_img_path = await loop.run_in_executor(None, get_first_image_recursive, full_item_path)
                if sample_img_path:
                    if base_dir:
                        rel_path = os.path.relpath(sample_img_path, base_dir)
                        filename = os.path.basename(rel_path)
                        subfolder = os.path.dirname(rel_path).replace("\\", "/")
                        preview = FolderPreview(
                            filename=filename,
                            subfolder=subfolder,
                            type=base_type,
                        )
                    else:
                        # Custom path mode
                        preview = FolderPreview(
                            filename=os.path.basename(sample_img_path),
                            subfolder=os.path.dirname(sample_img_path).replace("\\", "/"),
                            type=base_type,
                        )
                results[name] = FolderMetadata(count=sub_count, preview=preview).to_dict()

        return web.json_response(results)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/meld/path-image-count")
async def get_path_image_count(request: web.Request) -> web.Response:
    try:
        path = request.query.get("path", "")
        base_type = request.query.get("type", "output")
        logging.info(f"[Meld] GET /meld/path-image-count type={base_type} path={path}")

        if base_type == "output":
            base_dir = folder_paths.get_output_directory()
        elif base_type == "input":
            base_dir = folder_paths.get_input_directory()
        else:
            base_dir = ""

        target_path = os.path.abspath(os.path.join(base_dir, path))
        loop = asyncio.get_event_loop()
        if await loop.run_in_executor(None, os.path.isdir, target_path):
            count = await loop.run_in_executor(None, count_images_recursive, target_path)
            return web.json_response(ApiResponse(success=True, count=count).to_dict())
        return web.json_response(ApiResponse(success=True, count=0).to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/scan")
async def start_scan(request: web.Request) -> web.Response:
    if get_scan_state().is_running:
        return web.json_response({"error": "Scan already running"}, status=400)

    try:
        data = await request.json()
        try:
            req = ScanRequest.from_dict(data)
        except (TypeError, ValueError) as e:
            return web.json_response({"error": f"Invalid schema: {e}"}, status=400)

        base_dir = ""

        if req.type == "output":
            base_dir = folder_paths.get_output_directory()
            target_base = os.path.join(base_dir, req.subfolder)
        elif req.type == "input":
            base_dir = folder_paths.get_input_directory()
            target_base = os.path.join(base_dir, req.subfolder)
        elif req.type == "custom":
            if not req.custom_path:
                return web.json_response({"error": "Custom path is required"}, status=400)
            target_base = req.custom_path
        else:
            return web.json_response({"error": "Invalid type"}, status=400)

        target_base = os.path.abspath(target_base)
        if not os.path.exists(target_base):
            return web.json_response({"error": f"Path does not exist: {target_base}"}, status=404)

        # In custom mode, base_dir for relative path calculation should be the target itself
        calc_base = target_base if req.type == "custom" else base_dir

        start_scan_thread(
            calc_base,
            req.subfolder if req.type != "custom" else "",
            req.type,
            req.recursive,
            req.auto_link_parent,
            req.tags,
            req.link_strategy,
        )

        return web.json_response(ApiResponse(success=True, message="started").to_dict())
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/meld/scan/cancel")
async def cancel_scan_endpoint(request: web.Request) -> web.Response:
    cancel_scan()
    return web.json_response({"status": "cancelling"})


@routes.get("/meld/scan/status")
async def get_scan_status(request: web.Request) -> web.Response:
    state = get_scan_state()
    return web.json_response(state.to_dict())
