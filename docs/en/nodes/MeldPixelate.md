# Meld Instant Pixelate (MeldPixelate)

This node applies a pixelation effect (mosaic) to an image by downscaling it and then upscaling it back to its original size.
It reconstructs the image using pixel blocks of a specified size, which is useful for creating retro pixel art effects or censoring content with a mosaic.

**Connection Image:**
`Load Image` -> **[Meld Instant Pixelate]** -> `Save Image`

## Input

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **image** | `IMAGE` | - | The target image to process. Supports batch input [B, H, W, C]. |
| **pixel_size** | `INT` | `16` | **The size of the pixel blocks** (1 - 256).<br>Higher values create larger blocks, resulting in a coarser mosaic.<br>For example, a value of `16` means a 16x16 pixel area in the original image becomes a single large dot. |

### Optional

None

## Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **image** | `IMAGE` | The pixelated image. It is output at the same resolution as the original image. |

## Tips & Mechanism

- **High-Quality Pixelation (Area Downscaling)**:
  The node uses `area` interpolation (average pooling) for the downscaling step.
  This calculates the average color within each block to determine the dot's color, resulting in a cleaner pixel art look that preserves the original image's tones and features better than simple subsampling.

- **Sharp Edges (Nearest Upscaling)**:
  The node uses `nearest` neighbor interpolation for the upscaling step.
  This prevents blurring during the resize, maintaining the sharp, blocky edges characteristic of pixel art when restoring the image to its original resolution.

- **Usage Examples**:
  - **Pixel Art Style**: Set `pixel_size` to around 4-16 to achieve a retro game aesthetic.
  - **Privacy Protection**: Set `pixel_size` to a larger value (e.g., 32+) to use it as a mosaic for hiding faces or sensitive information (most effective when combined with masking).
