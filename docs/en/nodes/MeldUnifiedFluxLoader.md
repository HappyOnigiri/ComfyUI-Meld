# Meld Unified Flux Loader (MeldUnifiedFluxLoader)

A unified loader for Flux.1 (Dev/Schnell) that combines checkpoint loading and generation parameters in a single node.
It provides Flux-specific Guidance input and treats CFG as a fixed internal value.

**Connection Image:**
`Meld Unified Flux Loader` -> `Flux workflow (UNet/CLIP/VAE)`

## Input

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **model_name** | `COMBO` | - | Select the UNet model (`models/unet`). |
| **weight_dtype** | `COMBO` | - | UNet weight dtype (default / fp8, etc.). |
| **clip_name1** | `COMBO` | - | First CLIP model (e.g., t5xxl). |
| **clip_name2** | `COMBO` | - | Second CLIP model (e.g., clip_l). |
| **clip_type** | `COMBO` | - | CLIP type (`flux` for Flux). |
| **clip_device** | `COMBO` | - | Device setting for CLIP loading. |
| **vae_name** | `COMBO` | - | Select the VAE model. |
| **positive** | `STRING` | "" | Positive prompt input (multiline). |
| **seed** | `INT` | 0 | Seed value for generation. |
| **steps** | `INT` | 20 | Sampling steps. |
| **guidance** | `FLOAT` | 3.5 | Flux Guidance Scale (Distilled CFG). |
| **sampler_name** | `COMBO` | - | Sampler type (euler, dpmpp_2m, etc.). |
| **scheduler** | `COMBO` | - | Scheduler type (normal, karras, exponential, etc.). |
| **width** | `INT` | 1024 | Output image width. |
| **height** | `INT` | 1024 | Output image height. |

## Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **MODEL** | `MODEL` | Loaded model data. |
| **CLIP** | `CLIP` | Loaded CLIP model. |
| **VAE** | `VAE` | Loaded VAE. |
| **positive** | `STRING` | The input positive prompt is passed through. |
| **base_settings** | `BASE_SETTINGS` | Dictionary of seed/steps/guidance/sampler/scheduler/width/height (CFG fixed to 1.0, negative is empty). |

## Tips & Mechanism

- **Resolution Rounding**:
  width/height are rounded down to a multiple of 16 internally to avoid padding errors in Flux.

- **CFG and Negative**:
  CFG is fixed to 1.0 and negative is set to an empty string to match Flux usage.

- **Reuse Settings**:
  Connect `base_settings` to [Meld Settings Unpacker](./MeldSettingsUnpacker.md) to extract individual values.
