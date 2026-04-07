# ruff: noqa: ANN401
import json
import logging
import os
import re
import shutil
import sqlite3
import threading
import time
from collections.abc import Callable, Generator, Iterable
from contextlib import contextmanager
from dataclasses import dataclass
from datetime import datetime
from typing import Any, TypeVar, overload

from ..env import is_dev_mode
from ..exceptions import ConflictError, NotFoundError, ValidationError
from .legacy_py_data_migration import migrate_legacy_py_data

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))), "data")
DATABASES_DIR = os.path.join(DATA_DIR, "databases")
RUNTIME_ROOT_DIR = os.path.join(DATA_DIR, "runtime")
ACTIVE_DATABASE_STATE_PATH = os.path.join(DATA_DIR, "active_database.json")
LEGACY_DEFAULT_DB_PATH = os.path.join(DATA_DIR, "default.db")
DEFAULT_DATABASE_NAME = "default"
_DB_NAME_PATTERN = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$")
_state_lock = threading.RLock()


migrate_legacy_py_data(DATA_DIR)
os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(DATABASES_DIR, exist_ok=True)
os.makedirs(RUNTIME_ROOT_DIR, exist_ok=True)


@dataclass(frozen=True)
class ActiveDatabaseState:
    name: str
    db_path: str
    runtime_dir: str
    trash_dir: str
    thumbnail_dir: str
    generation: int


_CursorT = TypeVar("_CursorT", bound=sqlite3.Cursor)

ACTIVE_DATABASE_NAME = DEFAULT_DATABASE_NAME
ACTIVE_DATABASE_GENERATION = 0
DB_PATH = LEGACY_DEFAULT_DB_PATH
TRASH_DIR = os.path.join(RUNTIME_ROOT_DIR, DEFAULT_DATABASE_NAME, "trash")
THUMBNAIL_CACHE_DIR = os.path.join(RUNTIME_ROOT_DIR, DEFAULT_DATABASE_NAME, "thumbnails")


def _normalize_database_name(name: str) -> str:
    normalized = name.strip()
    if normalized.lower().endswith(".db"):
        normalized = normalized[:-3]
    if not normalized:
        raise ValidationError("Database name is required")
    if not _DB_NAME_PATTERN.fullmatch(normalized):
        raise ValidationError("Database name must match [A-Za-z0-9][A-Za-z0-9._-]{0,63}")
    return normalized


def _database_file_name(name: str) -> str:
    return f"{name}.db"


def get_database_path(name: str) -> str:
    normalized = _normalize_database_name(name)
    if normalized == DEFAULT_DATABASE_NAME and os.path.exists(LEGACY_DEFAULT_DB_PATH):
        return LEGACY_DEFAULT_DB_PATH
    return os.path.join(DATABASES_DIR, _database_file_name(normalized))


def get_database_runtime_dir(name: str) -> str:
    normalized = _normalize_database_name(name)
    return os.path.join(RUNTIME_ROOT_DIR, normalized)


def get_trash_dir(name: str | None = None) -> str:
    if name is None:
        return TRASH_DIR
    return os.path.join(get_database_runtime_dir(name), "trash")


def get_thumbnail_cache_dir(name: str | None = None) -> str:
    if name is None:
        return THUMBNAIL_CACHE_DIR
    return os.path.join(get_database_runtime_dir(name), "thumbnails")


def _ensure_runtime_dirs(name: str) -> None:
    os.makedirs(get_database_runtime_dir(name), exist_ok=True)
    os.makedirs(get_trash_dir(name), exist_ok=True)
    os.makedirs(get_thumbnail_cache_dir(name), exist_ok=True)


def _build_state(name: str, generation: int) -> ActiveDatabaseState:
    normalized = _normalize_database_name(name)
    _ensure_runtime_dirs(normalized)
    return ActiveDatabaseState(
        name=normalized,
        db_path=get_database_path(normalized),
        runtime_dir=get_database_runtime_dir(normalized),
        trash_dir=get_trash_dir(normalized),
        thumbnail_dir=get_thumbnail_cache_dir(normalized),
        generation=generation,
    )


def _sync_legacy_globals(state: ActiveDatabaseState) -> None:
    global ACTIVE_DATABASE_NAME, ACTIVE_DATABASE_GENERATION, DB_PATH, TRASH_DIR, THUMBNAIL_CACHE_DIR
    ACTIVE_DATABASE_NAME = state.name
    ACTIVE_DATABASE_GENERATION = state.generation
    DB_PATH = state.db_path
    TRASH_DIR = state.trash_dir
    THUMBNAIL_CACHE_DIR = state.thumbnail_dir


def _write_state_file(name: str, generation: int) -> None:
    data = {"active_database": name, "generation": generation}
    with open(ACTIVE_DATABASE_STATE_PATH, "w", encoding="ascii") as f:
        json.dump(data, f, indent=2, sort_keys=True)


def _read_state_file() -> tuple[str, int] | None:
    if not os.path.exists(ACTIVE_DATABASE_STATE_PATH):
        return None
    try:
        with open(ACTIVE_DATABASE_STATE_PATH, encoding="ascii") as f:
            data = json.load(f)
        name = _normalize_database_name(str(data.get("active_database", DEFAULT_DATABASE_NAME)))
        generation = int(data.get("generation", 0))
        return name, generation
    except Exception:
        return None


def _delete_sqlite_files(db_path: str) -> None:
    for suffix in ("", "-wal", "-shm", "-journal"):
        candidate = f"{db_path}{suffix}"
        if os.path.exists(candidate):
            os.remove(candidate)


def _move_sqlite_files(source_db_path: str, target_db_path: str) -> None:
    os.makedirs(os.path.dirname(target_db_path), exist_ok=True)
    for suffix in ("", "-wal", "-shm", "-journal"):
        source_candidate = f"{source_db_path}{suffix}"
        target_candidate = f"{target_db_path}{suffix}"
        if os.path.exists(source_candidate):
            if os.path.exists(target_candidate):
                raise ConflictError(f"Database already exists: {os.path.basename(target_db_path)}")
            shutil.move(source_candidate, target_candidate)


def _load_active_state() -> ActiveDatabaseState:
    stored = _read_state_file()
    if stored is None:
        state = _build_state(DEFAULT_DATABASE_NAME, 0)
        _write_state_file(state.name, state.generation)
        _sync_legacy_globals(state)
        return state

    name, generation = stored
    state = _build_state(name, generation)
    _sync_legacy_globals(state)
    return state


def get_active_database_state() -> ActiveDatabaseState:
    with _state_lock:
        return _build_state(ACTIVE_DATABASE_NAME, ACTIVE_DATABASE_GENERATION)


def refresh_active_database_state() -> ActiveDatabaseState:
    with _state_lock:
        return _load_active_state()


def list_database_names() -> list[str]:
    names: set[str] = set()
    if os.path.isdir(DATABASES_DIR):
        for entry in os.listdir(DATABASES_DIR):
            if entry.lower().endswith(".db"):
                names.add(_normalize_database_name(entry[:-3]))
    if os.path.exists(LEGACY_DEFAULT_DB_PATH):
        names.add(DEFAULT_DATABASE_NAME)
    if not names:
        names.add(DEFAULT_DATABASE_NAME)
    return sorted(names)


def get_database_state(name: str) -> ActiveDatabaseState:
    with _state_lock:
        return _build_state(name, ACTIVE_DATABASE_GENERATION)


class TraceCursor(sqlite3.Cursor):
    def execute(self, sql: str, parameters: Any = ()) -> "TraceCursor":
        start_time = time.perf_counter()
        try:
            super().execute(sql, parameters)
            return self
        finally:
            elapsed = (time.perf_counter() - start_time) * 1000
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
            logging.info(f"[{now}] [Meld DB] {sql} (Time: {elapsed:.2f}ms)")

    def executemany(self, sql: str, seq_of_parameters: Iterable[Any]) -> "TraceCursor":
        start_time = time.perf_counter()
        try:
            super().executemany(sql, seq_of_parameters)
            return self
        finally:
            elapsed = (time.perf_counter() - start_time) * 1000
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
            logging.info(f"[{now}] [Meld DB] {sql} (Time: {elapsed:.2f}ms)")

    def executescript(self, sql_script: str) -> "TraceCursor":
        start_time = time.perf_counter()
        try:
            super().executescript(sql_script)
            return self
        finally:
            elapsed = (time.perf_counter() - start_time) * 1000
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
            logging.info(f"[{now}] [Meld DB] <executescript> (Time: {elapsed:.2f}ms)")


class TraceConnection(sqlite3.Connection):
    @overload
    def cursor(self, factory: None = ...) -> sqlite3.Cursor: ...
    @overload
    def cursor(self, factory: Callable[[sqlite3.Connection], _CursorT]) -> _CursorT: ...

    def cursor(self, factory: Callable[[sqlite3.Connection], sqlite3.Cursor] | None = None) -> sqlite3.Cursor:
        if factory is None:
            factory = TraceCursor
        return super().cursor(factory)

    def execute(self, sql: str, parameters: Any = ()) -> sqlite3.Cursor:
        return self.cursor().execute(sql, parameters)

    def executemany(self, sql: str, seq_of_parameters: Iterable[Any]) -> sqlite3.Cursor:
        return self.cursor().executemany(sql, seq_of_parameters)

    def executescript(self, sql_script: str) -> sqlite3.Cursor:
        return self.cursor().executescript(sql_script)


def _get_db_connection(db_path: str | None = None) -> sqlite3.Connection:
    """Internal: use `db_connection()` context manager instead."""
    target_db_path = db_path or DB_PATH
    conn: sqlite3.Connection
    if is_dev_mode():
        conn = sqlite3.connect(target_db_path, factory=TraceConnection)
    else:
        conn = sqlite3.connect(target_db_path)
    return conn


@contextmanager
def db_connection(db_path: str | None = None) -> Generator[sqlite3.Connection, None, None]:
    """Context manager that opens a DB connection and closes it on exit."""
    conn = _get_db_connection(db_path)
    try:
        yield conn
    finally:
        conn.close()


def create_database(name: str, switch_to_new: bool = False) -> ActiveDatabaseState:
    normalized = _normalize_database_name(name)
    db_path = get_database_path(normalized)
    if os.path.exists(db_path):
        raise ConflictError(f"Database already exists: {normalized}")

    from .schema import init_db

    with _state_lock:
        init_db(db_path=db_path, trash_dir=get_trash_dir(normalized))
        if switch_to_new:
            next_state = _build_state(normalized, ACTIVE_DATABASE_GENERATION + 1)
            _write_state_file(next_state.name, next_state.generation)
            _sync_legacy_globals(next_state)
            return next_state
        return _build_state(normalized, ACTIVE_DATABASE_GENERATION)


def switch_active_database(name: str) -> ActiveDatabaseState:
    normalized = _normalize_database_name(name)
    db_path = get_database_path(normalized)
    if not os.path.exists(db_path):
        raise NotFoundError(f"Database not found: {normalized}")
    from .schema import init_db

    with _state_lock:
        init_db(db_path=db_path, trash_dir=get_trash_dir(normalized))
        next_state = _build_state(normalized, ACTIVE_DATABASE_GENERATION + 1)
        _write_state_file(next_state.name, next_state.generation)
        _sync_legacy_globals(next_state)
        return next_state


def delete_database(name: str) -> ActiveDatabaseState:
    normalized = _normalize_database_name(name)
    with _state_lock:
        existing = list_database_names()
        if normalized not in existing:
            raise NotFoundError(f"Database not found: {normalized}")

        if normalized == ACTIVE_DATABASE_NAME:
            remaining = [item for item in existing if item != normalized]
            if remaining:
                fallback = DEFAULT_DATABASE_NAME if DEFAULT_DATABASE_NAME in remaining else remaining[0]
                next_state = switch_active_database(fallback)
            else:
                _delete_sqlite_files(get_database_path(normalized))
                shutil.rmtree(get_database_runtime_dir(normalized), ignore_errors=True)
                from .schema import init_db

                init_db(
                    db_path=get_database_path(DEFAULT_DATABASE_NAME), trash_dir=get_trash_dir(DEFAULT_DATABASE_NAME)
                )
                next_state = _build_state(DEFAULT_DATABASE_NAME, ACTIVE_DATABASE_GENERATION + 1)
                _write_state_file(next_state.name, next_state.generation)
                _sync_legacy_globals(next_state)
                return next_state

        _delete_sqlite_files(get_database_path(normalized))
        shutil.rmtree(get_database_runtime_dir(normalized), ignore_errors=True)
        return get_active_database_state()


def rename_database(name: str, new_name: str) -> ActiveDatabaseState:
    normalized = _normalize_database_name(name)
    normalized_new = _normalize_database_name(new_name)
    if normalized == normalized_new:
        raise ValidationError("New database name must be different")

    with _state_lock:
        existing = list_database_names()
        if normalized not in existing:
            raise NotFoundError(f"Database not found: {normalized}")
        if normalized_new in existing:
            raise ConflictError(f"Database already exists: {normalized_new}")

        source_db_path = get_database_path(normalized)
        target_db_path = get_database_path(normalized_new)
        _move_sqlite_files(source_db_path, target_db_path)

        source_runtime_dir = get_database_runtime_dir(normalized)
        target_runtime_dir = get_database_runtime_dir(normalized_new)
        if os.path.exists(target_runtime_dir):
            raise ConflictError(f"Runtime directory already exists for database: {normalized_new}")
        if os.path.isdir(source_runtime_dir):
            shutil.move(source_runtime_dir, target_runtime_dir)
        else:
            _ensure_runtime_dirs(normalized_new)

        if normalized == ACTIVE_DATABASE_NAME:
            next_state = _build_state(normalized_new, ACTIVE_DATABASE_GENERATION + 1)
            _write_state_file(next_state.name, next_state.generation)
            _sync_legacy_globals(next_state)
            return next_state

        return get_active_database_state()


refresh_active_database_state()
