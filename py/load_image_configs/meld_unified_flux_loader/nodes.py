from typing import Any, cast

import comfy.samplers
import folder_paths


class MeldUnifiedFluxLoader:
    @classmethod
    def INPUT_TYPES(cls) -> dict[str, Any]:
        import nodes as comfy_nodes

        nodes_any = cast(Any, comfy_nodes)

        # Standard loaders
        unet_required = nodes_any.UNETLoader.INPUT_TYPES().get("required", {})
        clip_required = nodes_any.DualCLIPLoader.INPUT_TYPES().get("required", {})
        vae_required = nodes_any.VAELoader.INPUT_TYPES().get("required", {})

        # GGUF loaders (optional, might not be installed)
        unet_gguf_required = {}
        clip_gguf_required = {}

        # Custom nodes are in NODE_CLASS_MAPPINGS, not directly in the nodes module
        node_mappings = getattr(comfy_nodes, "NODE_CLASS_MAPPINGS", {})

        unet_gguf_class = node_mappings.get("UnetLoaderGGUF")
        if unet_gguf_class:
            unet_gguf_required = unet_gguf_class.INPUT_TYPES().get("required", {})

        clip_gguf_class = node_mappings.get("DualCLIPLoaderGGUF")
        if clip_gguf_class:
            clip_gguf_required = clip_gguf_class.INPUT_TYPES().get("required", {})

        # Merge UNet names (include both unet and checkpoints for maximum compatibility)
        # We also manually add .gguf files from the unet folder just in case
        unet_names = list(unet_required.get("unet_name", (folder_paths.get_filename_list("unet"),))[0])

        # Add all files from unet folder to ensure .gguf etc are included
        all_unet_files = folder_paths.get_filename_list("unet")
        for name in all_unet_files:
            if name not in unet_names:
                unet_names.append(name)

        ckpt_names = folder_paths.get_filename_list("checkpoints")
        for name in ckpt_names:
            if name not in unet_names:
                unet_names.append(name)

        if unet_gguf_required:
            gguf_names = unet_gguf_required.get("unet_name", ([],))[0]
            for name in gguf_names:
                if name not in unet_names:
                    unet_names.append(name)

        # Merge CLIP names
        clip_names = list(clip_required.get("clip_name1", (folder_paths.get_filename_list("clip"),))[0])

        # Add all files from clip folder to ensure .gguf etc are included
        all_clip_files = folder_paths.get_filename_list("clip")
        for name in all_clip_files:
            if name not in clip_names:
                clip_names.append(name)

        if clip_gguf_required:
            gguf_clip_names = clip_gguf_required.get("clip_name1", ([],))[0]
            for name in gguf_clip_names:
                if name not in clip_names:
                    clip_names.append(name)

        weight_dtype = unet_required.get("weight_dtype", (["default"],))
        clip_type = clip_required.get("type", (["flux"],))
        clip_device = clip_required.get("device", (["default"],))
        vae_name = vae_required.get("vae_name", (folder_paths.get_filename_list("vae"),))

        return {
            "required": {
                "model_name": (unet_names,),
                "weight_dtype": weight_dtype,
                "clip_name1": (clip_names,),
                "clip_name2": (clip_names,),
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
        "It automatically switches between standard loaders and GGUF loaders based on the file extension (.gguf).\n"
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
    ) -> tuple[Any, Any, Any, str, dict[str, Any]]:
        import nodes as comfy_nodes

        nodes_any = cast(Any, comfy_nodes)

        # 1. Load UNet (Auto-switch to GGUF if .gguf)
        if model_name.lower().endswith(".gguf"):
            # Check if GGUF loader is available
            node_mappings = getattr(comfy_nodes, "NODE_CLASS_MAPPINGS", {})
            unet_gguf_class = node_mappings.get("UnetLoaderGGUF")

            if unet_gguf_class:
                unet_loader = unet_gguf_class()
                unet_func = getattr(unet_loader, unet_loader.FUNCTION)
                model = unet_func(model_name)[0]
            else:
                # Fallback to standard UNETLoader if GGUF loader is not found
                # This might still fail if UNETLoader doesn't support .gguf,
                # but it's better than a hard RuntimeError.
                unet_loader = nodes_any.UNETLoader()
                unet_func = getattr(unet_loader, unet_loader.FUNCTION)
                model = unet_func(model_name, weight_dtype)[0]
        elif any(model_name.lower().endswith(ext) for ext in [".safetensors", ".ckpt"]):
            # If it's a full checkpoint, we should ideally use CheckpointLoaderSimple,
            # but for Flux we usually expect UNet. However, if a user selects a checkpoint,
            # we try to load it as a checkpoint to be safe.
            import comfy.sd

            ckpt_path = folder_paths.get_full_path("checkpoints", model_name)
            if ckpt_path:
                out = comfy.sd.load_checkpoint_guess_config(
                    ckpt_path,
                    output_vae=True,
                    output_clip=True,
                    embedding_directory=folder_paths.get_folder_paths("embeddings"),
                )
                model = out[0]
            else:
                # Fallback to UNETLoader if not found in checkpoints
                unet_loader = nodes_any.UNETLoader()
                unet_func = getattr(unet_loader, unet_loader.FUNCTION)
                model = unet_func(model_name, weight_dtype)[0]
        else:
            unet_loader = nodes_any.UNETLoader()
            unet_func = getattr(unet_loader, unet_loader.FUNCTION)
            model = unet_func(model_name, weight_dtype)[0]

        # 2. Load CLIP (Auto-switch to GGUF if .gguf)
        if clip_name1.lower().endswith(".gguf") or clip_name2.lower().endswith(".gguf"):
            # Check if GGUF loader is available
            node_mappings = getattr(comfy_nodes, "NODE_CLASS_MAPPINGS", {})
            clip_gguf_class = node_mappings.get("DualCLIPLoaderGGUF")

            if clip_gguf_class:
                clip_loader = clip_gguf_class()
                clip_func = getattr(clip_loader, clip_loader.FUNCTION)
                # DualCLIPLoaderGGUF usually takes (clip_name1, clip_name2, type)
                clip = clip_func(clip_name1, clip_name2, clip_type)[0]
            else:
                # Fallback to standard DualCLIPLoader
                clip_loader = nodes_any.DualCLIPLoader()
                clip_func = getattr(clip_loader, clip_loader.FUNCTION)
                clip = clip_func(
                    clip_name1,
                    clip_name2,
                    clip_type,
                    clip_device,
                )[0]
        else:
            clip_loader = nodes_any.DualCLIPLoader()
            clip_func = getattr(clip_loader, clip_loader.FUNCTION)
            clip = clip_func(
                clip_name1,
                clip_name2,
                clip_type,
                clip_device,
            )[0]

        # 3. Load VAE
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
