# ruff: noqa: ANN401
import logging
import os
import sqlite3
import time
from collections.abc import Callable, Iterable
from datetime import datetime
from typing import Any, TypeVar, overload

# --- DB Settings ---
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))), "data")
os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "default.db")
TRASH_DIR = os.path.join(DATA_DIR, "trash")


_CursorT = TypeVar("_CursorT", bound=sqlite3.Cursor)


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


def get_db_connection() -> sqlite3.Connection:
    conn: sqlite3.Connection
    meld_dev = os.environ.get("MELD_DEV", "").strip().lower()
    if meld_dev in ("true", "1", "yes"):
        conn = sqlite3.connect(DB_PATH, factory=TraceConnection)
    else:
        conn = sqlite3.connect(DB_PATH)
    return conn
