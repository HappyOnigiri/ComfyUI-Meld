"""Domain-specific exception hierarchy for Meld.

All anticipated error conditions in the service/common layer MUST raise a subclass
of MeldError. Routers catch MeldError and use e.status_code to build the response.
Do NOT raise plain Python builtins (ValueError, FileNotFoundError, etc.) for domain
errors; use these classes instead.
"""


class MeldError(Exception):
    """Base exception for all Meld domain errors."""

    status_code: int = 500

    def __init__(self, message: str = "", *, status_code: int | None = None) -> None:
        super().__init__(message)
        if status_code is not None:
            self.status_code = status_code


class NotFoundError(MeldError):
    """Raised when a requested resource does not exist (HTTP 404)."""

    status_code: int = 404


class ValidationError(MeldError):
    """Raised when input data fails validation (HTTP 400)."""

    status_code: int = 400


class ConflictError(MeldError):
    """Raised when an operation conflicts with current state (HTTP 409)."""

    status_code: int = 409


class DatabaseError(MeldError):
    """Raised on unrecoverable database-layer failures (HTTP 500)."""

    status_code: int = 500
