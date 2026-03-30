from .meld.auto_exposure.nodes import MeldAutoExposure
from .meld.image_manager.common.env import is_dev_mode
from .meld.load_image_configs import (
    MeldImageLoader,
    MeldImageLoaderBatch,
    MeldSettingsUnpacker,
    MeldUnifiedFluxLoader,
    MeldUnifiedLoader,
)
from .meld.meld_save_image.nodes import MeldSaveImage
from .meld.pattern_heart.nodes import MeldPatternHeart
from .meld.pixelate.nodes import MeldPixelate
from .meld.prompt_constructor.nodes import MeldPromptConstructor

NODE_CLASS_MAPPINGS = {
    "MeldAutoExposure": MeldAutoExposure,
    "MeldPixelate": MeldPixelate,
    "MeldImageLoader": MeldImageLoader,
    "MeldImageLoaderBatch": MeldImageLoaderBatch,
    "MeldSettingsUnpacker": MeldSettingsUnpacker,
    "MeldUnifiedFluxLoader": MeldUnifiedFluxLoader,
    "MeldUnifiedLoader": MeldUnifiedLoader,
    "MeldPromptConstructor": MeldPromptConstructor,
    "MeldPatternHeart": MeldPatternHeart,
    "MeldSaveImage": MeldSaveImage,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldAutoExposure": "Meld Auto Exposure",
    "MeldPixelate": "Meld Instant Pixelate",
    "MeldImageLoader": "Meld Image Loader",
    "MeldImageLoaderBatch": "Meld Image Loader (Batch)",
    "MeldSettingsUnpacker": "Meld Settings Unpacker",
    "MeldUnifiedFluxLoader": "Meld Unified Flux Loader",
    "MeldUnifiedLoader": "Meld Unified Loader",
    "MeldPromptConstructor": "Meld Prompt Constructor",
    "MeldPatternHeart": "Meld Infinite Heart Generator",
    "MeldSaveImage": "Meld Save Image",
}


# Conditional dev mode logging
if is_dev_mode():
    print("\033[34m[Meld] Meld enabled (Dev Mode)\033[0m")

WEB_DIRECTORY = "web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
