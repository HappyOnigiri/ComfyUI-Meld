import threading
from collections.abc import Iterator
from contextlib import contextmanager

from ..exceptions import ConflictError

_state_lock = threading.Lock()
_startup_cleanup_running = False
_analytics_refresh_running = False
_database_change_running = False


def set_startup_cleanup_running(running: bool) -> None:
    global _startup_cleanup_running
    with _state_lock:
        _startup_cleanup_running = running


def is_startup_cleanup_running() -> bool:
    with _state_lock:
        return _startup_cleanup_running


def set_analytics_refresh_running(running: bool) -> None:
    global _analytics_refresh_running
    with _state_lock:
        _analytics_refresh_running = running


def is_analytics_refresh_running() -> bool:
    with _state_lock:
        return _analytics_refresh_running


def is_database_change_running() -> bool:
    with _state_lock:
        return _database_change_running


@contextmanager
def database_change_guard() -> Iterator[None]:
    global _database_change_running
    with _state_lock:
        if _database_change_running:
            raise ConflictError("Database change already in progress")
        _database_change_running = True
    try:
        yield
    finally:
        with _state_lock:
            _database_change_running = False
