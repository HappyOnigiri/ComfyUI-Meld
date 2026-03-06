# Meld Save Image (MeldSaveImage)

A highly functional save node that saves generated images and automatically registers them into the Image Manager database.

In addition to extracting and saving metadata such as prompts, workflows, and model information, it uses the image's perceptual hash (pHash) to automatically infer the "parent image" (source image) and build a lineage tree.

## Inputs

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **images** | `IMAGE` | - | The image data to save (`[Batch, H, W, C]`). |
| **filename_prefix** | `STRING` | `%date:yyyy-MM-dd-HH-mm-ss%` | The file name prefix. Date formatting (e.g., `%date:yyyy-MM-dd%`) is supported. |
| **extension** | `COMBO` | `png` | The save format (`png`, `webp`). |
| **quality** | `INT` | `90` | The image save quality (1-100). Primarily used for the `webp` format. |

### Optional

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **origin_image** | `IMAGE` | - | Connect the source image (e.g., for img2img) to explicitly specify it as the "parent". The node calculates the pHash of the input and links to the closest matching image in the database. |
| **positive** | `STRING` | - | The positive prompt. Usually connected from [Meld Image Loader](./MeldImageLoader.md) or [Meld Prompt Constructor](./MeldPromptConstructor.md), but manual input is also possible. Saved as metadata. |
| **negative** | `STRING` | - | The negative prompt. Saved as metadata. |
| **tags** | `STRING` | - | Tags to apply to the image. Multiple tags can be specified using comma separation (e.g., `girl, masterpiece, best quality`). |

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **images** | `IMAGE` | Passes through the saved images. Can be used for preview or subsequent processing. |

## Features

### 1. Automatic Database Registration
Upon saving an image, the following information is simultaneously recorded in the local SQLite database:
*   File path, Creation timestamp
*   Image resolution, File size
*   pHash, SHA256 hash values
*   Prompts (Positive/Negative)
*   Used Model (Checkpoint)
*   Workflow (Workflow JSON)

### 2. Automatic Parent Inference (Lineage)
When performing img2img or upscaling, the "parent-child relationship" between the source and generated images is automatically recorded.
*   **Automatic Mode**: If `origin_image` is not connected, the node infers the parent based on visual similarity (pHash) to recently generated images.
*   **Manual Mode**: If `origin_image` is connected, the node explicitly searches for and links that image as the parent.

### 3. Tag Inheritance
Depending on settings, tags applied to the parent image can be automatically inherited by the child image. This reduces the effort of tagging during img2img iterations.
