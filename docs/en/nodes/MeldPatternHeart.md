# Meld Infinite Heart Generator (MeldPatternHeart)

Automatically draws and places heart patterns on an image.
It supports various decoration styles, such as tiling in a grid or placing hearts along the boundaries (edges) of a mask. Useful for creating backgrounds or decorating around specific objects.

**Connection Image:**
`Image` -> **[Meld Infinite Heart Generator]** -> `Save Image`

## Input

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **image** | `IMAGE` | - | The base image on which the hearts will be drawn. |
| **size** | `INT` | `64` | **Heart Size** (px).<br>Specifies the size of the hearts (8 - 1024). |
| **opacity** | `FLOAT` | `1.0` | **Opacity** (0.0 - 1.0).<br>`1.0` is fully opaque. Lower values make the hearts transparent. |
| **padding** | `INT` | `0` | **Spacing Adjustment**.<br>Adjusts the gap between hearts. Positive values increase spacing, negative values create overlaps.<br>The grid step is calculated as `size + padding`. |
| **random_rotation** | `BOOLEAN` | `False` | **Random Rotation**.<br>If `True`, each heart will be drawn at a random angle. |
| **placement** | `COMBO` | `Inside` | **Placement Mode**.<br>Determines how hearts are distributed (see "About Placement Modes").<br>- `Inside`: Place only if fully inside the area<br>- `Overlap`: Place if partially overlapping the area<br>- `Edge`: Place along the boundary<br>- `Edge Inward`: Place along the boundary, facing inward |

### Optional

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **mask** | `MASK` | - | **Placement Mask**.<br>Used to restrict the area where hearts are placed. If not specified, the entire image is used. |

## Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **IMAGE** | `IMAGE` | The image with the heart patterns drawn on it. |

## Tips & Mechanism

- **About Placement Modes**:
  - **Inside**: Places hearts in a grid. Only draws hearts that are completely contained within the mask area (white pixels).
  - **Overlap**: Places hearts in a grid. Draws hearts if they partially touch the mask area.
  - **Edge**: Detects the contour (boundary) of the mask and places hearts along that line.
  - **Edge Inward**: Similar to `Edge`, but automatically rotates the hearts to face from the outside towards the inside. Effective for surrounding a character with hearts.

- **Tuning Tips**:
  - **Density**: Set `padding` to `0` or a negative value for dense packing, or a large positive value for sparse distribution.
  - **Edge Decoration**: Connect a `mask` and set `placement` to `Edge` or `Edge Inward` to decorate the perimeter of the masked subject.
