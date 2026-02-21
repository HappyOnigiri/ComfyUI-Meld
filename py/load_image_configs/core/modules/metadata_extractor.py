import json
import re
from collections.abc import Mapping
from typing import Any

from PIL import Image

from .parsers import Parsers


class MetadataExtractor:
    @staticmethod
    def extract_metadata(image_path: str) -> tuple[str, str, str, str | None, str | None, str | None, str]:
        try:
            img = Image.open(image_path)
            info = img.info
            exif = img.getexif()
            pos, neg, model, wf_json, pr_json, a1111_text, logs = MetadataExtractor.extract_from_data(info, exif)
            return pos, neg, model, wf_json, pr_json, a1111_text, "\n".join(logs)
        except Exception as e:
            return "", "", "", None, None, None, f"Error opening image for metadata: {e}"

    @staticmethod
    def extract_from_data(
        info: dict[Any, Any], exif: Mapping[Any, Any] | None = None
    ) -> tuple[str, str, str, str | None, str | None, str | None, list[str]]:
        positive = ""
        negative = ""
        model_name = ""
        workflow_json = None
        prompt_json = None
        a1111_text = ""
        logs = []

        json_candidates = []
        if "workflow" in info:
            logs.append("[Source: PNG Info (workflow)]")
            json_candidates.append(info["workflow"])
            workflow_json = info["workflow"]
        if "prompt" in info:
            logs.append("[Source: PNG Info (prompt)]")
            json_candidates.append(info["prompt"])
            prompt_json = info["prompt"]

        if exif:
            logs.append("[Source: EXIF]")
            for tid, val in exif.items():
                if not isinstance(val, str):
                    continue
                val_clean = val.strip().replace("\0", "")
                if not val_clean:
                    continue

                start = val_clean.find("{")
                end = val_clean.rfind("}")
                if start != -1 and end != -1 and end > start:
                    json_str = val_clean[start : end + 1]
                    try:
                        parsed = json.loads(json_str)
                        if isinstance(parsed, dict):
                            if json_str not in json_candidates:
                                if "nodes" in parsed:
                                    json_candidates.insert(0, json_str)
                                    logs.append(f"-> Found workflow-like JSON in EXIF tag {tid}")
                                    if not workflow_json:
                                        workflow_json = json_str
                                else:
                                    json_candidates.append(json_str)
                                    logs.append(f"-> Found potential JSON in EXIF tag {tid}")
                                    if not prompt_json:
                                        prompt_json = json_str
                    except Exception:
                        pass

            for _tid, val in exif.items():
                if isinstance(val, str):
                    v_lower = val.lower()
                    if "workflow:" in v_lower:
                        idx = v_lower.find("workflow:")
                        raw = val[idx + 9 :].strip()
                        if raw not in json_candidates:
                            json_candidates.append(raw)
                        if not workflow_json:
                            workflow_json = raw
                    elif "prompt:" in v_lower:
                        idx = v_lower.find("prompt:")
                        raw = val[idx + 7 :].strip()
                        if raw not in json_candidates:
                            json_candidates.append(raw)
                        if not prompt_json:
                            prompt_json = raw

        for json_str in json_candidates:
            try:
                data = json.loads(json_str)
                p_res, n_res = "", ""

                if isinstance(data, dict) and "nodes" in data:
                    p_res, n_res = Parsers.parse_workflow_json(data, logs)
                    if not workflow_json:
                        workflow_json = json_str
                else:
                    p_res, n_res = Parsers.parse_prompt_json(data, logs)
                    if not prompt_json:
                        prompt_json = json_str

                if p_res and not positive:
                    positive = p_res
                if n_res and not negative:
                    negative = n_res

                if positive and negative:
                    break
            except Exception:
                pass

        for json_str in json_candidates:
            try:
                wf = json.loads(json_str)

                subgraphs_dict_for_model = {}
                defs = wf.get("definitions", {})
                extra = wf.get("extra", {})
                sg_source = defs.get("subgraphs") or extra.get("subgraphs") or {}
                if isinstance(sg_source, dict):
                    for k, v in sg_source.items():
                        subgraphs_dict_for_model[k] = v
                elif isinstance(sg_source, list):
                    for v in sg_source:
                        if isinstance(v, dict) and "id" in v:
                            subgraphs_dict_for_model[v["id"]] = v

                def find_model(
                    nodes_data: list[Any] | dict[str, Any], sg_dict: dict[str, Any], depth: int = 0
                ) -> str | None:
                    if depth > 10:
                        return None
                    candidates = []
                    if isinstance(nodes_data, list):
                        for n in nodes_data:
                            t = n.get("type", "")
                            if any(x in t for x in ["UpscaleModelLoader", "ControlNetLoader", "DiffusersLoader"]):
                                continue
                            if any(
                                x in t
                                for x in [
                                    "CheckpointLoader",
                                    "TensorRTLoader",
                                    "ModelLoader",
                                    "UNETLoader",
                                    "UnetLoaderGGUF",
                                ]
                            ):
                                w = n.get("widgets_values", [])
                                if w:
                                    m_name = w[0]
                                    if "TensorRT" in t and len(w) > 1:
                                        if isinstance(w[1], str) and (
                                            ".engine" in w[1].lower() or not isinstance(w[0], str)
                                        ):
                                            m_name = w[1]

                                    if m_name and isinstance(m_name, str):
                                        prio = 1
                                        if any(ext in m_name.lower() for ext in [".safetensors", ".ckpt", ".gguf"]):
                                            prio = 2
                                        candidates.append((prio, m_name))
                            if t in sg_dict:
                                res = find_model(sg_dict[t].get("nodes", []), sg_dict, depth + 1)
                                if res:
                                    candidates.append((2, res))
                    elif isinstance(nodes_data, dict):
                        for _nid, n in nodes_data.items():
                            t = n.get("class_type", "")
                            if any(x in t for x in ["UpscaleModelLoader", "ControlNetLoader", "DiffusersLoader"]):
                                continue
                            if any(
                                x in t
                                for x in [
                                    "CheckpointLoader",
                                    "TensorRTLoader",
                                    "ModelLoader",
                                    "UNETLoader",
                                    "UnetLoaderGGUF",
                                ]
                            ):
                                inputs = n.get("inputs", {})
                                for k in ["ckpt_name", "unet_name", "model_name", "model_type"]:
                                    if k in inputs and isinstance(inputs[k], str):
                                        m_name = inputs[k]
                                        prio = 1
                                        if any(ext in m_name.lower() for ext in [".safetensors", ".ckpt", ".gguf"]):
                                            prio = 2
                                        candidates.append((prio, m_name))
                    if candidates:
                        candidates.sort(key=lambda x: (x[0], len(x[1])), reverse=True)
                        return candidates[0][1]
                    return None

                m_name = find_model(wf.get("nodes") or wf, subgraphs_dict_for_model)
                if m_name:
                    model_name = m_name
                    break
            except Exception:
                pass

        if "parameters" in info:
            a1111_text = info["parameters"]
            if not positive or not negative:
                logs.append("[Type: Automatic1111]")
                try:
                    parts = a1111_text.split("\nNegative prompt: ")
                    if len(parts) > 1:
                        if not positive:
                            positive = parts[0].strip()
                        rem = parts[1].split("\n")
                        if not negative:
                            negative = rem[0].strip()
                    else:
                        parts_steps = a1111_text.split("Steps: ")
                        if not positive:
                            positive = parts_steps[0].strip()

                    if not model_name:
                        m = re.search(r"Model:\s*([^,]+)", a1111_text)
                        if m:
                            model_name = m.group(1).strip()
                except Exception:
                    pass

        return positive, negative, model_name, workflow_json, prompt_json, a1111_text, logs
