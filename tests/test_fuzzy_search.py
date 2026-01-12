import sys
import unittest
from unittest.mock import MagicMock

# Mock ComfyUI dependencies
sys.modules["folder_paths"] = MagicMock()
sys.modules["comfy"] = MagicMock()
sys.modules["comfy.sd"] = MagicMock()
sys.modules["comfy.utils"] = MagicMock()
sys.modules["comfy.samplers"] = MagicMock()
sys.modules["nodes"] = MagicMock()

import folder_paths  # noqa: E402

# Import test target
from py.load_image_configs import MetadataHelper  # noqa: E402


class TestFuzzySearch(unittest.TestCase):
    def setUp(self) -> None:
        # Define available models list
        self.available_models = [
            "SDXL_v1.0.safetensors",
            "RealVision_v4.0.safetensors",
            "Animagine_XL_3.1.safetensors",
            "ponyDiffusionV6XL.safetensors",
            "checkpoints\\subfolder\\model_v2.ckpt",
        ]
        # Use type: ignore because folder_paths is mocked via sys.modules
        folder_paths.get_filename_list.return_value = self.available_models  # type: ignore

    def test_exact_match(self) -> None:
        """Test for exact match"""
        query = "SDXL_v1.0.safetensors"
        match, score, log = MetadataHelper.find_best_match_model(query)
        self.assertEqual(match, "SDXL_v1.0.safetensors")
        self.assertEqual(score, 1.0)
        self.assertIn("Exact match", log)

    def test_exact_match_no_extension(self) -> None:
        """Test for exact match without extension"""
        query = "SDXL_v1.0"
        match, score, log = MetadataHelper.find_best_match_model(query)
        self.assertEqual(match, "SDXL_v1.0.safetensors")
        self.assertEqual(score, 1.0)
        self.assertIn("Exact match", log)

    def test_fuzzy_match_version_diff(self) -> None:
        """Fuzzy search for version differences, etc."""
        query = "RealVision_v5.0.safetensors"
        # RealVision_v4.0 and RealVision_v5.0 are very similar
        match, score, log = MetadataHelper.find_best_match_model(query)
        self.assertEqual(match, "RealVision_v4.0.safetensors")
        self.assertGreater(score, 0.8)
        self.assertIn("Best match", log)

    def test_fuzzy_match_case_and_symbol(self) -> None:
        """Differences in casing and symbols"""
        query = "Pony-Diffusion-V6-XL"
        match, score, log = MetadataHelper.find_best_match_model(query)
        # ponyDiffusionV6XL and Pony-Diffusion-V6-XL
        self.assertEqual(match, "ponyDiffusionV6XL.safetensors")
        self.assertGreater(score, 0.6)
        self.assertIn("Best match", log)

    def test_match_even_with_low_similarity(self) -> None:
        """Return the closest match even if similarity is low"""
        query = "Completely_Different_Model.safetensors"
        match, score, log = MetadataHelper.find_best_match_model(query)
        # Returns something (the one with the better score in this case)
        self.assertIsNotNone(match)
        self.assertIn("Best match", log)

    def test_path_handling(self) -> None:
        """Handling of paths including subdirectories"""
        query = "model_v2"
        match, score, log = MetadataHelper.find_best_match_model(query)
        self.assertEqual(match, "checkpoints\\subfolder\\model_v2.ckpt")
        self.assertEqual(score, 1.0)

    def test_calculate_similarity_values(self) -> None:
        """Confirm the values of the similarity calculation itself"""
        # Identical
        self.assertEqual(MetadataHelper.calculate_similarity("test", "test.safetensors"), 1.0)
        # One character difference (3 out of 4 characters match + 1 difference =
        # ratio depends on difflib implementation)
        score = MetadataHelper.calculate_similarity("model_v1", "model_v2")
        self.assertGreater(score, 0.8)


if __name__ == "__main__":
    unittest.main()
