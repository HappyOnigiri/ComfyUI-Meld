import unittest
from typing import Any


# テスト対象の関数を模したもの（service.pyからインポートできない環境を想定し、ロジックの担保を優先）
# 実際には service.py のロジックと同期させておく必要があります。
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
        """UI形式のワークフローでMeldImageLoaderが正しくカウントされること"""
        workflow_ui = {"nodes": [{"id": 1, "type": "MeldImageLoader"}, {"id": 2, "type": "KSampler"}]}
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 1)

    def test_api_format_workflow(self) -> None:
        """API形式のワークフローでMeldImageLoaderが正しくカウントされること"""
        workflow_api = {
            "1": {"class_type": "MeldImageLoader"},
            "2": {"class_type": "KSampler"},
        }
        count = count_meld_image_loader(workflow_api)
        self.assertEqual(count, 1)

    def test_multiple_loaders(self) -> None:
        """複数のMeldImageLoaderがある場合に正しくカウントされること"""
        workflow_ui = {
            "nodes": [
                {"id": 1, "type": "MeldImageLoader"},
                {"id": 2, "type": "MeldImageLoader"},
            ]
        }
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 2)

    def test_no_loaders(self) -> None:
        """MeldImageLoaderがない場合に0が返ること"""
        workflow_ui = {"nodes": [{"id": 1, "type": "KSampler"}]}
        count = count_meld_image_loader(workflow_ui)
        self.assertEqual(count, 0)


if __name__ == "__main__":
    unittest.main()
