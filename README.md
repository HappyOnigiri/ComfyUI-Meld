# ComfyUI-Meld-Flow

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![ComfyUI](https://img.shields.io/badge/ComfyUI-Registry-green)](https://registry.comfy.org/)

[Japanese README](README_ja.md)

**Meld your workflow. Eliminate the spaghetti.**

`ComfyUI-Meld-Flow` is a suite of high-performance infrastructure nodes designed to streamline complex ComfyUI workflows. It aggregates multi-step logic--such as advanced prompt construction, metadata extraction, and adaptive image processing--into single, atomic operations.

Designed for stability, security, and zero-dependency hell.

---

## Key Features

* **Workflow De-cluttering**: Replaces dozens of primitive nodes with a single "Meld" node, significantly reducing canvas noise.
* **Zero Dependency Hell**: Works out-of-the-box using standard libraries. No external `pip install` required.
* **Privacy-Focused Metadata Handling**: Extracts only generation data, naturally ignoring private EXIF fields.
* **Scoped File Loading**: Reads files exclusively from the specified directory and its subdirectories.
* **Advanced Prompting**: A powerful engine that handles file-based wildcards, dynamic weights, and automatic negative prompt extraction.

---

## Node Usage: Meld Prompt Constructor

This node is the heart of workflow organization. It allows for dynamic prompt generation with a sophisticated randomization engine.

### Random Prompt Syntax

You can use the following syntax directly in the text input or within your `.txt` files:

* **Simple Choice**: `{boy|girl|dog}`
  * Randomly selects one of the items.
* **Weighted Choice**: `{0.1::rare|common}`
  * The value before `::` is the probability weight (Default: 1.0). In this example, "rare" is much less likely to be chosen.
* **Dynamic Negative Extraction**: `-monochrome` or `-(bad quality:1.2)`
  * Any word starting with a hyphen `-` is **automatically moved to the Negative Prompt output**, and the hyphen is removed.

**Outputs:**
* **positive_prompt**: Combined prompt after processing logic.
* **negative_prompt**: Extracted negative keywords (from hyphen `-` syntax).

<details>
<summary><b>Click to see Advanced Syntax & File Rules</b></summary>

#### File & Pattern Rules

* **Directory**: Specify the folder where your `.txt` files are stored.
* **File Pattern**: Filters files (e.g., `*.txt`). Files starting with `_` are ignored.
* **Selection Method**:
  * `random`: Picks a random line from each file.
  * `sequential`: Picks a line based on the `seed`.
* **Use Break**: If enabled, joins prompts from different files using the `BREAK` keyword.

#### Commenting System

You can keep your prompt files organized with standard comment syntax:

* `// comment` or `# comment`: Single-line comments.
* `/* comment */`: Multi-line block comments.

</details>

---

## Node Usage: Meld Auto-Exposure

Provides professional-grade luminance correction to stabilize your generations.

* **Analyze & Adjust**: Automatically analyzes image luminance and adjusts brightness/contrast to optimal levels.
* **Production Ready**: Perfect for pre-processing images for ControlNet or img2img pipelines where lighting consistency is key.

---

## Installation

### Option 1: Comfy Registry (Recommended)

```bash
comfy node install nodemeld/comfyui-meld-flow
```

### Option 2: Manual Clone

```bash
cd custom_nodes
git clone https://github.com/NodeMeld/ComfyUI-Meld-Flow.git
```

---

## Security & Privacy

We prioritize system safety:

* **Scoped File Access**: Reads files exclusively from the specified directory and its subdirectories. Please ensure directory permissions are managed appropriately at the system level.
* **Selective Metadata Extraction**: When extracting data from images, we focus only on generation-related tags (workflow, prompt, etc.). Private EXIF data like GPS coordinates are naturally ignored as they are not part of our extraction logic.

## License

This project is licensed under the **Apache License 2.0**. It includes explicit patent grants, making it safe for both individual and enterprise use.

---

**Author**: [NodeMeld](https://github.com/NodeMeld)

---
