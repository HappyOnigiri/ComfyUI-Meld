# ComfyUI-Meld

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![ComfyUI](https://img.shields.io/badge/ComfyUI-Registry-green)](https://registry.comfy.org/)

[Japanese README](README.ja.md)

**Turn your generated images into a powerful asset database.**

ComfyUI-Meld transforms chaotic workflows into an organized, reusable pipeline. It automatically captures prompts, settings, and lineage, ensuring no generation is ever lost.

With the Meld Image Manager, you can unify search, tagging, and lineage tracking directly within ComfyUI. Find your best result, inspect its DNA, and iterate instantly.

---

## Image Manager (Meld Image Manager)

The Image Manager is an integrated image management system added to ComfyUI's sidebar. It speeds up browsing, searching, and organizing generated images, and makes it smoother to reuse past work back in your workflows.

- **Gallery**: Browse and organize generated images quickly
- **Detail Viewer**: Inspect and edit prompts, models, generation settings, notes, and tags
- **Advanced Search**: Filter flexibly by prompt/tags/date/model name and more
- **Lineage Tracking**: Visualize parent-child relationships such as img2img
- **Workflow Integration**: One-click load images and assist restoring settings and workflows

By default, **output images are automatically registered** when a workflow execution completes. If you additionally use `Meld Save Image`, you can enhance management with features like automatic tagging and explicitly specifying a source (parent) image.

For detailed usage, shortcuts, and search syntax, see [`docs/en/ImageManager.md`](./docs/en/ImageManager.md).

---

## Included Nodes (9 total)

See `docs/en/nodes/` for details.

| Node | Role (Summary) | Docs |
| :--- | :--- | :--- |
| **Meld Prompt Constructor** | Build prompts from text files with dynamic syntax and automatically split negatives | [`docs/en/nodes/MeldPromptConstructor.md`](./docs/en/nodes/MeldPromptConstructor.md) |
| **Meld Auto Exposure** | Analyze luminance and apply automatic gamma correction toward a target brightness | [`docs/en/nodes/MeldAutoExposure.md`](./docs/en/nodes/MeldAutoExposure.md) |
| **Meld Save Image** | Save images and auto-register to Image Manager (metadata, pHash-based lineage, tagging) | [`docs/en/nodes/MeldSaveImage.md`](./docs/en/nodes/MeldSaveImage.md) |
| **Meld Unified Loader** | Combine checkpoint loading and base generation parameters, output reusable `base_settings` | [`docs/en/nodes/MeldUnifiedLoader.md`](./docs/en/nodes/MeldUnifiedLoader.md) |
| **Meld Settings Unpacker** | Unpack a `BASE_SETTINGS` dict into seed/steps/cfg/resolution and other parameters | [`docs/en/nodes/MeldSettingsUnpacker.md`](./docs/en/nodes/MeldSettingsUnpacker.md) |
| **Meld Image Loader** | Load an image, extract prompt/settings from embedded metadata, and attempt model loading | [`docs/en/nodes/MeldImageLoader.md`](./docs/en/nodes/MeldImageLoader.md) |
| **Meld Image Loader Batch** | Load images from a directory sequentially by index (including metadata analysis/restoration) | [`docs/en/nodes/MeldImageLoaderBatch.md`](./docs/en/nodes/MeldImageLoaderBatch.md) |
| **Meld Pixelate (Instant Pixelate)** | Pixelate via downsample then nearest-neighbor upscale (mosaic / pixel art) | [`docs/en/nodes/MeldPixelate.md`](./docs/en/nodes/MeldPixelate.md) |
| **Meld Pattern Heart (Infinite Heart Generator)** | Decorate by auto-placing heart patterns on grids, edges, and more | [`docs/en/nodes/MeldPatternHeart.md`](./docs/en/nodes/MeldPatternHeart.md) |

---

## Installation

### Recommended: ComfyUI Manager or Registry

In ComfyUI Manager's search, type **"Meld"** and install it.
Or run the following command from the CLI:

```bash
comfy node install NodeMeld/ComfyUI-Meld

```

### Manual Installation

Run the following commands under your `custom_nodes` directory, then restart ComfyUI:

```bash
git clone https://github.com/HappyOnigiri/ComfyUI-Meld.git
cd ComfyUI-Meld
pip install -r requirements.txt

```

---

## Specs & Requirements

- **Supported OS**: Windows / Linux / macOS
- **Python**: 3.10+ recommended
- **License**: Apache License 2.0 (commercial use and modifications allowed)

---

## Privacy

We extract **only generation-related information** (prompt/workflow/etc.) from image metadata, and do not read private EXIF data such as GPS. File loading is limited to **the directory you specify and its subdirectories** (we recommend managing permissions appropriately).

---

## Support & Feedback

We welcome all kinds of feedback, including bug reports, feature requests, and questions!
Please feel free to open an issue on GitHub.

* **Bug Report**: Please include error logs or screenshots if possible.
* **Feature Request**: We would love to hear your ideas for new features or improvements.

> **Notice:** Please note that the developer is Japanese. I will respond to your issues using **machine translation**. To ensure smooth communication, please try to use **simple English** and attach **screenshots or logs** whenever possible.

[Open GitHub Issues](https://github.com/HappyOnigiri/ComfyUI-Meld/issues)

---

**Developed by**: [HappyOnigiri](https://github.com/HappyOnigiri)

---
