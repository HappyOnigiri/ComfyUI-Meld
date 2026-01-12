import difflib
from typing import Any


class Utils:
    @staticmethod
    def get_node_by_id(nodes_list: list[dict], node_id: int | str) -> dict | None:
        node_id_str = str(node_id)
        for n in nodes_list:
            if str(n.get("id")) == node_id_str:
                return n
        return None

    @staticmethod
    def get_link_by_id(links_list: list[Any], link_id: int | str | None) -> list | None:
        if not link_id:
            return None
        for link in links_list:
            if isinstance(link, list):
                if len(link) > 0 and link[0] == link_id:
                    return link
            elif isinstance(link, dict):
                if link.get("id") == link_id:
                    return [
                        link.get("id"),
                        link.get("origin_id"),
                        link.get("origin_slot"),
                        link.get("target_id"),
                        link.get("target_slot"),
                        link.get("type"),
                    ]
        return None

    @staticmethod
    def get_input_link_id(node: dict, input_name: str) -> int | str | None:
        inputs = node.get("inputs", [])
        for inp in inputs:
            if inp.get("name") == input_name:
                return inp.get("link")
        return None

    @staticmethod
    def calculate_similarity(name_a: str | None, name_b: str | None) -> float:
        if not name_a or not name_b:
            return 0.0

        def clean_basename(n: str) -> str:
            # Handle both / and \ as separators regardless of platform
            n = n.replace("\\", "/").split("/")[-1].lower()
            for ext in [".safetensors", ".ckpt", ".pt", ".bin", ".diffusers"]:
                if n.endswith(ext):
                    return n[: -len(ext)]
            return n

        a = clean_basename(name_a)
        b = clean_basename(name_b)
        return difflib.SequenceMatcher(None, a, b).ratio()
