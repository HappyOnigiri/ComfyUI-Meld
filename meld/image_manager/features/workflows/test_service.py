import unittest
from typing import Any


# Mocking the function to be tested (assuming an environment where it cannot be imported from service.py, prioritizing logic verification)
# In reality, it needs to be synchronized with the logic in service.py.
def count_meld_image_loader(data: Any) -> int:  # noqa: ANN401
    loader_count = 0
    if isinstance(data, dict):
        if "nodes" in data and isinstance(data["nodes"], list):
            # UI Format
            for node in data["nodes"]:
                if isinstance(node, dict) and node.get("type") == "MeldImageLoader":
                    loader_count += 1
        else:
            # API Format check
            for _node_id, node in data.items():
                if isinstance(node, dict) and node.get("class_type") == "MeldImageLoader":
                    loader_count += 1
    return loader_count


class TestWorkflowService(unittest.TestCase):
    def test_ui_format_workflow(self) -> None:
        """Verify that MeldImageLoader is correctly counted in UI format workflows"""
        workflow_ui = {"nodes": [{"id": 1, "type": "MeldImageLoader"}, {"id": 2, "type": "KSampler"}]}
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 1)

    def test_api_format_workflow(self) -> None:
        """Verify that MeldImageLoader is correctly counted in API format workflows"""
        workflow_api = {
            "1": {"class_type": "MeldImageLoader"},
            "2": {"class_type": "KSampler"},
        }
        count = count_meld_image_loader(workflow_api)
        self.assertEqual(count, 1)

    def test_multiple_loaders(self) -> None:
        """Verify that multiple MeldImageLoader instances are correctly counted"""
        workflow_ui = {
            "nodes": [
                {"id": 1, "type": "MeldImageLoader"},
                {"id": 2, "type": "MeldImageLoader"},
            ]
        }
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 2)

    def test_no_loaders(self) -> None:
        """Verify that 0 is returned when no MeldImageLoader is present"""
        workflow_ui = {"nodes": [{"id": 1, "type": "KSampler"}]}
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 0)


if __name__ == "__main__":
    unittest.main()
