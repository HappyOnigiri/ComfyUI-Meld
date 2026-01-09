import torch.nn.functional as F


class MeldPixelate:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "mosaic_scale": ("INT", {
                    "default": 16,
                    "min": 1,
                    "max": 256,
                    "step": 1,
                    "display": "number",
                    "tooltip": "The size of the pixel blocks. Higher values = larger blocks."
                }),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "apply_mosaic"
    CATEGORY = "MeldFlow/Image"

    def apply_mosaic(self, image, mosaic_scale):
        # image shape is [Batch, Height, Width, Channels]
        B, H, W, C = image.shape

        # 1. Calculate the target downscaled dimensions
        # Corresponds to IntMath (//) in JSON
        target_h = H // mosaic_scale
        target_w = W // mosaic_scale

        # Prevent dimension becoming 0
        target_h = max(1, target_h)
        target_w = max(1, target_w)

        # ComfyUI images are BHWC, but PyTorch interpolate expects BCHW
        img_permuted = image.permute(0, 3, 1, 2)

        # 2. Downscale using 'area' (Average pooling effect)
        # Corresponds to the first ImageScale (method: area) in JSON
        downscaled = F.interpolate(
            img_permuted,
            size=(target_h, target_w),
            mode="area"
        )

        # 3. Upscale back to original size using 'nearest'
        # Corresponds to the second ImageScale (method: nearest-exact) in JSON
        # PyTorch's 'nearest' behaves identically to ComfyUI's 'nearest-exact'
        upscaled = F.interpolate(
            downscaled,
            size=(H, W),
            mode="nearest"
        )

        # Permute back to BHWC
        result = upscaled.permute(0, 2, 3, 1)

        return (result,)

NODE_CLASS_MAPPINGS = {
    "MeldPixelate": MeldPixelate
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldPixelate": "Meld Pixelate"
}
