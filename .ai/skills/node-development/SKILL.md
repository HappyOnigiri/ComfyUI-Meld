---
name: node-development
description: >
  ComfyUI custom node development rules for Python.
  Reference when editing files under meld/ or __init__.py.
---

# ComfyUI Custom Node Development Rules

You are an expert Python developer specializing in **ComfyUI Custom Nodes**.
When writing code, you must strictly adhere to the ComfyUI architecture and API standards.
Do NOT write generic Python scripts; always structure code as a ComfyUI Node Class.

## 1. Node Class Structure (Mandatory)

Every node must be a Python class with the following specific attributes and methods:

- **@classmethod INPUT_TYPES(s)**:
  - Must return a dictionary with keys: `"required"`, `"optional"`, and `"hidden"`.
  - Values must be defined using ComfyUI widget specifications (see Data Types below).
  - Use `folder_paths` for loading models/images explicitly.
- **RETURN_TYPES**: A tuple of strings defining output types (e.g., `("IMAGE", "MASK")`).
- **RETURN_NAMES**: (Optional) A tuple of strings for UI display names of outputs.
- **FUNCTION**: A string matching the exact name of the processing method in the class.
- **CATEGORY**: A string defining the folder structure in the node menu (e.g., "MyNodes/Image").
- **Processing Method**: The method defined in `FUNCTION`. It must accept arguments matching the keys in `INPUT_TYPES`.

## 2. Critical Implementation Rules

### Return Values (Most Important)

- **ALWAYS return a tuple**, even if there is only one output.
  - Correct: `return (output_image,)`
  - Incorrect: `return output_image`

### Data Types & Widgets

- **Standard Types**: "IMAGE", "MASK", "LATENT", "MODEL", "CLIP", "VAE", "CONDITIONING".
- **Primitives**: "INT", "FLOAT", "STRING", "BOOLEAN".
- **Dropdowns**: Lists of strings (e.g., `["option1", "option2"]`).
- **Widget Config**: Use dictionaries for constraints.
  - Example: `{"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}`

### Tensor Shape Conventions

- **Images**: `[Batch, Height, Width, Channels]` (BHWC), range 0.0-1.0 (float32).
  - Use `torch.from_numpy` and `permute` if converting from standard libraries like PIL or OpenCV.
- **Masks**: `[Batch, Height, Width]`, range 0.0-1.0.

## 3. Code Snippets & Patterns

### Basic Node Template

```python
import torch


class ExampleNode:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "int_val": ("INT", {"default": 0, "min": 0, "max": 10}),
            },
            "optional": {},
            "hidden": {},
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("output_image",)
    FUNCTION = "process"
    CATEGORY = "Example/Category"

    def process(self, image, int_val):
        # Processing logic here
        # Remember: input image is a torch.Tensor [B, H, W, C]
        return (image,)
```

### Loading Resources (Models, LoRAs, Images)

Use `folder_paths` to access ComfyUI standard directories.

```python
import folder_paths


@classmethod
def INPUT_TYPES(s):
    return {
        "required": {
            "ckpt_name": (folder_paths.get_filename_list("checkpoints"),),
        },
        "optional": {},
        "hidden": {},
    }
```

### Converting PIL to ComfyUI Image (Tensor)

```python
import torch
import numpy as np


def pil2tensor(image):
    return torch.from_numpy(np.array(image).astype(np.float32) / 255.0).unsqueeze(0)
```

### Converting ComfyUI Image (Tensor) to PIL

```python
import numpy as np
from PIL import Image


def tensor2pil(image):
    return Image.fromarray(np.clip(255.0 * image.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))
```

## 4. Registration (`__init__.py`)

Always remind me to update `__init__.py` to export the node.

```python
from .my_node_file import MyNodeClass

NODE_CLASS_MAPPINGS = {"MyNodeUniqueName": MyNodeClass}

NODE_DISPLAY_NAME_MAPPINGS = {"MyNodeUniqueName": "My Cool Node Display Name"}
```

## 5. Prohibitions

- DO NOT use `argparse`. Inputs come from `INPUT_TYPES`.
- DO NOT use `cv2.imshow` or `plt.show`. Output images via `RETURN_TYPES`.
- DO NOT forget the trailing comma in single-item tuples.

## 6. Module Layout Safety

### Prohibiting Coexistence of Modules and Packages with the Same Name

**Prohibited Pattern**:

- Do not have both `meld/image_manager.py` (standalone file) and `meld/image_manager/` (package directory) simultaneously.

Reason:

- Import resolution becomes ambiguous, and **the unintended implementation may be loaded**.
- This leads to bugs such as defined endpoints not being registered or only one of the implementations functioning.

**Recommended Pattern**:

- If there are multiple roles (DB, API, nodes, etc.), **unify them into a package**:
  - `meld/image_manager/__init__.py`
  - `meld/image_manager/api.py`
  - `meld/image_manager/database.py`
  - `meld/image_manager/nodes.py`

### Use Explicit Import Paths

- In entry points like `__init__.py`, use **explicit import paths**.
  - ✅ `from .meld.meld_save_image.nodes import MeldSaveImage`
  - ❌ `from .meld.image_manager import MeldSaveImage` (Dangerous due to potential name conflicts)

## 7. Automatic Image Registration Pattern

- When registering images without using a custom node, monitor `api.addEventListener("executed", ...)` on the frontend.
  - Extract `filename`, `subfolder`, and `type` from `detail.output.images`.
  - Register via `api.fetchApi("/meld/register", { method: "POST", ... })`.

Note:

- The backend should handle `output`, `input`, and `temp` types, and **must implement path traversal countermeasures**.

## 8. API Response Format (Python side)

All API responses MUST follow a unified structure using the `ApiResponse` schema.

```python
from ...common.schemas import ApiResponse

# Success
return web.json_response(ApiResponse(success=True, data=result_data).to_dict())

# Success with count (e.g., list)
return web.json_response(ApiResponse(success=True, data=items, count=total_count).to_dict())

# Error
return web.json_response(ApiResponse(success=False, error="Error message").to_dict(), status=400)
```

Rules:

1. **Always wrap**: Never return a raw list or object. Always wrap in `ApiResponse`.
2. **Status Codes**:
   - `200 OK`: Success (even if data is empty).
   - `400 Bad Request`: Validation errors, invalid parameters.
   - `404 Not Found`: Resource not found.
   - `500 Internal Server Error`: Unexpected backend errors.
3. **Naming Convention**:
   - Use `snake_case` for all keys in the response JSON to stay consistent with Python dataclasses and database schema.

## 9. Documentation Updates (Mandatory)

When modifying custom node functionality (adding features or changing behavior), you MUST update the documentation.

- **Trigger**: User-visible functional changes or new features.
  (Not required for internal refactors, development-only guidance updates, bug fixes, or non-user-visible maintenance.)
- **Scope**: Update both Japanese (`docs/ja/`) and English (`docs/en/`) documentation.
- **Tool**: Use the `document-custom-node` skill to ensure correct formatting.
- **Location**: Documentation files are located in the `docs/` directory.
