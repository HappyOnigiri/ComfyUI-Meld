from typing import Any

import comfy.samplers


class MeldSettingsUnpacker:
    @classmethod
    def INPUT_TYPES(cls) -> dict[str, Any]:
        return {"required": {"base_settings": ("BASE_SETTINGS",)}}

    RETURN_TYPES = (
        "INT",
        "INT",
        "FLOAT",
        comfy.samplers.KSampler.SAMPLERS,
        comfy.samplers.KSampler.SCHEDULERS,
        "INT",
        "INT",
        "FLOAT",
    )
    RETURN_NAMES = ("seed", "steps", "cfg", "sampler_name", "scheduler", "width", "height", "guidance")
    FUNCTION = "unpack"
    CATEGORY = "Meld/Utils"

    # --- Node Description ---
    DESCRIPTION = "Unpacks a BASE_SETTINGS dictionary into individual generation parameters (seed, steps, cfg, sampler, scheduler, width, height)."
    # ---------------------------

    def unpack(self, base_settings: dict[str, Any]) -> tuple[int, int, float, str, str, int, int, float]:
        if not isinstance(base_settings, dict):
            return (0, 20, 8.0, "euler", "normal", 512, 512, 3.5)

        return (
            base_settings.get("seed", 0),
            base_settings.get("steps", 20),
            base_settings.get("cfg", 8.0),
            base_settings.get("sampler_name", "euler"),
            base_settings.get("scheduler", "normal"),
            base_settings.get("width", 512),
            base_settings.get("height", 512),
            base_settings.get("guidance", 3.5),
        )
