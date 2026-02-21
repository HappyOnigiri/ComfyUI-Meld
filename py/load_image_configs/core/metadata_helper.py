from collections.abc import Mapping
from typing import Any

import torch

from .modules.graph_utils import GraphUtils
from .modules.metadata_extractor import MetadataExtractor
from .modules.model_utils import ModelUtils
from .modules.parsers import Parsers
from .modules.utils import Utils


class MetadataHelper:
    """
    Facade class for metadata operations.
    Delegates implementation to specialized modules in .modules/
    """

    @staticmethod
    def get_node_by_id(nodes_list: list[dict[str, Any]], node_id: int | str) -> dict[str, Any] | None:
        return Utils.get_node_by_id(nodes_list, node_id)

    @staticmethod
    def get_link_by_id(links_list: list[Any], link_id: int | str | None) -> list[Any] | None:
        return Utils.get_link_by_id(links_list, link_id)

    @staticmethod
    def get_input_link_id(node: dict[str, Any], input_name: str) -> int | str | None:
        return Utils.get_input_link_id(node, input_name)

    @staticmethod
    def find_connected_showtext(
        target_node_id: int | str,
        links_list: list[Any],
        nodes_list: list[dict[str, Any]],
        target_slot: int | str | None = None,
    ) -> str | None:
        return GraphUtils.find_connected_showtext(target_node_id, links_list, nodes_list, target_slot)

    @staticmethod
    def trace_text_source(
        start_node_id: int | str,
        links_list: list[Any],
        nodes_list: list[dict[str, Any]],
        depth: int = 0,
        origin_slot: int | str | None = None,
        target_type: str = "positive",
    ) -> str:
        return GraphUtils.trace_text_source(start_node_id, links_list, nodes_list, depth, origin_slot, target_type)

    @staticmethod
    def resolve_subgraph_sampler(subgraph_id: str, subgraphs_dict: dict[str, Any], depth: int = 0) -> dict[str, Any]:
        return GraphUtils.resolve_subgraph_sampler(subgraph_id, subgraphs_dict, depth)

    @staticmethod
    def parse_workflow_json(workflow_json: str | dict[str, Any] | None, logs: list[str]) -> tuple[str, str]:
        return Parsers.parse_workflow_json(workflow_json, logs)

    @staticmethod
    def parse_prompt_json(prompt_json: str | dict[str, Any] | None, logs: list[str]) -> tuple[str, str]:
        return Parsers.parse_prompt_json(prompt_json, logs)

    @staticmethod
    def get_ksampler_params(
        workflow_json: str | dict[str, Any] | None, logs: list[str], subgraphs_dict: dict[str, Any] | None = None
    ) -> tuple[dict[str, Any], bool]:
        return Parsers.get_ksampler_params(workflow_json, logs, subgraphs_dict)

    @staticmethod
    def get_ksampler_params_from_prompt(
        prompt_json: str | dict[str, Any] | None, logs: list[str]
    ) -> tuple[dict[str, Any], bool]:
        return Parsers.get_ksampler_params_from_prompt(prompt_json, logs)

    @staticmethod
    def get_dual_clip_params(
        workflow_json: str | dict[str, Any] | None, logs: list[str]
    ) -> tuple[dict[str, Any], bool]:
        return Parsers.get_dual_clip_params(workflow_json, logs)

    @staticmethod
    def get_resolution_params(
        workflow_json: str | dict[str, Any] | None,
        original_image_tensor: torch.Tensor,
        logs: list[str],
        subgraphs_dict: dict[str, Any] | None = None,
    ) -> tuple[int, int, bool]:
        return Parsers.get_resolution_params(workflow_json, original_image_tensor, logs, subgraphs_dict)

    @staticmethod
    def parse_a1111_params(parameters_text: str) -> dict[str, int | float | str]:
        return Parsers.parse_a1111_params(parameters_text)

    @staticmethod
    def parse_prompt_with_weight(prompt_part: str) -> list[tuple[str, float]]:
        return Parsers.parse_prompt_with_weight(prompt_part)

    @staticmethod
    def smart_split(prompt: str) -> list[str]:
        return Parsers.smart_split(prompt)

    @staticmethod
    def calculate_similarity(name_a: str | None, name_b: str | None) -> float:
        return Utils.calculate_similarity(name_a, name_b)

    @staticmethod
    def find_best_match_model(
        model_name_query: str | None, model_type: str = "checkpoints"
    ) -> tuple[str | None, float, str]:
        return ModelUtils.find_best_match_model(model_name_query, model_type)

    @staticmethod
    def extract_metadata(image_path: str) -> tuple[str, str, str, str | None, str | None, str | None, str]:
        return MetadataExtractor.extract_metadata(image_path)

    @staticmethod
    def extract_from_data(
        info: dict[Any, Any], exif: Mapping[Any, Any] | None = None
    ) -> tuple[str, str, str, str | None, str | None, str | None, list[str]]:
        return MetadataExtractor.extract_from_data(info, exif)

    @staticmethod
    def find_and_load_checkpoint(model_name_query: str | None) -> tuple[object, object, object, str, str]:
        return ModelUtils.find_and_load_checkpoint(model_name_query)
