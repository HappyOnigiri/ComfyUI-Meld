# Meld Auto Exposure (MeldAutoExposure)

A node that analyzes image brightness (luminance) and automatically applies gamma correction to approach a target brightness level.
It is useful for brightening generated images that are too dark, or conversely, toning down images that are too bright.

**Connection Image:**
`KSampler` -> `VAE Decode` -> **[Meld Auto Exposure]** -> `Save Image`

## Input

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **image** | `IMAGE` | - | The input image to correct. Supports batch input, where each image is analyzed and corrected individually. |
| **correction_strength** | `FLOAT` | `0.5` | **Correction Strength** (0.0 - 5.0).<br>Higher values apply stronger force to reach the target brightness.<br>At `0.0`, no correction is applied (gamma 1.0). Start around `0.5` and increase if the effect is too weak. |
| **target_brightness** | `FLOAT` | `0.5` | **Target Brightness** (0.1 - 0.9).<br>`0.5` is medium brightness.<br>Increase (e.g., 0.7) for brighter results, or decrease (e.g., 0.3) for darker results. |

### Optional

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **gamma_limit_min** | `FLOAT` | `0.2` | Minimum gamma limit. Prevents the image from being corrected to be extremely dark. |
| **gamma_limit_max** | `FLOAT` | `2.5` | Maximum gamma limit. Prevents the image from being corrected to be extremely washed out (white). |

## Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **image** | `IMAGE` | The brightness-corrected image. |
| **calculated_gamma** | `FLOAT` | The actual applied gamma value (calculated).<br>Returns the average for batch inputs. |
| **current_brightness** | `FLOAT` | The average luminance of the original image.<br>Returns the average for batch inputs. |

## Tips & Mechanism

- **Auto-Adjustment Logic**:
  Calculates the average luminance (Rec.601) of the image and derives a gamma value based on the difference from `target_brightness`.
  - If the original is **darker** than target → Corrects to be brighter.
  - If the original is **brighter** than target → Corrects to be darker.

- **Tuning Tips**:
  - First, set `target_brightness` to your preferred brightness level.
  - If the correction causes quality degradation (e.g., contrast is too harsh), lower the `correction_strength`.
  - Conversely, if the correction is insufficient, increase `correction_strength` or widen the limiter range (`gamma_limit_min/max`).
