# Meld Settings Unpacker (MeldSettingsUnpacker)

This utility node takes a dictionary data in `BASE_SETTINGS` format and unpacks it into individual parameters required for generation (seed, steps, resolution, etc.).

It is designed to be used in combination with nodes that output generation settings in a bundle, such as [Meld Unified Loader](./MeldUnifiedLoader.md) or [Meld Image Loader](./MeldImageLoader.md), helping to keep workflows clean and organized.

## Inputs

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **base_settings** | `BASE_SETTINGS` | - | A dictionary containing setting values. Typically connected from the output of nodes like [Meld Unified Loader](./MeldUnifiedLoader.md). |

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **seed** | `INT` | The seed value for generation. |
| **steps** | `INT` | The number of steps for generation. |
| **cfg** | `FLOAT` | The CFG (Classifier Free Guidance) scale. |
| **sampler_name** | `COMBO` | Sampler selection value compatible with KSampler inputs (e.g., `euler`, `dpmpp_2m`). |
| **scheduler** | `COMBO` | Scheduler selection value compatible with KSampler inputs (e.g., `normal`, `karras`). |
| **width** | `INT` | The width of the image. |
| **height** | `INT` | The height of the image. |
| **guidance** | `FLOAT` | Guidance value for Flux (Distilled CFG). |

## Default Behavior

If the input `base_settings` is not a dictionary, or if specific keys are missing, the following default values are used:

*   **seed**: 0
*   **steps**: 20
*   **cfg**: 8.0
*   **sampler_name**: "euler"
*   **scheduler**: "normal"
*   **width**: 512
*   **height**: 512
*   **guidance**: 3.5
