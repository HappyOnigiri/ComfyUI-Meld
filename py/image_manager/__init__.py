from . import api
from .db.schema import init_db
from .nodes import MeldSaveImage

# Initialize database on module load
init_db()

NODE_CLASS_MAPPINGS = {"MeldSaveImage": MeldSaveImage}

__all__ = ["MeldSaveImage", "NODE_CLASS_MAPPINGS", "api"]
