from . import api
from .database import init_db
from .nodes import MeldNexusSaveImage

# Initialize database on module load
init_db()

NODE_CLASS_MAPPINGS = {"MeldNexusSaveImage": MeldNexusSaveImage}

__all__ = ["MeldNexusSaveImage", "NODE_CLASS_MAPPINGS", "api"]
