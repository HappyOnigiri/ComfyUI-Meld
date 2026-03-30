import re
from typing import Any

from ...common.constants import (
    SEARCH_BOOLEAN_PREFIXES,
    SEARCH_DATE_PREFIXES,
    SEARCH_PREFIX_FILENAME,
    SEARCH_PREFIX_ID,
    SEARCH_PREFIX_MAP,
    SEARCH_PREFIX_NOTE,
    SEARCH_PREFIX_RESOLUTION,
    SEARCH_PREFIX_SORT,
)


def parse_query(query_str: str | None) -> list[dict[str, Any]]:
    """
    Parses the query string into a list of conditions.
    Returns: list of dicts like {"prefix": "tag", "value": "blue", "is_partial": True, "is_global": False, "is_negative": False}
    """
    if not query_str:
        return []

    # Simple regex to split by space, but respect double quotes
    tokens = re.findall(r'(?:[^\s"]|"(?:\\.|[^"])*")+', query_str)

    conditions = []
    for token in tokens:
        is_negative = False
        if token.startswith("-") or token.startswith("!"):
            is_negative = True
            token = token[1:]
            if not token:
                continue

        # Global exact match: "value"
        if token.startswith('"') and token.endswith('"'):
            conditions.append(
                {
                    "prefix": None,
                    "value": token[1:-1],
                    "is_partial": False,
                    "is_global": True,
                    "is_negative": is_negative,
                }
            )
            continue

        # Prefix match: prefix:value or prefix:"value"
        match = re.match(r"^(\w+):(.*)$", token)
        if match:
            prefix, value = match.groups()
            prefix = prefix.lower()
            if (
                prefix in SEARCH_PREFIX_MAP
                or prefix in SEARCH_DATE_PREFIXES
                or prefix in SEARCH_BOOLEAN_PREFIXES
                or prefix == SEARCH_PREFIX_NOTE
                or prefix == SEARCH_PREFIX_SORT
                or prefix == SEARCH_PREFIX_ID
                or prefix == SEARCH_PREFIX_FILENAME
                or prefix == SEARCH_PREFIX_RESOLUTION
            ):
                is_partial = True
                # If value is quoted, it's exact match
                if value.startswith('"') and value.endswith('"'):
                    value = value[1:-1]
                    is_partial = False

                conditions.append(
                    {
                        "prefix": prefix,
                        "value": value,
                        "is_partial": is_partial,
                        "is_global": False,
                        "is_negative": is_negative,
                    }
                )
                continue

        # Default: Global partial match
        conditions.append(
            {"prefix": None, "value": token, "is_partial": True, "is_global": True, "is_negative": is_negative}
        )

    return conditions
