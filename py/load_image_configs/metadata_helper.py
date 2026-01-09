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
    def get_node_by_id(nodes_list, node_id):
        return Utils.get_node_by_id(nodes_list, node_id)

    @staticmethod
    def get_link_by_id(links_list, link_id):
        return Utils.get_link_by_id(links_list, link_id)

    @staticmethod
    def get_input_link_id(node, input_name):
        return Utils.get_input_link_id(node, input_name)

    @staticmethod
    def find_connected_showtext(target_node_id, links_list, nodes_list, target_slot=None):
        return GraphUtils.find_connected_showtext(target_node_id, links_list, nodes_list, target_slot)

    @staticmethod
    def trace_text_source(start_node_id, links_list, nodes_list, depth=0, origin_slot=None, target_type='positive'):
        return GraphUtils.trace_text_source(start_node_id, links_list, nodes_list, depth, origin_slot, target_type)

    @staticmethod
    def resolve_subgraph_sampler(subgraph_id, subgraphs_dict, depth=0):
        return GraphUtils.resolve_subgraph_sampler(subgraph_id, subgraphs_dict, depth)

    @staticmethod
    def parse_workflow_json(workflow_json, logs):
        return Parsers.parse_workflow_json(workflow_json, logs)

    @staticmethod
    def parse_prompt_json(prompt_json, logs):
        return Parsers.parse_prompt_json(prompt_json, logs)

    @staticmethod
    def get_ksampler_params(workflow_json, logs, subgraphs_dict=None):
        return Parsers.get_ksampler_params(workflow_json, logs, subgraphs_dict)

    @staticmethod
    def get_ksampler_params_from_prompt(prompt_json, logs):
        return Parsers.get_ksampler_params_from_prompt(prompt_json, logs)

    @staticmethod
    def get_resolution_params(workflow_json, original_image_tensor, logs, subgraphs_dict=None):
        return Parsers.get_resolution_params(workflow_json, original_image_tensor, logs, subgraphs_dict)

    @staticmethod
    def parse_a1111_params(parameters_text):
        return Parsers.parse_a1111_params(parameters_text)

    @staticmethod
    def calculate_similarity(name_a, name_b):
        return Utils.calculate_similarity(name_a, name_b)

    @staticmethod
    def find_best_match_model(model_name_query, model_type="checkpoints"):
        return ModelUtils.find_best_match_model(model_name_query, model_type)

    @staticmethod
    def extract_metadata(image_path):
        return MetadataExtractor.extract_metadata(image_path)

    @staticmethod
    def extract_from_data(info, exif=None):
        return MetadataExtractor.extract_from_data(info, exif)

    @staticmethod
    def find_and_load_checkpoint(model_name_query):
        return ModelUtils.find_and_load_checkpoint(model_name_query)
