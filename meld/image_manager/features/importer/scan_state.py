import threading

from ...common.schemas import ScanStatus


class ScanState:
    """Thread-safe wrapper around scan progress state."""

    def __init__(self) -> None:
        self._lock = threading.Lock()
        self._is_running = False
        self._should_cancel = False
        self._new_count = 0
        self._updated_count = 0
        self._total_count = 0

    def try_start(self) -> bool:
        """Atomically check-and-set is_running. Returns True if started, False if already running."""
        with self._lock:
            if self._is_running:
                return False
            self._is_running = True
            self._should_cancel = False
            self._new_count = 0
            self._updated_count = 0
            self._total_count = 0
            return True

    def mark_finished(self) -> None:
        """Mark the scan as no longer running and clear cancellation flag."""
        with self._lock:
            self._is_running = False
            self._should_cancel = False

    def request_cancel(self) -> None:
        with self._lock:
            self._should_cancel = True

    @property
    def should_cancel(self) -> bool:
        with self._lock:
            return self._should_cancel

    @property
    def is_running(self) -> bool:
        with self._lock:
            return self._is_running

    def set_new_count(self, count: int) -> None:
        with self._lock:
            self._new_count = count

    def set_updated_count(self, count: int) -> None:
        with self._lock:
            self._updated_count = count

    def set_total_count(self, count: int) -> None:
        with self._lock:
            self._total_count = count

    def get_status(self) -> ScanStatus:
        """Return an immutable snapshot of the current state as ScanStatus."""
        with self._lock:
            return ScanStatus(
                is_running=self._is_running,
                should_cancel=self._should_cancel,
                new_count=self._new_count,
                updated_count=self._updated_count,
                total_count=self._total_count,
            )
