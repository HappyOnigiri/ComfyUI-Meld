import torch
import torch.nn.functional as F


class MeldPixelate:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        return {
            "required": {
                "image": ("IMAGE",),
                "pixel_size": (
                    "INT",
                    {
                        "default": 16,
                        "min": 1,
                        "max": 256,
                        "step": 1,
                        "display": "number",
                        "tooltip": "The size of the pixel blocks (in pixels). Higher values create larger blocks.",
                    },
                ),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "pixelate"
    CATEGORY = "Meld/Sandbox"

    # --- Node Description ---
    DESCRIPTION = "Applies a pixelation effect (mosaic) to an image by downscaling and then upscaling.\nUseful for creating retro pixel art effects or censoring content.\nFeatures:\n- High-quality pixelation using area downscaling\n- Sharp edges using nearest neighbor upscaling"
    # ---------------------------

    def pixelate(self, image: torch.Tensor, pixel_size: int) -> tuple[torch.Tensor]:
        # image shape is [Batch, Height, Width, Channels]
        B, H, W, C = image.shape

        # 1. Calculate the target downscaled dimensions
        # Corresponds to IntMath (//) in JSON
        target_h = H // pixel_size
        target_w = W // pixel_size

        # Prevent dimension becoming 0
        target_h = max(1, target_h)
        target_w = max(1, target_w)

        # ComfyUI images are BHWC, but PyTorch interpolate expects BCHW
        img_permuted = image.permute(0, 3, 1, 2)

        # 2. Downscale using 'area' (Average pooling effect)
        # Corresponds to the first ImageScale (method: area) in JSON
        downscaled = F.interpolate(img_permuted, size=(target_h, target_w), mode="area")

        # 3. Upscale back to original size using 'nearest'
        # Corresponds to the second ImageScale (method: nearest-exact) in JSON
        # PyTorch's 'nearest' behaves identically to ComfyUI's 'nearest-exact'
        upscaled = F.interpolate(downscaled, size=(H, W), mode="nearest")

        # Permute back to BHWC
        result = upscaled.permute(0, 2, 3, 1)

        return (result,)
