"""Shared image processing pipeline for Meld loader nodes.

This module contains process_image_metadata(), which encapsulates the common
metadata-extraction -> parameter-cascade -> checkpoint-loading -> output-building
pipeline used by both MeldImageLoader (single) and MeldImageLoaderBatch.
"""

from typing import Any

import torch
from typing_extensions import TypedDict

from .metadata_helper import MetadataHelper


class ImageProcessingResult(TypedDict):
    positive: str
    negative: str
    model: Any
    clip: Any
    vae: Any
    summary: str
    base_settings: dict[str, Any]


def process_image_metadata(
    image_path: str,
    image_tensor: "torch.Tensor",
    summary_prefix: str = "",
) -> ImageProcessingResult:
    """Extract metadata from an image and build the processing pipeline result.

    Args:
        image_path: Path to the image file for metadata extraction.
        image_tensor: Image tensor with shape [B, H, W, C]; used to derive
            default width/height when metadata is absent.
        summary_prefix: Optional prefix line prepended to the summary string.
            Used by MeldImageLoaderBatch to add "[Batch Info] Index: N | name"
            before the parameter block.

    Returns:
        ImageProcessingResult TypedDict with all fields required by both loader nodes.
    """
    logs_list: list[Any] = []
    pos, neg, model_name, wf_json, pr_json, a1111_text, log1 = MetadataHelper.extract_metadata(image_path)
    if isinstance(log1, list):
        logs_list.extend(log1)
    elif log1:
        logs_list.append(log1)

    params_info: dict[str, dict[str, Any]] = {
        "seed": {"val": 0, "status": "NOT DETECTED (Using Default)"},
        "steps": {"val": 20, "status": "NOT DETECTED (Using Default)"},
        "cfg": {"val": 8.0, "status": "NOT DETECTED (Using Default)"},
        "sampler_name": {"val": "euler", "status": "NOT DETECTED (Using Default)"},
        "scheduler": {"val": "normal", "status": "NOT DETECTED (Using Default)"},
        "original_width": {"val": int(image_tensor.shape[2]), "status": "NOT DETECTED (Using Default)"},
        "original_height": {"val": int(image_tensor.shape[1]), "status": "NOT DETECTED (Using Default)"},
    }

    if wf_json:
        k_params, k_found = MetadataHelper.get_ksampler_params(wf_json, logs_list)
        if k_found:
            for k, v in k_params.items():
                params_info[k] = {"val": v, "status": "DETECTED (Workflow)"}

        w, h, r_found = MetadataHelper.get_resolution_params(wf_json, image_tensor, logs_list)
        if r_found:
            params_info["original_width"] = {"val": w, "status": "DETECTED (Workflow)"}
            params_info["original_height"] = {"val": h, "status": "DETECTED (Workflow)"}

    if pr_json:
        k_params_api, k_found_api = MetadataHelper.get_ksampler_params_from_prompt(pr_json, logs_list)
        if k_found_api:
            for k, v in k_params_api.items():
                if params_info[k]["status"] == "NOT DETECTED (Using Default)":
                    params_info[k] = {"val": v, "status": "DETECTED (Prompt/API)"}

    if a1111_text:
        a_params = MetadataHelper.parse_a1111_params(a1111_text)
        if a_params:
            logs_list.append("-> Found A1111 metadata for fallback.")
            for k, v in a_params.items():
                if v and params_info[k]["status"] == "NOT DETECTED (Using Default)":
                    params_info[k] = {"val": v, "status": "FALLBACK (A1111)"}

    logs_list.append("\n=== Parameters Summary ===")
    for k, info in params_info.items():
        logs_list.append(f"{k}: {info['val']} [{info['status']}]")

    model = clip = vae = None
    actual_model_name = "Unknown"
    log2 = ""
    try:
        model, clip, vae, actual_model_name, log2 = MetadataHelper.find_and_load_checkpoint(model_name)
    except Exception as e:
        log2 = f"\nModel Load Failed: {e}"
    logs_list.append(log2)

    model_display = actual_model_name
    if model_name and actual_model_name != model_name:
        model_display += f" (Original: {model_name})"

    summary_text = (
        summary_prefix + f"[Model] {model_display}\n"
        f"[Sampler] {params_info['sampler_name']['val']} / {params_info['scheduler']['val']}\n"
        f"[Steps] {params_info['steps']['val']}  [CFG] {params_info['cfg']['val']}\n"
        f"[Size] {params_info['original_width']['val']}x{params_info['original_height']['val']} (Original)\n"
        f"[Seed] {params_info['seed']['val']}\n"
    )

    full_log = "\n".join([str(log) for log in logs_list if log])
    if full_log:
        summary_text += f"\n[System Log]\n{full_log}"

    base_settings: dict[str, Any] = {
        "seed": int(params_info["seed"]["val"]),
        "steps": int(params_info["steps"]["val"]),
        "cfg": float(params_info["cfg"]["val"]),
        "sampler_name": str(params_info["sampler_name"]["val"]),
        "scheduler": str(params_info["scheduler"]["val"]),
        "width": int(params_info["original_width"]["val"]),
        "height": int(params_info["original_height"]["val"]),
    }

    return ImageProcessingResult(
        positive=pos,
        negative=neg,
        model=model,
        clip=clip,
        vae=vae,
        summary=summary_text,
        base_settings=base_settings,
    )
