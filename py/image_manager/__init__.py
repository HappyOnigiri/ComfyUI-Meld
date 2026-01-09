from . import api
from .database import init_db
from .nodes import MeldNexus

# Initialize database on module load
init_db()

NODE_CLASS_MAPPINGS = {
    "MeldNexus": MeldNexus
}

__all__ = ["MeldNexus", "NODE_CLASS_MAPPINGS", "api"]
