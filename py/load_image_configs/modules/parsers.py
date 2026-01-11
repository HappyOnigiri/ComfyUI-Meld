import json
import re

import comfy.samplers

from .graph_utils import GraphUtils
from .utils import Utils


class Parsers:
    @staticmethod
    def parse_workflow_json(workflow_json, logs):
        positive = ""
        negative = ""

        try:
            if isinstance(workflow_json, str):
                wf = json.loads(workflow_json)
            else:
                wf = workflow_json

            nodes_list = wf.get('nodes', [])
            links_list = wf.get('links', [])

            subgraphs_dict = {}
            defs = wf.get('definitions', {})
            extra = wf.get('extra', {})

            sg_source = defs.get('subgraphs') or extra.get('subgraphs') or {}
            if sg_source:
                if isinstance(sg_source, dict):
                    for k, v in sg_source.items():
                        subgraphs_dict[k] = v
                elif isinstance(sg_source, list):
                    for v in sg_source:
                        if isinstance(v, dict) and 'id' in v:
                            subgraphs_dict[v['id']] = v

            target_node = None
            target_mapping = {'positive': 'positive', 'negative': 'negative'}

            sorted_nodes = sorted(nodes_list, key=lambda x: int(x.get('id', 0)))

            for node in sorted_nodes:
                n_type = node.get('type', '')

                if n_type in subgraphs_dict:
                    res = GraphUtils.resolve_subgraph_sampler(n_type, subgraphs_dict)
                    if res['has_sampler']:
                        target_node = node
                        target_mapping = {
                            'positive': res['positive_input'],
                            'negative': res['negative_input']
                        }
                        if target_mapping['positive']:
                            break

                elif 'Sampler' in n_type and n_type != 'GlobalSeed //Inspire':
                    target_node = node
                    target_mapping = {'positive': 'positive', 'negative': 'negative'}
                    break

            if not target_node:
                for node in reversed(sorted_nodes):
                    n_type = node.get('type', '')
                    if any(t in n_type for t in ['Upscale', 'Saver', 'Preview', 'Pipe']):
                        target_node = node
                        inputs = node.get('inputs', [])
                        mapping = {}
                        for inp in inputs:
                            iname = inp.get('name', '').lower()
                            if 'positive' in iname or 'text' in iname or 'string' in iname:
                                mapping['positive'] = inp.get('name')
                            elif 'negative' in iname:
                                mapping['negative'] = inp.get('name')
                            elif 'basic_pipe' in iname or 'pipe' in iname or 'image' in iname or 'samples' in iname:
                                if 'positive' not in mapping:
                                    mapping['positive'] = inp.get('name')

                        if mapping:
                            target_mapping = mapping
                            break

            if target_node:
                logs.append(f"-> Tracing from Node ID: {target_node.get('id')} ({target_node.get('type')})")

                p_port = target_mapping.get('positive')
                positive = ""
                if p_port:
                    link_id = Utils.get_input_link_id(target_node, p_port)
                    if link_id:
                        l_data = Utils.get_link_by_id(links_list, link_id)
                        if l_data:
                            positive = GraphUtils.trace_text_source(
                                l_data[1], links_list, nodes_list,
                                origin_slot=l_data[2], target_type='positive'
                            )

                if not positive:
                    for inp in target_node.get('inputs', []):
                        lid = inp.get('link')
                        if lid:
                            l_data = Utils.get_link_by_id(links_list, lid)
                            if l_data:
                                res = GraphUtils.trace_text_source(
                                    l_data[1], links_list, nodes_list,
                                    origin_slot=l_data[2], target_type='positive'
                                )
                                if res:
                                    positive = res
                                    break

                if positive:
                    logs.append(f"-> Positive found: {positive[:50]}{'...' if len(positive) > 50 else ''}")

                n_port = target_mapping.get('negative')
                negative = ""
                if n_port:
                    link_id = Utils.get_input_link_id(target_node, n_port)
                    if link_id:
                        l_data = Utils.get_link_by_id(links_list, link_id)
                        if l_data:
                            negative = GraphUtils.trace_text_source(
                                l_data[1], links_list, nodes_list,
                                origin_slot=l_data[2], target_type='negative'
                            )

                if not negative:
                    for inp in target_node.get('inputs', []):
                        lid = inp.get('link')
                        if lid:
                            l_data = Utils.get_link_by_id(links_list, lid)
                            if l_data:
                                res = GraphUtils.trace_text_source(
                                    l_data[1], links_list, nodes_list,
                                    origin_slot=l_data[2], target_type='negative'
                                )
                                if res and res != positive:
                                    negative = res
                                    break

                if negative:
                    logs.append(f"-> Negative found: {negative[:50]}{'...' if len(negative) > 50 else ''}")
            else:
                logs.append("!! No KSampler or Subgraph-Sampler found.")

        except Exception as e:
            logs.append(f"!! Workflow Trace Error: {e}")

        return positive, negative

    @staticmethod
    def parse_prompt_json(prompt_json, logs):
        positive = ""
        negative = ""
        try:
            if isinstance(prompt_json, str):
                pj = json.loads(prompt_json)
            else:
                pj = prompt_json

            sampler_node = None
            sampler_id = None

            def get_id_key(k):
                try:
                    return [int(x) for x in str(k).split(':')]
                except Exception:
                    return [str(k)]

            sorted_pj = sorted(pj.items(), key=lambda x: get_id_key(x[0]))
            for nid, n in sorted_pj:
                ctype = n.get('class_type', '')
                if 'Sampler' in ctype and ctype != 'GlobalSeed //Inspire':
                    sampler_node = n
                    sampler_id = nid
                    break

            if sampler_node:
                logs.append(f"-> Tracing from Prompt Node ID: {sampler_id} ({sampler_node.get('class_type')})")

                def trace_api(node_id, input_name, target_type='positive', depth=0):
                    if depth > 20:
                        return ""
                    node = pj.get(str(node_id))
                    if not node:
                        return ""

                    for side_id, side_node in pj.items():
                        if 'ShowText' in side_node.get('class_type', ''):
                            s_inputs = side_node.get('inputs', {})
                            for s_v in s_inputs.items():
                                if isinstance(s_v, list) and len(s_v) == 2 and str(s_v[0]) == str(node_id):
                                    for val_key in ['text_0', 'text_1', 'value']:
                                        if (
                                            val_key in s_inputs and
                                            isinstance(s_inputs[val_key], str) and
                                            len(s_inputs[val_key]) > 3
                                        ):
                                            return s_inputs[val_key]

                    inputs = node.get('inputs', {})
                    val = inputs.get(input_name)

                    if isinstance(val, list) and len(val) == 2:
                        next_id = str(val[0])
                        next_node = pj.get(next_id)
                        if not next_node:
                            return ""

                        ctype = next_node.get('class_type', '')

                        if any(t in ctype for t in [
                            'CLIPTextEncode', 'Primitive', 'String', 'ShowText', 'Note',
                            'Text to Conditioning', 'StringConcatenate'
                        ]):
                            inp_dict = next_node.get('inputs', {})

                            if 'StringConcatenate' in ctype:
                                parts = []
                                delimiter = str(inp_dict.get('delimiter', ', '))
                                for k in sorted(inp_dict.keys()):
                                    if 'string' in k.lower() or 'text' in k.lower():
                                        v = inp_dict[k]
                                        if isinstance(v, list) and len(v) == 2:
                                            txt = trace_api(next_id, k, target_type, depth+1)
                                            if txt:
                                                parts.append(txt)
                                        elif isinstance(v, str):
                                            if v:
                                                parts.append(v)
                                return delimiter.join(parts)

                            for k in ['text', 'string', 'value', 'text_0']:
                                if k in inp_dict:
                                    txt = inp_dict[k]
                                    if isinstance(txt, str):
                                        return txt
                                    if isinstance(txt, list) and len(txt) == 2:
                                        return trace_api(next_id, k, target_type, depth+1)

                            for k, txt in inp_dict.items():
                                if ('text' in k.lower() or 'string' in k.lower()) and k != 'clip':
                                    if isinstance(txt, str):
                                        return txt
                                    if isinstance(txt, list) and len(txt) == 2:
                                        return trace_api(next_id, k, target_type, depth+1)

                        if target_type == 'negative':
                            prio = [
                                'negative', 'negative_prompt', 'conditioning_2', 'conditioning',
                                'positive', 'basic_pipe', 'pipe', 'text', 'string'
                            ]
                        else:
                            prio = [
                                'positive', 'positive_prompt', 'conditioning_1', 'conditioning',
                                'negative', 'basic_pipe', 'pipe', 'text', 'string'
                            ]

                        for p in prio:
                            if p in next_node.get('inputs', {}):
                                res = trace_api(next_id, p, target_type, depth+1)
                                if res:
                                    return res

                    elif isinstance(val, str):
                        if len(val) > 2:
                            return val
                    return ""

                positive = trace_api(sampler_id, 'positive', 'positive')
                if not positive:
                    for k in sampler_node.get('inputs', {}).keys():
                        res = trace_api(sampler_id, k, 'positive')
                        if res:
                            positive = res
                            break

                if positive:
                    logs.append(
                        f"-> Positive found (API): {positive[:50]}{'...' if len(positive) > 50 else ''}"
                    )

                negative = trace_api(sampler_id, 'negative', 'negative')
                if not negative:
                    for k in sampler_node.get('inputs', {}).keys():
                        res = trace_api(sampler_id, k, 'negative')
                        if res and res != positive:
                            negative = res
                            break

                if negative:
                    logs.append(
                        f"-> Negative found (API): {negative[:50]}{'...' if len(negative) > 50 else ''}"
                    )
            else:
                logs.append("!! No KSampler found in prompt JSON.")
        except Exception as e:
            logs.append(f"!! Prompt Trace Error: {e}")

        return positive, negative

    @staticmethod
    def get_ksampler_params(workflow_json, logs, subgraphs_dict=None):
        params = {
            "seed": 0, "steps": 20, "cfg": 8.0,
            "sampler_name": "euler", "scheduler": "normal"
        }
        found = False

        try:
            if not workflow_json:
                return params, False
            if isinstance(workflow_json, str):
                wf = json.loads(workflow_json)
            else:
                wf = workflow_json

            nodes = wf.get('nodes', [])

            if subgraphs_dict is None:
                subgraphs_dict = {}
                defs = wf.get('definitions', {})
                extra = wf.get('extra', {})
                sg_source = defs.get('subgraphs') or extra.get('subgraphs') or {}
                if isinstance(sg_source, dict):
                    for k, v in sg_source.items():
                        subgraphs_dict[k] = v
                elif isinstance(sg_source, list):
                    for v in sg_source:
                        if isinstance(v, dict) and 'id' in v:
                            subgraphs_dict[v['id']] = v

            target_node = None
            sorted_nodes = sorted(nodes, key=lambda x: int(x.get('id', 0)))
            for node in sorted_nodes:
                ctype = node.get('type', '')

                if ctype in subgraphs_dict:
                    sub_params, sub_found = Parsers.get_ksampler_params(
                        subgraphs_dict[ctype], logs, subgraphs_dict
                    )
                    if sub_found:
                        params.update(sub_params)
                        found = True
                        break

                if 'Sampler' in ctype and 'Pipe' not in ctype and ctype != 'GlobalSeed //Inspire':
                    target_node = node
                    found = True
                    break

            if target_node:
                w_values = target_node.get('widgets_values', [])
                for val in w_values:
                    if isinstance(val, int) and val > 1000000:
                        params['seed'] = val
                    elif isinstance(val, int) and 1 <= val <= 200:
                        params['steps'] = val
                    elif isinstance(val, (float, int)) and 1.0 <= val <= 50.0:
                        if isinstance(val, int) and val > 20:
                            continue
                        params['cfg'] = float(val)
                    elif isinstance(val, str):
                        if val in comfy.samplers.KSampler.SAMPLERS:
                            params['sampler_name'] = val
                        elif val in comfy.samplers.KSampler.SCHEDULERS:
                            params['scheduler'] = val

                ctype = target_node.get('type', '')

                def safe_int(v, default):
                    if isinstance(v, (int, float, str)) and not isinstance(v, bool):
                        try:
                            return int(v)
                        except Exception:
                            return default
                    return default

                def safe_float(v, default):
                    if isinstance(v, (int, float, str)) and not isinstance(v, bool):
                        try:
                            return float(v)
                        except Exception:
                            return default
                    return default

                if ctype == 'KSampler' and len(w_values) >= 6:
                    params['seed'] = safe_int(w_values[0], params['seed'])
                    params['steps'] = safe_int(w_values[2], params['steps'])
                    params['cfg'] = safe_float(w_values[3], params['cfg'])
                    if isinstance(w_values[4], str):
                        params['sampler_name'] = w_values[4]
                    if isinstance(w_values[5], str):
                        params['scheduler'] = w_values[5]
                    found = True
                elif ctype == 'KSamplerAdvanced' and len(w_values) >= 7:
                    params['seed'] = safe_int(w_values[1], params['seed'])
                    params['steps'] = safe_int(w_values[3], params['steps'])
                    params['cfg'] = safe_float(w_values[4], params['cfg'])
                    if isinstance(w_values[5], str):
                        params['sampler_name'] = w_values[5]
                    if isinstance(w_values[6], str):
                        params['scheduler'] = w_values[6]
                    found = True
                elif target_node:
                    found = True

                if found:
                    logs.append(
                        f"-> Found KSampler params in Node ID: {target_node.get('id')} ({ctype})"
                    )

        except Exception as e:
            logs.append(f"!! KSampler Param Error: {e}")

        return params, found

    @staticmethod
    def get_ksampler_params_from_prompt(prompt_json, logs):
        params = {
            "seed": 0, "steps": 20, "cfg": 8.0,
            "sampler_name": "euler", "scheduler": "normal"
        }
        found = False
        try:
            if isinstance(prompt_json, str):
                pj = json.loads(prompt_json)
            else:
                pj = prompt_json

            sampler_node = None
            nid = None

            def get_id_key(k):
                try:
                    return [int(x) for x in str(k).split(':')]
                except Exception:
                    return [str(k)]

            sorted_pj = sorted(pj.items(), key=lambda x: get_id_key(x[0]))
            for curr_nid, n in sorted_pj:
                ctype = n.get('class_type', '')
                if 'Sampler' in ctype and 'Pipe' not in ctype and ctype != 'GlobalSeed //Inspire':
                    sampler_node = n
                    nid = curr_nid
                    break

            if sampler_node:
                inputs = sampler_node.get('inputs', {})

                def safe_int(v, default):
                    if isinstance(v, (int, float, str)) and not isinstance(v, bool):
                        try:
                            return int(v)
                        except Exception:
                            return default
                    return default

                def safe_float(v, default):
                    if isinstance(v, (int, float, str)) and not isinstance(v, bool):
                        try:
                            return float(v)
                        except Exception:
                            return default
                    return default

                if 'seed' in inputs:
                    params['seed'] = safe_int(inputs['seed'], params['seed'])
                if 'steps' in inputs:
                    params['steps'] = safe_int(inputs['steps'], params['steps'])
                if 'cfg' in inputs:
                    params['cfg'] = safe_float(inputs['cfg'], params['cfg'])
                if 'sampler_name' in inputs:
                    val = inputs['sampler_name']
                    if isinstance(val, str):
                        params['sampler_name'] = val
                if 'scheduler' in inputs:
                    val = inputs['scheduler']
                    if isinstance(val, str):
                        params['scheduler'] = val
                found = True
                logs.append(
                    f"-> Found KSampler params in Prompt Node ID: {nid} "
                    f"({sampler_node.get('class_type')})"
                )
        except Exception as e:
            logs.append(f"!! Prompt Param Error: {e}")
        return params, found

    @staticmethod
    def get_resolution_params(workflow_json, original_image_tensor, logs, subgraphs_dict=None):
        width = original_image_tensor.shape[2]
        height = original_image_tensor.shape[1]
        found = False

        try:
            if not workflow_json:
                return width, height, False
            if isinstance(workflow_json, str):
                wf = json.loads(workflow_json)
            else:
                wf = workflow_json

            nodes = wf.get('nodes', [])

            if subgraphs_dict is None:
                subgraphs_dict = {}
                defs = wf.get('definitions', {})
                extra = wf.get('extra', {})
                sg_source = defs.get('subgraphs') or extra.get('subgraphs') or {}
                if isinstance(sg_source, dict):
                    for k, v in sg_source.items():
                        subgraphs_dict[k] = v
                elif isinstance(sg_source, list):
                    for v in sg_source:
                        if isinstance(v, dict) and 'id' in v:
                            subgraphs_dict[v['id']] = v

            sorted_nodes = sorted(nodes, key=lambda x: int(x.get('id', 0)))
            for node in sorted_nodes:
                ctype = node.get('type', '')

                if ctype in subgraphs_dict:
                    sw, sh, sf = Parsers.get_resolution_params(
                        subgraphs_dict[ctype], original_image_tensor, logs, subgraphs_dict
                    )
                    if sf:
                        width, height, found = sw, sh, sf

                if ('Empty' in ctype and 'Latent' in ctype) or 'ImageScale' in ctype:
                    w_values = node.get('widgets_values', [])
                    if len(w_values) >= 2:
                        try:
                            width = int(w_values[0])
                            height = int(w_values[1])
                            found = True
                            logs.append(
                                f"-> Found Resolution in Node ID: {node.get('id')} "
                                f"({ctype}: {width}x{height})"
                            )
                        except Exception:
                            continue
        except Exception as e:
            logs.append(f"!! Resolution Param Error: {e}")

        return width, height, found

    @staticmethod
    def parse_a1111_params(parameters_text: str) -> dict[str, int | float | str]:
        params: dict[str, int | float | str] = {}
        if not parameters_text:
            return params

        patterns = {
            "steps": r"Steps:\s*(\d+)",
            "sampler_name": r"Sampler:\s*([^,]+)",
            "cfg": r"CFG scale:\s*([\d.]+)",
            "seed": r"Seed:\s*(\d+)",
            "size": r"Size:\s*(\d+)x(\d+)"
        }

        for key, pattern in patterns.items():
            m = re.search(pattern, parameters_text)
            if m:
                if key == "size":
                    params["original_width"] = int(m.group(1))
                    params["original_height"] = int(m.group(2))
                elif key == "cfg":
                    params["cfg"] = float(m.group(1))
                elif key == "sampler_name":
                    s_name = m.group(1).lower()
                    params["sampler_name"] = s_name
                    if 'karras' in s_name:
                        params["scheduler"] = "karras"
                else:
                    params[key] = int(m.group(1))
        return params

    @staticmethod
    def parse_prompt_with_weight(prompt: str) -> list[tuple[str, float]]:
        """
        Parses a prompt exactly like ComfyUI's CLIPTextEncode (sd1_clip.py)
        to extract weights for each keyword.
        """
        if not prompt:
            return []

        # 1. Escape escaped parentheses \( and \)
        text = prompt.replace("\\)", "\0\1").replace("\\(", "\0\2")

        # 2. Get segments and weights using ComfyUI's logic
        raw_weights = Parsers._token_weights(text, 1.0)

        # 3. Process into keyword-level (split by comma)
        results: list[tuple[str, float]] = []
        for segment, weight in raw_weights:
            # Unescape
            segment = segment.replace("\0\1", ")").replace("\0\2", "(")
            # Split by comma and clean up
            parts = segment.split(',')
            for p in parts:
                p = p.strip()
                if p:
                    results.append((p, round(weight, 3)))
        return results

    @staticmethod
    def _parse_parentheses(string: str) -> list[str]:
        """Matches comfy/sd1_clip.py:parse_parentheses"""
        result = []
        current_item = ""
        nesting_level = 0
        for char in string:
            if char == "(":
                if nesting_level == 0:
                    if current_item:
                        result.append(current_item)
                    current_item = "("
                else:
                    current_item += char
                nesting_level += 1
            elif char == ")":
                nesting_level -= 1
                if nesting_level == 0:
                    result.append(current_item + ")")
                    current_item = ""
                else:
                    current_item += char
            else:
                current_item += char
        if current_item:
            result.append(current_item)
        return result

    @staticmethod
    def _token_weights(string: str, current_weight: float) -> list[tuple[str, float]]:
        """Matches comfy/sd1_clip.py:token_weights"""
        a = Parsers._parse_parentheses(string)
        out = []
        for x in a:
            weight = current_weight
            if len(x) >= 2 and x[-1] == ')' and x[0] == '(':
                x = x[1:-1]
                xx = x.rfind(":")
                weight *= 1.1
                if xx > 0:
                    try:
                        weight = float(x[xx+1:])
                        x = x[:xx]
                    except Exception:
                        pass
                out += Parsers._token_weights(x, weight)
            else:
                out += [(x, current_weight)]
        return out

    @staticmethod
    def smart_split(prompt: str) -> list[str]:
        """
        Splits a prompt by commas, but respects parentheses and brackets.
        Example: 'a, (b, c:1.2), d' -> ['a', '(b, c:1.2)', 'd']
        """
        parts = []
        current: list[str] = []
        depth = 0
        for char in prompt:
            if char == ',' and depth == 0:
                parts.append("".join(current).strip())
                current = []
            else:
                if char in '([':
                    depth += 1
                elif char in ')]':
                    depth -= 1
                current.append(char)
        if current:
            parts.append("".join(current).strip())
        return [p for p in parts if p]
