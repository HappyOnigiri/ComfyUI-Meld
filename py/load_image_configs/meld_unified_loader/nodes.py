from typing import Any

import comfy.samplers
import folder_paths


class MeldUnifiedLoader:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        return {
            "required": {
                "model_name": (folder_paths.get_filename_list("checkpoints"),),
                "positive": ("STRING", {"default": "", "multiline": True}),
                "negative": ("STRING", {"default": "", "multiline": True}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
                "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0, "step": 0.1, "round": 0.01}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
                "width": ("INT", {"default": 512, "min": 1, "max": 16384, "step": 8}),
                "height": ("INT", {"default": 512, "min": 1, "max": 16384, "step": 8}),
            }
        }

    RETURN_TYPES = ("MODEL", "CLIP", "VAE", "STRING", "STRING", "BASE_SETTINGS")
    RETURN_NAMES = ("MODEL", "CLIP", "VAE", "positive", "negative", "base_settings")
    FUNCTION = "load_and_process"
    CATEGORY = "Meld/Loaders"

    def load_and_process(
        self,
        model_name: str,
        positive: str,
        negative: str,
        seed: int,
        steps: int,
        cfg: float,
        sampler_name: str,
        scheduler: str,
        width: int,
        height: int,
    ) -> tuple[Any, Any, Any, str, str, dict]:
        import comfy.sd

        # 1. Load model (Logic similar to standard CheckpointLoaderSimple)
        ckpt_path = folder_paths.get_full_path("checkpoints", model_name)
        out = comfy.sd.load_checkpoint_guess_config(
            ckpt_path,
            output_vae=True,
            output_clip=True,
            embedding_directory=folder_paths.get_folder_paths("embeddings"),
        )

        base_settings = {
            "seed": seed,
            "steps": steps,
            "cfg": cfg,
            "sampler_name": sampler_name,
            "scheduler": scheduler,
            "width": width,
            "height": height,
        }

        # Return MODEL, CLIP, VAE, positive, negative, base_settings
        return (out[0], out[1], out[2], positive, negative, base_settings)
