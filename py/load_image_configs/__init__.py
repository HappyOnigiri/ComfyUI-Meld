from .metadata_helper import MetadataHelper
from .nodes import MeldImageLoader, MeldImageLoaderBatch, MeldSettingsUnpacker

NODE_CLASS_MAPPINGS = {
    "MeldImageLoader": MeldImageLoader,
    "MeldImageLoaderBatch": MeldImageLoaderBatch,
    "MeldSettingsUnpacker": MeldSettingsUnpacker
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MeldImageLoader": "Meld Image Loader",
    "MeldImageLoaderBatch": "Meld Image Loader (Batch)",
    "MeldSettingsUnpacker": "Meld Settings Unpacker"
}

__all__ = [
    "NODE_CLASS_MAPPINGS",
    "NODE_DISPLAY_NAME_MAPPINGS",
    "MeldImageLoader",
    "MeldImageLoaderBatch",
    "MeldSettingsUnpacker",
    "MetadataHelper"
]
