import sqlite3
from datetime import datetime
from typing import Any

from ...common.constants import (
    ALL_SEARCH_PREFIXES,
    SEARCH_BOOLEAN_PREFIXES,
    SEARCH_DATE_PREFIXES,
    SEARCH_PREFIX_FILENAME,
    SEARCH_PREFIX_ID,
    SEARCH_PREFIX_MAP,
    SEARCH_PREFIX_NOTE,
    SEARCH_PREFIX_RESOLUTION,
    SEARCH_PREFIX_SORT,
)
from .query_parser import parse_query as _parse_query
from .sql_builder import build_search_sql as _build_search_sql


class SearchService:
    PREFIX_MAP = SEARCH_PREFIX_MAP
    DATE_PREFIXES = SEARCH_DATE_PREFIXES
    BOOLEAN_PREFIXES = SEARCH_BOOLEAN_PREFIXES
    NOTE_PREFIX = SEARCH_PREFIX_NOTE
    SORT_PREFIX = SEARCH_PREFIX_SORT
    ID_PREFIX = SEARCH_PREFIX_ID
    FILENAME_PREFIX = SEARCH_PREFIX_FILENAME
    RESOLUTION_PREFIX = SEARCH_PREFIX_RESOLUTION

    @staticmethod
    def parse_query(query_str: str | None) -> list[dict[str, Any]]:
        """
        Parses the query string into a list of conditions.
        Delegates to query_parser.parse_query.
        """
        return _parse_query(query_str)

    @staticmethod
    def build_search_sql(query_str: str | None) -> tuple[str, list[str | float], str | None]:
        """
        Builds a SQL WHERE clause, parameters, and ORDER BY fragment for the search query.
        Returns: (where_fragment, params, order_fragment)
        Delegates to sql_builder.build_search_sql.
        """
        return _build_search_sql(query_str)

    @classmethod
    def get_suggestions(
        cls, cursor: sqlite3.Cursor, partial_query: str | None, limit: int = 30, prefix_filter: str | None = None
    ) -> list[dict[str, Any]]:
        """
        Returns suggestions from tags, prompts, models.
        """
        if partial_query is None:
            return []

        results: list[dict[str, Any]] = []

        # Special handling for date prefixes
        if prefix_filter in cls.DATE_PREFIXES:
            today = datetime.now().strftime("%Y-%m-%d")
            results.append({"type": prefix_filter, "value": today, "count": 0})
            return results

        # Special handling for boolean prefixes
        if prefix_filter in cls.BOOLEAN_PREFIXES:
            results.append({"type": prefix_filter, "value": "yes", "count": 0})
            results.append({"type": prefix_filter, "value": "no", "count": 0})
            return results

        # Special handling for sort prefix
        if prefix_filter == cls.SORT_PREFIX:
            results.append({"type": prefix_filter, "value": "created_at_asc", "count": 0})
            results.append({"type": prefix_filter, "value": "created_at_desc", "count": 0})
            return results

        # Special handling for id and filename prefixes (no suggestions)
        if prefix_filter in (cls.ID_PREFIX, cls.FILENAME_PREFIX):
            return []

        # Special handling for resolution prefix
        if prefix_filter == cls.RESOLUTION_PREFIX:
            sql = """
                SELECT DISTINCT (CAST(width AS TEXT) || 'x' || CAST(height AS TEXT)) as res
                FROM images
                WHERE width IS NOT NULL AND height IS NOT NULL
                AND (CAST(width AS TEXT) || 'x' || CAST(height AS TEXT)) LIKE ? COLLATE NOCASE
                ORDER BY res LIMIT ?
            """
            cursor.execute(sql, (f"%{partial_query}%", limit))
            for (res,) in cursor.fetchall():
                results.append({"type": cls.RESOLUTION_PREFIX, "value": res, "count": 0})
            return results

        # Special handling for note prefix (no suggestions)
        if prefix_filter == cls.NOTE_PREFIX:
            return []

        # Determine which prefixes to search
        target_prefixes = [prefix_filter] if prefix_filter in cls.PREFIX_MAP else cls.PREFIX_MAP.keys()

        for prefix in target_prefixes:
            table, rel_table, rel_id = cls.PREFIX_MAP[prefix]
            # count usage
            sql = f"SELECT name FROM {table} WHERE name LIKE ? COLLATE NOCASE ORDER BY name ASC LIMIT ?"
            cursor.execute(sql, (f"%{partial_query}%", limit))
            rows = cursor.fetchall()

            for (name,) in rows:
                results.append({"type": prefix, "value": name, "count": 0})

        # Sort combined results alphabetically by value
        results.sort(key=lambda x: x["value"].lower())

        return results[:limit]

    @classmethod
    def get_random_search_suggestions(cls, cursor: sqlite3.Cursor) -> list[dict[str, Any]]:
        """
        Returns suggestions for pos, tag, model, and date by picking keywords
        that appear in less than 5% of total images.
        """

        # 1. Get total image count
        cursor.execute("SELECT COUNT(*) FROM images WHERE deleted_at IS NULL")
        total_images = cursor.fetchone()[0]
        if total_images == 0:
            return []

        # 10% threshold (at least 1, at most total_images)
        upper_threshold = max(1, int(total_images * 0.1))

        suggestions = []

        # Helper to pick a random keyword (prefer rare ones)
        def pick_keyword(table: str, rel_table: str, rel_id_col: str) -> str | None:
            # Try rare first (<= 5%)
            sql_rare = f"""
                SELECT t.name
                FROM {table} t
                JOIN {rel_table} r ON t.id = r.{rel_id_col}
                GROUP BY t.id
                HAVING COUNT(r.image_id) <= ?
                ORDER BY RANDOM() LIMIT 1
            """
            cursor.execute(sql_rare, (upper_threshold,))
            row = cursor.fetchone()
            if row:
                return row[0]

            # Fallback to any random keyword if no rare ones found
            sql_any = f"""
                SELECT t.name
                FROM {table} t
                JOIN {rel_table} r ON t.id = r.{rel_id_col}
                GROUP BY t.id
                ORDER BY RANDOM() LIMIT 1
            """
            cursor.execute(sql_any)
            row = cursor.fetchone()
            return row[0] if row else None

        # 1. Positive Prompt
        pos = pick_keyword("positive_prompts", "positive_prompt_image_relations", "positive_prompt_id")
        if pos:
            suggestions.append({"type": "pos", "value": pos})

        # 2. Tag
        tag = pick_keyword("tags", "tag_image_relations", "tag_id")
        if tag:
            suggestions.append({"type": "tag", "value": tag})

        # 3. Model
        model = pick_keyword("models", "model_image_relations", "model_id")
        if model:
            suggestions.append({"type": "model", "value": model})

        # 4. Date (pick the latest image date)
        cursor.execute("SELECT created_at FROM images WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 1")
        date_row = cursor.fetchone()
        if date_row:
            dt = datetime.fromtimestamp(date_row[0])
            suggestions.append({"type": "date", "value": dt.strftime("%Y-%m-%d")})

        return suggestions

    @classmethod
    def get_all_available_keywords(cls) -> list[dict[str, Any]]:
        """
        Returns all predefined search keywords for boolean filters, date filters, and sort options.
        """
        keywords = []

        # Boolean filters
        for prefix in cls.BOOLEAN_PREFIXES:
            keywords.append({"type": prefix, "value": "yes"})
            keywords.append({"type": prefix, "value": "no"})

        # Date filters (placeholders/examples)
        for prefix in cls.DATE_PREFIXES:
            keywords.append({"type": prefix, "value": "YYYY-MM-DD"})

        # Sort options
        keywords.append({"type": cls.SORT_PREFIX, "value": "created_at_asc"})
        keywords.append({"type": cls.SORT_PREFIX, "value": "created_at_desc"})

        # Common prefix placeholders
        for prefix in cls.PREFIX_MAP.keys():
            keywords.append({"type": prefix, "value": "keyword"})

        # Note prefix
        keywords.append({"type": cls.NOTE_PREFIX, "value": "text"})

        # Resolution prefix
        keywords.append({"type": cls.RESOLUTION_PREFIX, "value": "1024x1024"})

        return keywords

    @classmethod
    def get_search_config(cls) -> dict[str, Any]:
        """
        Returns the search configuration for the frontend.
        """
        return {
            "all_prefixes": ALL_SEARCH_PREFIXES,
            "boolean_prefixes": list(cls.BOOLEAN_PREFIXES),
            "date_prefixes": list(cls.DATE_PREFIXES),
            "sort_prefix": cls.SORT_PREFIX,
            "no_quote_prefixes": list(cls.DATE_PREFIXES) + list(cls.BOOLEAN_PREFIXES) + [cls.RESOLUTION_PREFIX],
        }
