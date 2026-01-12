from .utils import Utils


class GraphUtils:
    @staticmethod
    def find_connected_showtext(target_node_id, links_list, nodes_list, target_slot=None):
        target_node_id_str = str(target_node_id)
        for link in links_list:
            if not isinstance(link, list) or len(link) < 4:
                continue

            origin_id = str(link[1])
            origin_slot = link[2]
            target_id = link[3]

            if origin_id == target_node_id_str:
                if target_slot is not None and int(origin_slot) != int(target_slot):
                    continue

                target_node = Utils.get_node_by_id(nodes_list, target_id)
                if target_node:
                    n_type = target_node.get("type", "").lower()
                    if "showtext" in n_type or "previewtext" in n_type or "note" in n_type:
                        w_values = target_node.get("widgets_values", [])
                        if w_values:
                            val = w_values[0]
                            if isinstance(val, list):
                                res = " ".join([str(v) for v in val if isinstance(v, str)])
                                if res:
                                    return res
                            elif isinstance(val, str):
                                if val:
                                    return val
        return None

    @staticmethod
    def trace_text_source(start_node_id, links_list, nodes_list, depth=0, origin_slot=None, target_type="positive"):
        if depth > 25:
            return ""

        node = Utils.get_node_by_id(nodes_list, start_node_id)
        if not node:
            return ""

        n_type = node.get("type", "")
        w_values = node.get("widgets_values", [])

        sidecar_text = GraphUtils.find_connected_showtext(start_node_id, links_list, nodes_list, origin_slot)
        if "Concatenate" not in n_type and sidecar_text:
            return sidecar_text

        if any(t in n_type for t in ["Primitive", "String", "ShowText", "Note", "CLIPTextEncode"]) or (
            "RandomPromptFromFiles" in n_type and not sidecar_text
        ):
            if w_values:
                val = w_values[0]
                if isinstance(val, list):
                    res = " ".join([str(v) for v in val if isinstance(v, str)])
                    if res:
                        return res
                elif isinstance(val, str):
                    if "RandomPromptFromFiles" in n_type and (val.startswith("ComfyUI") or "/" in val or "\\" in val):
                        pass
                    elif val:
                        return val

                if len(w_values) > 1 and isinstance(w_values[1], str) and len(w_values[1]) > 10:
                    return w_values[1]

        if "Concatenate" in n_type:
            parts = []
            inputs = node.get("inputs", [])

            delimiter = ", "
            if w_values and len(w_values) > 2:
                delimiter = str(w_values[2])
            elif w_values and len(w_values) > 1 and isinstance(w_values[1], str) and len(w_values[1]) <= 2:
                delimiter = w_values[1]

            for inp in inputs:
                iname = inp.get("name", "")
                if "string" in iname or "text" in iname:
                    link_id = inp.get("link")
                    if link_id:
                        l_data = Utils.get_link_by_id(links_list, link_id)
                        if l_data:
                            txt = GraphUtils.trace_text_source(
                                l_data[1], links_list, nodes_list, depth + 1, l_data[2], target_type
                            )
                            if txt:
                                parts.append(txt)

            res_eval = delimiter.join(parts) if parts else ""

            if sidecar_text and len(sidecar_text) > len(res_eval):
                return sidecar_text
            return res_eval

        if target_type == "negative":
            text_priority = [
                "text",
                "string",
                "negative",
                "negative_prompt",
                "conditioning_2",
                "value",
                "input",
                "string_b",
                "text_2",
                "positive",
                "positive_prompt",
                "conditioning_1",
                "string_a",
                "text_1",
            ]
        else:
            text_priority = [
                "text",
                "string",
                "positive",
                "positive_prompt",
                "conditioning_1",
                "value",
                "input",
                "string_a",
                "text_1",
                "negative",
                "negative_prompt",
                "conditioning_2",
                "string_b",
                "text_2",
            ]

        pipe_priority = ["conditioning", "basic_pipe", "pipe", "images", "image", "samples", "latent"]

        for name in text_priority:
            lid = Utils.get_input_link_id(node, name)
            if lid:
                l_data = Utils.get_link_by_id(links_list, lid)
                if l_data:
                    res = GraphUtils.trace_text_source(
                        l_data[1], links_list, nodes_list, depth + 1, l_data[2], target_type
                    )
                    if res:
                        return res

        for name in pipe_priority:
            lid = Utils.get_input_link_id(node, name)
            if lid:
                l_data = Utils.get_link_by_id(links_list, lid)
                if l_data:
                    res = GraphUtils.trace_text_source(
                        l_data[1], links_list, nodes_list, depth + 1, l_data[2], target_type
                    )
                    if res:
                        return res

        inputs = node.get("inputs", [])
        for inp in inputs:
            lid = inp.get("link")
            if lid:
                l_data = Utils.get_link_by_id(links_list, lid)
                if l_data:
                    res = GraphUtils.trace_text_source(
                        l_data[1], links_list, nodes_list, depth + 1, l_data[2], target_type
                    )
                    if res:
                        return res

        return ""

    @staticmethod
    def resolve_subgraph_sampler(subgraph_id, subgraphs_dict, depth=0):
        result = {"has_sampler": False, "positive_input": None, "negative_input": None}
        if depth > 5 or subgraph_id not in subgraphs_dict:
            return result

        sg_def = subgraphs_dict[subgraph_id]
        nodes = sg_def.get("nodes", [])
        links = sg_def.get("links", [])
        sg_inputs = sg_def.get("inputs", [])

        def trace_internal_to_input(start_node_id, target_slot_name, trace_depth=0):
            if trace_depth > 15:
                return None
            curr_node = Utils.get_node_by_id(nodes, start_node_id)
            if not curr_node:
                return None

            link_id = Utils.get_input_link_id(curr_node, target_slot_name)
            if not link_id:
                return None

            for inp in sg_inputs:
                if link_id in inp.get("linkIds", []):
                    return inp.get("name")

            l_data = Utils.get_link_by_id(links, link_id)
            if not l_data:
                return None
            origin_id = l_data[1]

            if "negative" in target_slot_name:
                next_targets = [
                    "negative",
                    "negative_prompt",
                    "conditioning_2",
                    "conditioning",
                    "positive",
                    "basic_pipe",
                    "pipe",
                    "text",
                    "string",
                    "input",
                ]
            else:
                next_targets = [
                    "positive",
                    "positive_prompt",
                    "conditioning_1",
                    "conditioning",
                    "negative",
                    "basic_pipe",
                    "pipe",
                    "text",
                    "string",
                    "input",
                ]

            for nt in next_targets:
                res = trace_internal_to_input(origin_id, nt, trace_depth + 1)
                if res:
                    return res

            return None

        for node in nodes:
            n_type = node.get("type", "")

            if "Sampler" in n_type and n_type != "GlobalSeed //Inspire":
                result["has_sampler"] = True
                result["positive_input"] = trace_internal_to_input(node.get("id"), "positive")
                result["negative_input"] = trace_internal_to_input(node.get("id"), "negative")
                return result

            if n_type in subgraphs_dict:
                child_res = GraphUtils.resolve_subgraph_sampler(n_type, subgraphs_dict, depth + 1)
                if child_res["has_sampler"]:
                    result["has_sampler"] = True
                    if child_res["positive_input"]:
                        result["positive_input"] = trace_internal_to_input(node.get("id"), child_res["positive_input"])
                    if child_res["negative_input"]:
                        result["negative_input"] = trace_internal_to_input(node.get("id"), child_res["negative_input"])
                    return result

        return result
