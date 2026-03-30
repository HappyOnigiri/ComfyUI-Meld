from .crud import routes as crud_routes
from .export import routes as export_routes
from .lineage import routes as lineage_routes
from .serving import routes as serving_routes

routes = [*crud_routes, *lineage_routes, *serving_routes, *export_routes]

__all__ = ["routes"]
