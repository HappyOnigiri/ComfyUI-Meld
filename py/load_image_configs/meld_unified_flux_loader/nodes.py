from typing import Any, cast

import comfy.samplers
import folder_paths


class MeldUnifiedFluxLoader:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        import nodes as comfy_nodes

        nodes_any = cast(Any, comfy_nodes)

        unet_required = nodes_any.UNETLoader.INPUT_TYPES().get("required", {})
        clip_required = nodes_any.DualCLIPLoader.INPUT_TYPES().get("required", {})
        vae_required = nodes_any.VAELoader.INPUT_TYPES().get("required", {})

        unet_names = unet_required.get("unet_name", (folder_paths.get_filename_list("unet"),))
        weight_dtype = unet_required.get("weight_dtype", (["default"],))
        clip_name1 = clip_required.get("clip_name1", (folder_paths.get_filename_list("clip"),))
        clip_name2 = clip_required.get("clip_name2", (folder_paths.get_filename_list("clip"),))
        clip_type = clip_required.get("type", (["flux"],))
        clip_device = clip_required.get("device", (["default"],))
        vae_name = vae_required.get("vae_name", (folder_paths.get_filename_list("vae"),))

        return {
            "required": {
                "model_name": unet_names,
                "weight_dtype": weight_dtype,
                "clip_name1": clip_name1,
                "clip_name2": clip_name2,
                "clip_type": clip_type,
                "clip_device": clip_device,
                "vae_name": vae_name,
                "positive": ("STRING", {"default": "", "multiline": True}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
                "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "guidance": (
                    "FLOAT",
                    {"default": 3.5, "min": 0.0, "max": 100.0, "step": 0.1, "round": 0.01},
                ),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                "width": ("INT", {"default": 1024, "min": 1, "max": 16384, "step": 8}),
                "height": ("INT", {"default": 1024, "min": 1, "max": 16384, "step": 8}),
            }
        }

    RETURN_TYPES = ("MODEL", "CLIP", "VAE", "STRING", "BASE_SETTINGS")
    RETURN_NAMES = ("MODEL", "CLIP", "VAE", "positive", "base_settings")
    FUNCTION = "load_and_process"
    CATEGORY = "Meld/Loaders"

    # --- Node Description ---
    DESCRIPTION = (
        "A Flux-specific unified loader that handles UNet/CLIP/VAE loading and defines basic generation parameters.\n"
        "It outputs a base_settings dictionary for reuse or unpacking (e.g., Meld Settings Unpacker)."
    )
    # ---------------------------

    def load_and_process(
        self,
        model_name: str,
        weight_dtype: str,
        clip_name1: str,
        clip_name2: str,
        clip_type: str,
        clip_device: str,
        vae_name: str,
        positive: str,
        seed: int,
        steps: int,
        guidance: float,
        sampler_name: str,
        scheduler: str,
        width: int,
        height: int,
    ) -> tuple[Any, Any, Any, str, dict]:
        import nodes as comfy_nodes

        nodes_any = cast(Any, comfy_nodes)

        # 1. Load UNet / CLIP / VAE (Flux uses UNET + DualCLIP + VAE)
        unet_loader = nodes_any.UNETLoader()
        unet_func = getattr(unet_loader, unet_loader.FUNCTION)
        model = unet_func(model_name, weight_dtype)[0]

        clip_loader = nodes_any.DualCLIPLoader()
        clip_func = getattr(clip_loader, clip_loader.FUNCTION)
        clip = clip_func(
            clip_name1,
            clip_name2,
            clip_type,
            clip_device,
        )[0]

        vae_loader = nodes_any.VAELoader()
        vae_func = getattr(vae_loader, vae_loader.FUNCTION)
        vae = vae_func(vae_name)[0]

        # Requirement: Round resolution down to a multiple of 16 to avoid padding errors.
        width_rounded = max(16, (width // 16) * 16)
        height_rounded = max(16, (height // 16) * 16)

        base_settings = {
            "seed": seed,
            "steps": steps,
            "guidance": guidance,
            "cfg": 1.0,
            "sampler_name": sampler_name,
            "scheduler": scheduler,
            "width": width_rounded,
            "height": height_rounded,
            "negative": "",
        }

        # Return MODEL, CLIP, VAE, positive, base_settings
        return (model, clip, vae, positive, base_settings)
