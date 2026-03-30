"""
Root conftest: prevent pytest from failing on the project root __init__.py.

The project root __init__.py uses relative imports (from .meld.*) which fail
when pytest tries to import it as a standalone top-level module during
Package.setup().  The patch below catches that ImportError so test collection
continues normally.

Note: the py.path.local / LEGACY_PATH shim that was previously needed here has
been removed.  It was only required because the old py/ directory shadowed the
PyPI 'py' package; after renaming to meld/ that conflict no longer exists.
"""

from __future__ import annotations


def pytest_configure() -> None:  # type: ignore[override]
    """Patch Package.setup() so that ImportError from the project-root __init__.py
    (which uses relative imports and cannot be imported as a standalone module
    by pytest) is caught and silently skipped.
    """
    import _pytest.nodes
    import _pytest.python

    _orig_package_setup = _pytest.python.Package.setup

    def _safe_package_setup(self: _pytest.python.Package) -> None:  # type: ignore[name-defined]
        try:
            _orig_package_setup(self)
        except (ImportError, _pytest.nodes.Collector.CollectError):
            pass  # Project root __init__.py uses relative imports; skip gracefully.

    _pytest.python.Package.setup = _safe_package_setup  # type: ignore[method-assign]
