# Meld Unified Loader (MeldUnifiedLoader)

A unified loader that handles Checkpoint loading and defines basic image generation parameters (prompts, resolution, sampling settings, etc.) in a single node.

## Overview

In standard ComfyUI workflows, `Load Checkpoint` nodes, prompt inputs, and sampling settings (inputs to KSampler) are often scattered.
This node allows you to manage model loading and key generation parameters in one place.
It also outputs settings as a dictionary called `base_settings`, which can be easily reused or unpacked by subsequent nodes (e.g., `Meld Settings Unpacker`).

## Connection

```
[Meld Unified Loader] +---> MODEL, CLIP, VAE ---> [KSampler / KSampler (Advanced)]
                      +---> positive, negative -> [KSampler / KSampler (Advanced)]
                      +---> base_settings ------> [Meld Settings Unpacker]
```

## Inputs

### Required

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **model_name** | `COMBO` | - | Select the Checkpoint model to use. |
| **positive** | `STRING` | "" | Enter the positive prompt (supports multiline). |
| **negative** | `STRING` | "" | Enter the negative prompt (supports multiline). |
| **seed** | `INT` | 0 | The seed value used for generation. |
| **steps** | `INT` | 20 | The number of sampling steps. |
| **cfg** | `FLOAT` | 8.0 | The CFG scale (Classifier Free Guidance) value. |
| **sampler_name** | `COMBO` | - | Select the sampler type (euler, dpmpp_2m, etc.). |
| **scheduler** | `COMBO` | - | Select the scheduler type (normal, karras, exponential, etc.). |
| **width** | `INT` | 512 | The width of the generated image. |
| **height** | `INT` | 512 | The height of the generated image. |

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **MODEL** | `MODEL` | The loaded model data. |
| **CLIP** | `CLIP` | The loaded CLIP model. |
| **VAE** | `VAE` | The loaded VAE. |
| **positive** | `STRING` | Outputs the input positive prompt as-is. |
| **negative** | `STRING` | Outputs the input negative prompt as-is. |
| **base_settings** | `BASE_SETTINGS` | A dictionary containing the input parameters (seed, steps, cfg, sampler, scheduler, width, height). |

## Usage & Mechanism

1.  **Centralized Management**: You can complete the basic settings required for generation with just this node.
2.  **Reuse Settings**: Connect the `base_settings` output to `Meld Settings Unpacker` to unpack and use parameters individually elsewhere. This makes it easy to synchronize settings in complex workflows.
3.  **Difference from Checkpoint Loader**: Unlike the standard `Load Checkpoint` node, it internally optimizes the loading of VAE and CLIP (using logic similar to `load_checkpoint_guess_config`).

## Integration with Image Manager

By using Meld's Image Manager, you can read parameters from the metadata of saved images and add a configured `Meld Unified Loader` node to your workflow.

1.  **Open Image Manager**: Open the Image Manager from the left sidebar.
2.  **Open Image Menu**: Click the menu icon (︙) on the target image card.
3.  **Select "Add Unified Loader"**: Select "Add Unified Loader" from the menu.
4.  **Add Node**: A `Meld Unified Loader` node with the generation parameters (prompt, model, seed, etc.) of that image filled in will be added to the workflow.

This makes it easy to quickly reproduce past generation settings or adjust them for regeneration.
