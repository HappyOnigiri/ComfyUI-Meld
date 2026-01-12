import os

from .py.auto_exposure.nodes import MeldAutoExposure
from .py.image_manager.nodes import MeldNexusSaveImage
from .py.load_image_configs.nodes import MeldImageLoader, MeldImageLoaderBatch, MeldSettingsUnpacker
from .py.pattern_heart.nodes import MeldPatternHeart
from .py.pixelate.nodes import MeldPixelate
from .py.prompt_constructor.nodes import MeldPromptConstructor

NODE_CLASS_MAPPINGS = {
    "MeldAutoExposure": MeldAutoExposure,
    "MeldPixelate": MeldPixelate,
    "MeldImageLoader": MeldImageLoader,
    "MeldImageLoaderBatch": MeldImageLoaderBatch,
    "MeldSettingsUnpacker": MeldSettingsUnpacker,
    "MeldPromptConstructor": MeldPromptConstructor,
    "MeldPatternHeart": MeldPatternHeart,
    "MeldNexusSaveImage": MeldNexusSaveImage,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldAutoExposure": "Meld Auto Exposure",
    "MeldPixelate": "Meld Pixelate",
    "MeldImageLoader": "Meld Image Loader",
    "MeldImageLoaderBatch": "Meld Image Loader (Batch)",
    "MeldSettingsUnpacker": "Meld Settings Unpacker",
    "MeldPromptConstructor": "Meld Prompt Constructor",
    "MeldPatternHeart": "Meld Infinite Heart Generator",
    "MeldNexusSaveImage": "Meld Nexus Save Image",
}

# Conditional registration of Meld Nexus
if os.environ.get("MELDFLOW_DEV") == "true":
    NODE_CLASS_MAPPINGS["MeldNexusSaveImage"] = MeldNexusSaveImage
    NODE_DISPLAY_NAME_MAPPINGS["MeldNexusSaveImage"] = "Meld Nexus Save Image"
    print("\033[34m[Meld-Flow] Meld Nexus enabled (Dev Mode)\033[0m")

WEB_DIRECTORY = "web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
