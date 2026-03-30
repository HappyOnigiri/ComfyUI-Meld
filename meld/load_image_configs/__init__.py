from .core.metadata_helper import MetadataHelper
from .meld_image_loader import MeldImageLoader
from .meld_image_loader_batch import MeldImageLoaderBatch
from .meld_settings_unpacker import MeldSettingsUnpacker
from .meld_unified_flux_loader import MeldUnifiedFluxLoader
from .meld_unified_loader import MeldUnifiedLoader

NODE_CLASS_MAPPINGS = {
    "MeldImageLoader": MeldImageLoader,
    "MeldImageLoaderBatch": MeldImageLoaderBatch,
    "MeldSettingsUnpacker": MeldSettingsUnpacker,
    "MeldUnifiedFluxLoader": MeldUnifiedFluxLoader,
    "MeldUnifiedLoader": MeldUnifiedLoader,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldImageLoader": "Meld Image Loader",
    "MeldImageLoaderBatch": "Meld Image Loader (Batch)",
    "MeldSettingsUnpacker": "Meld Settings Unpacker",
    "MeldUnifiedFluxLoader": "Meld Unified Flux Loader",
    "MeldUnifiedLoader": "Meld Unified Loader",
}

__all__ = [
    "NODE_CLASS_MAPPINGS",
    "NODE_DISPLAY_NAME_MAPPINGS",
    "MeldImageLoader",
    "MeldImageLoaderBatch",
    "MeldSettingsUnpacker",
    "MeldUnifiedFluxLoader",
    "MeldUnifiedLoader",
    "MetadataHelper",
]
