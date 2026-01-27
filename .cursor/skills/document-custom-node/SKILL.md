---
name: document-custom-node
description: Generates Japanese (ja) and English (en) documentation for ComfyUI custom nodes following the project's standard format. Use when the user asks to document a node or create a README for a node.
---

# Document Custom Node

This skill generates user-facing documentation for ComfyUI custom nodes in both Japanese and English.

## Workflow

1.  **Analyze Implementation**:
    *   Read the node's Python file thoroughly.
    *   **CRITICAL**: Analyze the processing logic in the `FUNCTION` method carefully to understand exactly how inputs affect outputs and if there are any non-obvious side effects or constraints.
    *   Identify `INPUT_TYPES` (required/optional), `RETURN_TYPES`, `RETURN_NAMES`.
    *   Check `NODE_DISPLAY_NAME_MAPPINGS` in `__init__.py` (if available) for the display name.

2.  **Draft Content (Japanese)**:
    *   **Title**: Use "Display Name (ClassName)".
    *   **Description**: Summarize functionality for an end-user.
    *   **Connection Image**: Visualize where the node fits in a workflow (e.g., `Loader` -> `[Target]` -> `Sampler`).
    *   **Inputs**: Create tables for Required and Optional inputs. Include Name, Type, Default, and Description.
    *   **Outputs**: Create a table for outputs.
    *   **Tips/Mechanism**: Explain how to use it effectively, based on the code logic.

3.  **Draft Content (English)**:
    *   Translate the Japanese content to English, maintaining the same structure and tone.
    *   Ensure technical terms match ComfyUI conventions.

4.  **Generate Files**:
    *   **Japanese**: `docs/ja/nodes/<NodeClassName>.md`
    *   **English**: `docs/en/nodes/<NodeClassName>.md`
    *   Format: Use the template in [TEMPLATE.md](TEMPLATE.md) (adapt for Japanese).

## Guidelines

*   **Languages**: Create both Japanese (`ja`) and English (`en`) versions.
*   **Tone**: User-friendly, helpful, not purely technical.
*   **Tables**: Ensure markdown tables are well-formatted.
*   **Defaults**: Explicitly list default values.
*   **Type Safety**: Use correct ComfyUI types (IMAGE, FLOAT, INT, MODEL, etc.).
*   **Accuracy**: Ensure that all descriptions of parameters and node behavior are strictly based on the code implementation. Do not hallucinate features or behaviors that are not present in the code.

## Example Output

See `docs/ja/nodes/MeldAutoExposure.md` for a reference implementation.
