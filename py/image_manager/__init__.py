from .common.db.schema import init_db
from .nodes import MeldSaveImage

# Initialize database on module load
init_db()

# Import API after DB initialization
from . import api  # noqa: E402

NODE_CLASS_MAPPINGS = {"MeldSaveImage": MeldSaveImage}

__all__ = ["MeldSaveImage", "NODE_CLASS_MAPPINGS", "api"]
