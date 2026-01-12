import os
from typing import Any

import folder_paths
import nodes

from ..core.metadata_helper import MetadataHelper


class MeldImageLoader:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {"required": {"image": (sorted(files), {"image_upload": True})}}

    RETURN_TYPES = ("IMAGE", "MODEL", "CLIP", "VAE", "STRING", "STRING", "STRING", "BASE_SETTINGS")
    RETURN_NAMES = ("IMAGE", "MODEL", "CLIP", "VAE", "positive", "negative", "summary", "base_settings")
    FUNCTION = "load"
    CATEGORY = "MeldFlow/Image"
    OUTPUT_NODE = True

    def load(self, image: str) -> dict:
        image_path = folder_paths.get_annotated_filepath(image)
        image_loader = nodes.LoadImage()
        image_output, _ = image_loader.load_image(image)

        logs_list = []
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
            "original_width": {"val": int(image_output.shape[2]), "status": "NOT DETECTED (Using Default)"},
            "original_height": {"val": int(image_output.shape[1]), "status": "NOT DETECTED (Using Default)"},
        }

        if wf_json:
            k_params, k_found = MetadataHelper.get_ksampler_params(wf_json, logs_list)
            if k_found:
                for k, v in k_params.items():
                    params_info[k] = {"val": v, "status": "DETECTED (Workflow)"}

            w, h, r_found = MetadataHelper.get_resolution_params(wf_json, image_output, logs_list)
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

        summary_text = f"""[Model] {model_display}
[Sampler] {params_info["sampler_name"]["val"]} / {params_info["scheduler"]["val"]}
[Steps] {params_info["steps"]["val"]}  [CFG] {params_info["cfg"]["val"]}
[Size] {params_info["original_width"]["val"]}x{params_info["original_height"]["val"]} (Original)
[Seed] {params_info["seed"]["val"]}
"""

        full_log = "\n".join([str(log) for log in logs_list if log])
        if full_log:
            summary_text += f"\n[System Log]\n{full_log}"

        base_settings = {
            "seed": int(params_info["seed"]["val"]),
            "steps": int(params_info["steps"]["val"]),
            "cfg": float(params_info["cfg"]["val"]),
            "sampler_name": str(params_info["sampler_name"]["val"]),
            "scheduler": str(params_info["scheduler"]["val"]),
            "width": int(params_info["original_width"]["val"]),
            "height": int(params_info["original_height"]["val"]),
        }

        return {
            "ui": {"text": [summary_text]},
            "result": (image_output, model, clip, vae, pos, neg, summary_text, base_settings),
        }
