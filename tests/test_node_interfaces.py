import sys
import unittest
from unittest.mock import MagicMock, patch

import numpy as np
import torch

# Mock ComfyUI dependencies
sys.modules["folder_paths"] = MagicMock()
sys.modules["comfy"] = MagicMock()
sys.modules["comfy.sd"] = MagicMock()
sys.modules["comfy.utils"] = MagicMock()
sys.modules["comfy.samplers"] = MagicMock()
sys.modules["nodes"] = MagicMock()

# Import test targets
from py.load_image_configs import (  # noqa: E402
    MeldImageLoader,
    MeldImageLoaderBatch,
    MeldSettingsUnpacker,
    MetadataHelper,
)


class TestNodeInterfaces(unittest.TestCase):
    def test_metadata_helper_has_extract_metadata(self) -> None:
        """Confirm that MetadataHelper has the extract_metadata method"""
        self.assertTrue(hasattr(MetadataHelper, "extract_metadata"))
        self.assertTrue(callable(MetadataHelper.extract_metadata))

    def test_extract_metadata_interface(self) -> None:
        """Confirm that the return type and count of extract_metadata are correct (currently 7)"""
        # Mock PIL.Image.open
        with patch("PIL.Image.open") as mock_open:
            mock_img = MagicMock()
            mock_img.info = {"workflow": "{}"}
            mock_img.getexif.return_value = {}
            mock_open.return_value = mock_img

            # Mock MetadataExtractor.extract_from_data and check return value
            # Since MetadataHelper is a Facade after refactoring, mock the implementation module
            mock_ret = ("pos", "neg", "model", "{}", "{}", "a1111", ["log1"])
            from py.load_image_configs.core.modules.metadata_extractor import MetadataExtractor

            with patch.object(MetadataExtractor, "extract_from_data", return_value=mock_ret):
                res = MetadataHelper.extract_metadata("fake_path.png")

                self.assertEqual(len(res), 7)
                self.assertEqual(res[0], "pos")
                self.assertEqual(res[1], "neg")
                self.assertEqual(res[2], "model")
                self.assertEqual(res[3], "{}")
                self.assertEqual(res[4], "{}")
                self.assertEqual(res[5], "a1111")
                self.assertIsInstance(res[6], str)

    def test_node_classes_structure(self) -> None:
        """Confirm that node classes have the structure expected by ComfyUI"""
        from typing import Any

        for node_class_raw in [MeldImageLoader, MeldImageLoaderBatch]:
            node_class: Any = node_class_raw
            with self.subTest(node_class=node_class):
                self.assertTrue(hasattr(node_class, "INPUT_TYPES"))
                self.assertTrue(hasattr(node_class, "RETURN_TYPES"))
                self.assertTrue(hasattr(node_class, "FUNCTION"))

                # Confirm the number of return values (RETURN_TYPES) is 8
                self.assertEqual(len(node_class.RETURN_TYPES), 8)
                self.assertEqual(len(node_class.RETURN_NAMES), 8)

                # Confirm the method specified by FUNCTION exists
                func_name = node_class.FUNCTION
                self.assertTrue(hasattr(node_class, func_name))

    def test_load_image_configs_call_interface(self) -> None:
        """Confirm that MeldImageLoader.load returns the correct format and count of outputs"""
        node = MeldImageLoader()

        # Mock dependencies
        # extract_metadata: pos, neg, model, wf_json, pr_json, a1111_text, log
        mock_meta = ("p", "n", "m", "{}", None, None, "log_meta")

        with (
            patch(
                "py.load_image_configs.meld_image_loader.nodes.folder_paths.get_annotated_filepath",
                return_value="fake.png",
            ),
            patch("py.load_image_configs.meld_image_loader.nodes.nodes.LoadImage") as mock_load_image_class,
            patch.object(MetadataHelper, "extract_metadata", return_value=mock_meta),
            patch.object(
                MetadataHelper,
                "find_and_load_checkpoint",
                return_value=("MODEL", "CLIP", "VAE", "ACTUAL_MODEL", "log_ckpt"),
            ),
        ):
            # Simulate return value of nodes.LoadImage().load_image
            mock_load_image_instance = MagicMock()
            # shape [B, H, W, C]
            dummy_image = torch.zeros((1, 512, 512, 3))
            mock_load_image_instance.load_image.return_value = (dummy_image, None)
            mock_load_image_class.return_value = mock_load_image_instance

            # Execute load method
            res_dict = node.load(image="fake.png")

            # Confirm that the return value is in dictionary format
            self.assertIsInstance(res_dict, dict)
            self.assertIn("ui", res_dict)
            self.assertIn("result", res_dict)

            res = res_dict["result"]
            # Confirm the number of return values (8)
            self.assertEqual(len(res), 8)

            # Confirm type and value of each item
            # ("IMAGE", "MODEL", "CLIP", "VAE", "positive", "negative", "summary", "base_settings")
            image, model, clip, vae, pos, neg, summary, base_settings = res

            self.assertIsInstance(image, torch.Tensor)
            self.assertEqual(model, "MODEL")
            self.assertEqual(clip, "CLIP")
            self.assertEqual(vae, "VAE")
            self.assertEqual(pos, "p")
            self.assertEqual(neg, "n")
            self.assertIsInstance(summary, str)
            self.assertIsInstance(base_settings, dict)

            # Check if information is included in the summary
            self.assertIn("log_meta", summary)
            self.assertIn("log_ckpt", summary)
            self.assertIn("[Model]", summary)

    def test_load_image_configs_batch_call_interface(self) -> None:
        """Confirm that MeldImageLoaderBatch.load_batch returns the correct format and count of outputs"""
        node = MeldImageLoaderBatch()

        # Simulate a directory with one or more image files
        with (
            patch("os.path.isdir", return_value=True),
            patch("os.listdir", return_value=["test1.png", "test2.jpg"]),
            patch("PIL.Image.open") as mock_open,
            patch("PIL.ImageOps.exif_transpose", side_effect=lambda x: x),
            patch.object(
                MetadataHelper, "extract_metadata", return_value=("p", "n", "m", "{}", None, None, "log_meta")
            ),
            patch.object(
                MetadataHelper,
                "find_and_load_checkpoint",
                return_value=("MODEL", "CLIP", "VAE", "ACTUAL_MODEL", "log_ckpt"),
            ),
        ):
            # Simulate return value of Image.open
            mock_img = MagicMock()
            # RGB 3-channel dummy image
            mock_img.convert.return_value = np.zeros((64, 64, 3), dtype=np.uint8)
            mock_open.return_value = mock_img

            # Execute load_batch
            res_dict = node.load_batch(directory_path="fake_dir", index=0, stop_at_limit=False)

            self.assertIsInstance(res_dict, dict)
            res = res_dict["result"]

            # Confirm the number of return values (8)
            self.assertEqual(len(res), 8)
            self.assertEqual(res[4], "p")  # positive
            self.assertEqual(res[1], "MODEL")
            self.assertIn("Batch Info", res[6])  # summary

    def test_unpack_base_settings(self) -> None:
        """Confirm that MeldSettingsUnpacker correctly unpacks the dictionary"""
        node = MeldSettingsUnpacker()
        settings = {
            "seed": 123,
            "steps": 30,
            "cfg": 7.5,
            "sampler_name": "dpmpp_2m",
            "scheduler": "karras",
            "width": 1024,
            "height": 1024,
        }
        res = node.unpack(settings)
        self.assertEqual(len(res), 7)
        self.assertEqual(res[0], 123)
        self.assertEqual(res[1], 30)
        self.assertEqual(res[2], 7.5)
        self.assertEqual(res[3], "dpmpp_2m")
        self.assertEqual(res[4], "karras")
        self.assertEqual(res[5], 1024)
        self.assertEqual(res[6], 1024)


if __name__ == "__main__":
    unittest.main()
