import json
import logging
import os
from typing import Any

import folder_paths
from aiohttp import web
from PIL import Image

from ....common.db.client import db_connection
from ....common.exceptions import MeldError, ValidationError
from ....common.schemas import ApiResponse

routes = web.RouteTableDef()


def _get_image_path(img_type: str, subfolder: str, filename: str) -> str | None:
    if img_type == "output":
        base_dir = folder_paths.get_output_directory()
    elif img_type == "input":
        base_dir = folder_paths.get_input_directory()
    elif img_type == "temp":
        base_dir = folder_paths.get_temp_directory()
    elif img_type == "custom":
        # custom images must be within a known directory to prevent arbitrary file access
        get_custom = getattr(folder_paths, "get_custom_directory", None)
        if get_custom:
            base_dir = get_custom()
        else:
            base_dir = folder_paths.get_input_directory()
    else:
        return None

    if not base_dir:
        return None

    # Secure path resolution
    base_abs = os.path.abspath(base_dir)
    full_path = os.path.normpath(os.path.abspath(os.path.join(base_abs, subfolder, filename)))

    # Verify containment
    try:
        if os.path.commonpath([base_abs, full_path]) != base_abs:
            logging.warning(f"[Meld] Prevented suspicious file access: {full_path} outside of {base_abs}")
            return None
    except ValueError:
        return None

    return full_path


def _strip_png_metadata_fast(data: bytes) -> bytes | None:
    import io
    import struct

    if len(data) < 8 or data[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    out = io.BytesIO()
    out.write(data[:8])
    offset = 8
    saw_any_chunk = False
    saw_iend = False
    while offset + 8 <= len(data):
        chunk_length = struct.unpack(">I", data[offset : offset + 4])[0]
        chunk_type = data[offset + 4 : offset + 8]
        chunk_full_size = 12 + chunk_length
        if offset + chunk_full_size > len(data):
            return None
        saw_any_chunk = True
        if chunk_type == b"IEND":
            saw_iend = True
        if chunk_type not in (b"tEXt", b"zTXt", b"iTXt"):
            out.write(data[offset : offset + chunk_full_size])
        offset += chunk_full_size
    if not saw_any_chunk or not saw_iend:
        return None
    return out.getvalue()


def _strip_webp_metadata_fast(data: bytes) -> bytes | None:
    import io
    import struct

    if len(data) < 12 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        return None
    out = io.BytesIO()
    out.write(data[:12])
    offset = 12
    vp8x_pos = -1
    vp8x_data = bytearray()
    saw_any_chunk = False
    while offset + 8 <= len(data):
        chunk_id = data[offset : offset + 4]
        chunk_size = struct.unpack("<I", data[offset + 4 : offset + 8])[0]
        padding = chunk_size % 2
        chunk_full_size = 8 + chunk_size + padding
        if offset + chunk_full_size > len(data):
            return None
        saw_any_chunk = True
        chunk_data = data[offset : offset + chunk_full_size]
        if chunk_id in (b"EXIF", b"XMP "):
            pass  # skip metadata
        elif chunk_id == b"VP8X":
            vp8x_pos = out.tell()
            vp8x_data = bytearray(chunk_data)
            out.write(vp8x_data)
        else:
            out.write(chunk_data)
        offset += chunk_full_size
    total_size = out.tell()
    if not saw_any_chunk or total_size <= 12:
        return None
    if vp8x_pos != -1 and len(vp8x_data) >= 12:
        flags = struct.unpack("<I", vp8x_data[8:12])[0]
        flags &= ~8  # Unset EXIF
        flags &= ~4  # Unset XMP
        vp8x_data[8:12] = struct.pack("<I", flags)
        current_pos = out.tell()
        out.seek(vp8x_pos)
        out.write(vp8x_data)
        out.seek(current_pos)
    out.seek(4)
    out.write(struct.pack("<I", total_size - 8))
    return out.getvalue()


def _strip_metadata(image_path: str) -> bytes:
    import io

    try:
        with open(image_path, "rb") as f:
            data = f.read()

        if data.startswith(b"\x89PNG\r\n\x1a\n"):
            try:
                res = _strip_png_metadata_fast(data)
                if res is not None:
                    return res
            except Exception as e:
                logging.warning(f"[Meld] Fast PNG strip failed for {image_path}: {e}")

        if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
            try:
                res = _strip_webp_metadata_fast(data)
                if res is not None:
                    return res
            except Exception as e:
                logging.warning(f"[Meld] Fast WebP strip failed for {image_path}: {e}")

        # Fallback for JPEG or if fast paths fail
        with Image.open(io.BytesIO(data)) as img:
            # Paste into a new image to strip metadata
            clean_img = Image.new(img.mode, img.size)
            clean_img.paste(img)
            buffer = io.BytesIO()
            img_format = img.format or "PNG"

            if img_format.upper() in ["JPEG", "JPG"]:
                clean_img.save(buffer, format="JPEG", quality=95)
            elif img_format.upper() == "WEBP":
                clean_img.save(buffer, format="WEBP", lossless=True)
            else:
                clean_img.save(buffer, format="PNG")

            return buffer.getvalue()
    except Exception as e:
        logging.error(f"[Meld] Failed to process image {image_path}: {e}")
        raise ValidationError("Invalid image file") from e


# Resize filter name -> Pillow Resampling constant mapping
_RESAMPLING_FILTERS: dict[str, "Image.Resampling"] = {
    "lanczos": Image.Resampling.LANCZOS,
    "bicubic": Image.Resampling.BICUBIC,
    "bilinear": Image.Resampling.BILINEAR,
    "box": Image.Resampling.BOX,
    "hamming": Image.Resampling.HAMMING,
    "nearest": Image.Resampling.NEAREST,
}


def _process_image_for_download(
    image_path: str,
    remove_metadata: bool,
    resize_mode: str,
    resize_value: float,
    resize_filter: str = "lanczos",
) -> bytes:
    """Process image for download. If no resize or metadata removal is needed, read as-is.
    If resize is needed, use Pillow to resize while maintaining aspect ratio (no upscaling).
    Metadata is preserved or removed according to the remove_metadata flag.
    """
    import io

    from PIL.PngImagePlugin import PngInfo

    needs_resize = False
    if resize_mode == "percent" and 0 < resize_value < 100:
        needs_resize = True
    elif resize_mode == "max_edge" and resize_value > 0:
        needs_resize = True

    # If no resize needed, delegate to existing processing
    if not needs_resize:
        if remove_metadata:
            return _strip_metadata(image_path)
        with open(image_path, "rb") as f:
            return f.read()

    # Fall back to LANCZOS for unknown filter names
    resampling = _RESAMPLING_FILTERS.get(resize_filter, Image.Resampling.LANCZOS)

    # Resize needed: open with Pillow and process
    with Image.open(image_path) as img:
        orig_w, orig_h = img.size
        orig_format = img.format or "PNG"
        orig_info = dict(img.info)  # Copy metadata for preservation
        orig_mode = img.mode

        # Calculate new dimensions (maintain aspect ratio, no upscaling)
        if resize_mode == "percent":
            scale = resize_value / 100.0
            new_w = max(1, int(orig_w * scale))
            new_h = max(1, int(orig_h * scale))
        else:  # max_edge
            max_dim = int(resize_value)
            if orig_w <= max_dim and orig_h <= max_dim:
                # Already within max edge size, no resize needed
                if remove_metadata:
                    return _strip_metadata(image_path)
                with open(image_path, "rb") as f:
                    return f.read()
            if orig_w >= orig_h:
                scale = max_dim / orig_w
            else:
                scale = max_dim / orig_h
            new_w = max(1, int(orig_w * scale))
            new_h = max(1, int(orig_h * scale))

        resized = img.resize((new_w, new_h), resampling)

    buffer = io.BytesIO()
    fmt = orig_format.upper()

    if fmt in ("JPEG", "JPG"):
        if remove_metadata:
            resized.save(buffer, format="JPEG", quality=95)
        else:
            # Preserve metadata: reattach exif/icc_profile if available
            save_kwargs: dict[str, Any] = {"format": "JPEG", "quality": 95}
            if orig_info.get("exif"):
                save_kwargs["exif"] = orig_info["exif"]
            if orig_info.get("icc_profile"):
                save_kwargs["icc_profile"] = orig_info["icc_profile"]
            resized.save(buffer, **save_kwargs)
    elif fmt == "WEBP":
        if remove_metadata:
            resized.save(buffer, format="WEBP", lossless=(orig_mode not in ("RGB", "L")))
        else:
            # Preserve metadata: reattach exif/xmp/icc_profile if available
            save_kwargs = {"format": "WEBP", "lossless": (orig_mode not in ("RGB", "L"))}
            if orig_info.get("exif"):
                save_kwargs["exif"] = orig_info["exif"]
            if orig_info.get("xmp"):
                save_kwargs["xmp"] = orig_info["xmp"]
            if orig_info.get("icc_profile"):
                save_kwargs["icc_profile"] = orig_info["icc_profile"]
            resized.save(buffer, **save_kwargs)
    else:
        # PNG: re-apply metadata via PngInfo when preserving metadata
        if remove_metadata:
            resized.save(buffer, format="PNG")
        else:
            pnginfo = PngInfo()
            for k, v in orig_info.items():
                key = str(k)
                if isinstance(v, str):
                    pnginfo.add_text(key, v)
                elif isinstance(v, bytes):
                    try:
                        pnginfo.add_text(key, v.decode("latin-1"))
                    except Exception:
                        pass
            resized.save(buffer, format="PNG", pnginfo=pnginfo)

    return buffer.getvalue()


@routes.post("/meld/download/zip")
async def download_zip(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_ids = data.get("imageIds", [])
        remove_metadata = data.get("removeMetadata", False)
        resize_mode = str(data.get("resizeMode", "none"))  # "none" | "percent" | "max_edge"
        resize_filter = str(data.get("resizeFilter", "lanczos"))
        try:
            resize_value = float(data.get("resizeValue", 100))
        except (TypeError, ValueError):
            return web.json_response(
                ApiResponse(success=False, error="resizeValue must be a valid number").to_dict(), status=400
            )

        if not image_ids:
            return web.json_response(ApiResponse(success=False, error="No image IDs provided").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            placeholders = ",".join(["?"] * len(image_ids))
            cursor.execute(f"SELECT id, filename, subfolder, type FROM images WHERE id IN ({placeholders})", image_ids)
            rows = cursor.fetchall()

        import io
        import zipfile

        zip_buffer = io.BytesIO()

        ALLOWED_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")
        with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zf:
            for _img_id, filename, subfolder, img_type in rows:
                if not filename.lower().endswith(ALLOWED_EXTENSIONS):
                    continue

                path = _get_image_path(img_type, subfolder, filename)
                if path and os.path.exists(path):
                    try:
                        img_bytes = _process_image_for_download(
                            path, remove_metadata, resize_mode, resize_value, resize_filter
                        )
                        zf.writestr(filename, img_bytes)
                    except Exception:
                        logging.warning(f"[Meld] Skipping invalid or corrupted image in zip: {path}")
                        continue

        zip_buffer.seek(0)
        return web.Response(
            body=zip_buffer.read(),
            content_type="application/zip",
            headers={"Content-Disposition": 'attachment; filename="meld_images.zip"'},
        )
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] MeldError in download_zip")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)


@routes.post("/meld/download/raw")
async def download_raw(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        image_id = data.get("imageId")
        remove_metadata = data.get("removeMetadata", False)
        resize_mode = str(data.get("resizeMode", "none"))  # "none" | "percent" | "max_edge"
        resize_filter = str(data.get("resizeFilter", "lanczos"))
        try:
            resize_value = float(data.get("resizeValue", 100))
        except (TypeError, ValueError):
            return web.json_response(
                ApiResponse(success=False, error="resizeValue must be a valid number").to_dict(), status=400
            )

        if not image_id:
            return web.json_response(ApiResponse(success=False, error="No image ID provided").to_dict(), status=400)

        with db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT filename, subfolder, type FROM images WHERE id = ?", (image_id,))
            row = cursor.fetchone()

        if not row:
            return web.json_response(ApiResponse(success=False, error="Image not found").to_dict(), status=404)

        filename, subfolder, img_type = row
        ALLOWED_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")
        if not filename.lower().endswith(ALLOWED_EXTENSIONS):
            return web.json_response(ApiResponse(success=False, error="Disallowed file type").to_dict(), status=400)

        path = _get_image_path(img_type, subfolder, filename)

        if not path or not os.path.exists(path):
            return web.json_response(ApiResponse(success=False, error="File not found on disk").to_dict(), status=404)

        try:
            img_bytes = _process_image_for_download(path, remove_metadata, resize_mode, resize_value, resize_filter)
        except Exception as e:
            return web.json_response(ApiResponse(success=False, error=f"Invalid image file: {e}").to_dict(), status=400)

        content_type = "image/png"
        if filename.lower().endswith((".jpg", ".jpeg")):
            content_type = "image/jpeg"
        elif filename.lower().endswith(".webp"):
            content_type = "image/webp"

        headers = {"Content-Disposition": f'attachment; filename="{filename}"'}
        return web.Response(body=img_bytes, content_type=content_type, headers=headers)
    except json.JSONDecodeError:
        return web.json_response(ApiResponse(success=False, error="Malformed JSON").to_dict(), status=400)
    except MeldError as e:
        logging.exception("[Meld] MeldError in download_raw")
        return web.json_response(ApiResponse(success=False, error=str(e)).to_dict(), status=e.status_code)
