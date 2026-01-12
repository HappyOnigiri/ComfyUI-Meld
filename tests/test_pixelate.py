import os
import sys
import unittest

import torch

# Add project root to path to enable imports
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from py.pixelate.nodes import MeldPixelate


class TestPixelate(unittest.TestCase):
    def setUp(self) -> None:
        self.node = MeldPixelate()

    def test_node_interface(self) -> None:
        """Confirm that the node interface matches ComfyUI's expectations"""
        self.assertTrue(hasattr(MeldPixelate, "INPUT_TYPES"))
        self.assertTrue(hasattr(MeldPixelate, "RETURN_TYPES"))
        self.assertTrue(hasattr(MeldPixelate, "FUNCTION"))
        self.assertTrue(hasattr(MeldPixelate, "CATEGORY"))

        inputs = MeldPixelate.INPUT_TYPES()
        self.assertIn("required", inputs)
        self.assertIn("image", inputs["required"])
        self.assertIn("mosaic_scale", inputs["required"])

        self.assertEqual(MeldPixelate.RETURN_TYPES, ("IMAGE",))
        self.assertEqual(MeldPixelate.FUNCTION, "apply_mosaic")

    def test_apply_mosaic_basic(self) -> None:
        """Confirm that basic mosaic processing works correctly and maintains the original size"""
        # [Batch, Height, Width, Channels]
        dummy_image = torch.zeros((1, 64, 64, 3))
        # Create a single white point in the center
        dummy_image[0, 32, 32, :] = 1.0

        mosaic_scale = 8
        (result,) = self.node.apply_mosaic(dummy_image, mosaic_scale)

        # Confirm that the output size is the same as the input size
        self.assertEqual(result.shape, dummy_image.shape)
        self.assertIsInstance(result, torch.Tensor)

        # Confirm that the white point at 32,32 has expanded to an 8x8 block due to mosaic processing
        # 32//8 = 4, so check the block range
        block_start_h = (32 // mosaic_scale) * mosaic_scale
        block_end_h = block_start_h + mosaic_scale
        block_start_w = (32 // mosaic_scale) * mosaic_scale
        block_end_w = block_start_w + mosaic_scale

        # Confirm that values inside the block are greater than 0 (white point is dispersed)
        # Due to 'area' interpolation, a value of 1/64 (for scale=8) should spread within the block
        self.assertTrue(torch.all(result[0, block_start_h:block_end_h, block_start_w:block_end_w, :] > 0))
        # Confirm that areas outside the block are 0
        self.assertTrue(torch.all(result[0, 0:block_start_h, :, :] == 0))
        self.assertTrue(torch.all(result[0, block_end_h:, :, :] == 0))

    def test_apply_mosaic_batch(self) -> None:
        """Confirm that batch processing is handled correctly"""
        batch_size = 2
        dummy_images = torch.rand((batch_size, 32, 32, 3))
        mosaic_scale = 4

        (result,) = self.node.apply_mosaic(dummy_images, mosaic_scale)

        self.assertEqual(result.shape, (batch_size, 32, 32, 3))

    def test_apply_mosaic_min_scale(self) -> None:
        """Confirm that there is no substantial change when mosaic_scale=1 (due to nearest-exact properties)"""
        dummy_image = torch.rand((1, 16, 16, 3))
        mosaic_scale = 1

        (result,) = self.node.apply_mosaic(dummy_image, mosaic_scale)

        # Should be identical if scale=1
        self.assertTrue(torch.allclose(dummy_image, result))

    def test_apply_mosaic_large_scale(self) -> None:
        """Confirm that it results in 1x1 without error even if mosaic_scale is larger than the image size"""
        dummy_image = torch.rand((1, 8, 8, 3))
        mosaic_scale = 16  # Larger than image size

        (result,) = self.node.apply_mosaic(dummy_image, mosaic_scale)

        self.assertEqual(result.shape, (1, 8, 8, 3))
        # All pixels should have the same value (average)
        first_pixel = result[0, 0, 0, :]
        for h in range(8):
            for w in range(8):
                self.assertTrue(torch.allclose(result[0, h, w, :], first_pixel))


if __name__ == "__main__":
    unittest.main()
