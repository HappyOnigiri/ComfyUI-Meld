class MeldSettingsUnpacker:
    @classmethod
    def INPUT_TYPES(cls) -> dict:
        return {"required": {"base_settings": ("BASE_SETTINGS",)}}

    RETURN_TYPES = ("INT", "INT", "FLOAT", "STRING", "STRING", "INT", "INT")
    RETURN_NAMES = ("seed", "steps", "cfg", "sampler_name", "scheduler", "width", "height")
    FUNCTION = "unpack"
    CATEGORY = "MeldFlow/Utils"

    def unpack(self, base_settings: dict) -> tuple[int, int, float, str, str, int, int]:
        if not isinstance(base_settings, dict):
            return (0, 20, 8.0, "euler", "normal", 512, 512)

        return (
            base_settings.get("seed", 0),
            base_settings.get("steps", 20),
            base_settings.get("cfg", 8.0),
            base_settings.get("sampler_name", "euler"),
            base_settings.get("scheduler", "normal"),
            base_settings.get("width", 512),
            base_settings.get("height", 512),
        )
