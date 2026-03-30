from .common.db.schema import init_db

# Initialize database on module load
init_db()

# Import API after DB initialization
from . import api  # noqa: E402

__all__ = ["api"]
