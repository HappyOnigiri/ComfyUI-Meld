import os

from .py.auto_exposure import MeldAutoExposure
from .py.image_manager import MeldNexus
from .py.load_image_configs import MeldImageLoader, MeldImageLoaderBatch, MeldSettingsUnpacker
from .py.pattern_heart import MeldPatternHeart
from .py.pixelate import MeldPixelate
from .py.prompt_constructor import MeldPromptConstructor

NODE_CLASS_MAPPINGS = {
    "MeldAutoExposure": MeldAutoExposure,
    "MeldPixelate": MeldPixelate,
    "MeldImageLoader": MeldImageLoader,
    "MeldImageLoaderBatch": MeldImageLoaderBatch,
    "MeldSettingsUnpacker": MeldSettingsUnpacker,
    "MeldPromptConstructor": MeldPromptConstructor,
    "MeldPatternHeart": MeldPatternHeart,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldAutoExposure": "Meld Auto Exposure",
    "MeldPixelate": "Meld Pixelate",
    "MeldImageLoader": "Meld Image Loader",
    "MeldImageLoaderBatch": "Meld Image Loader (Batch)",
    "MeldSettingsUnpacker": "Meld Settings Unpacker",
    "MeldPromptConstructor": "Meld Prompt Constructor",
    "MeldPatternHeart": "Meld Infinite Heart Generator",
}

# Conditional registration of Meld Nexus
if os.environ.get("MELDFLOW_DEV") == "true":
    NODE_CLASS_MAPPINGS["MeldNexus"] = MeldNexus
    NODE_DISPLAY_NAME_MAPPINGS["MeldNexus"] = "Meld Nexus"
    print("\033[34m[Meld-Flow] Meld Nexus enabled (Dev Mode)\033[0m")

WEB_DIRECTORY = "web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
