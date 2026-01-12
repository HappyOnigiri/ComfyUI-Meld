import sys
import unittest
from unittest.mock import MagicMock

# Mock ComfyUI dependencies before importing target
sys.modules["folder_paths"] = MagicMock()
comfy = MagicMock()
sys.modules["comfy"] = comfy
sys.modules["comfy.sd"] = MagicMock()
sys.modules["comfy.utils"] = MagicMock()
sys.modules["comfy.samplers"] = MagicMock()
sys.modules["nodes"] = MagicMock()
sys.modules["server"] = MagicMock()

from py.load_image_configs.modules.parsers import Parsers  # noqa: E402


class TestPromptWeightNormalization(unittest.TestCase):
    def test_basic_weight(self) -> None:
        # (word:weight) -> weight
        self.assertEqual(Parsers.parse_prompt_with_weight("(girl:1.2)"), [("girl", 1.2)])

    def test_nested_parentheses(self) -> None:
        # ((word)) -> 1.1 * 1.1 = 1.21
        results = Parsers.parse_prompt_with_weight("((girl))")
        self.assertEqual(results, [("girl", 1.21)])

    def test_comfy_override_logic(self) -> None:
        # ComfyUI's unique logic: inner colon overrides outer multiplier
        # ((cat:1.2)) -> 1.2 (not 1.32 or 1.21)
        # 1. Outer (..) -> weight=1.1
        # 2. Inner (cat:1.2) -> weight=(1.1*1.1) then override to 1.2
        self.assertEqual(Parsers.parse_prompt_with_weight("((cat:1.2))"), [("cat", 1.2)])

        # ((cat:1.2):1.1) -> 1.1 (Wait, let's re-verify)
        # 1. Outer (..):1.1 -> weight=1.1
        # 2. Inner (cat:1.2) -> weight=(1.1*1.1) then override to 1.2
        # So it should be 1.2
        self.assertEqual(Parsers.parse_prompt_with_weight("((cat:1.2):1.1)"), [("cat", 1.2)])

    def test_comfy_multiplicative_outer(self) -> None:
        # ((cat):1.2) -> 1.32
        # 1. Outer (..):1.2 -> weight=1.2
        # 2. Inner (cat) -> weight=1.2 * 1.1 = 1.32
        self.assertEqual(Parsers.parse_prompt_with_weight("((cat):1.2)"), [("cat", 1.32)])

    def test_comma_expansion(self) -> None:
        # (a, b:1.5) -> a:1.5, b:1.5
        results = Parsers.parse_prompt_with_weight("(masterpiece, best quality:1.2)")
        expected = [("masterpiece", 1.2), ("best quality", 1.2)]
        self.assertEqual(results, expected)

    def test_nested_comma_expansion(self) -> None:
        # ((a, b)) -> a:1.21, b:1.21
        results = Parsers.parse_prompt_with_weight("((masterpiece, best quality))")
        expected = [("masterpiece", 1.21), ("best quality", 1.21)]
        self.assertEqual(results, expected)

    def test_complex_nesting(self) -> None:
        # ( (a, b), (c, d):1.5 ) -> a:1.65, b:1.65, c:1.65, d:1.65
        # 1. Outer :1.5 -> weight=1.5
        # 2. Inner (a,b) -> 1.5 * 1.1 = 1.65
        # 3. Inner (c,d) -> 1.5 * 1.1 = 1.65
        results = Parsers.parse_prompt_with_weight("((a, b), (c, d):1.5)")
        expected = [("a", 1.65), ("b", 1.65), ("c", 1.65), ("d", 1.65)]
        self.assertEqual(results, expected)

    def test_escaped_parentheses(self) -> None:
        # \(cat\) -> (cat) weight 1.0
        results = Parsers.parse_prompt_with_weight("\\(cat\\)")
        self.assertEqual(results, [("(cat)", 1.0)])

        # (\(cat\):1.2) -> (cat) weight 1.2
        results = Parsers.parse_prompt_with_weight("(\\(cat\\):1.2)")
        self.assertEqual(results, [("(cat)", 1.2)])

    def test_multiple_segments(self) -> None:
        # (a:1.2), b, (c:0.8)
        results = Parsers.parse_prompt_with_weight("(a:1.2), b, (c:0.8)")
        expected = [("a", 1.2), ("b", 1.0), ("c", 0.8)]
        self.assertEqual(results, expected)

    def test_mixed_commas_and_weights(self) -> None:
        # cat, (dog, bird:1.5), fish
        results = Parsers.parse_prompt_with_weight("cat, (dog, bird:1.5), fish")
        expected = [("cat", 1.0), ("dog", 1.5), ("bird", 1.5), ("fish", 1.0)]
        self.assertEqual(results, expected)


if __name__ == "__main__":
    unittest.main()
