import re
import sqlite3
import time
from datetime import datetime
from typing import Any


class SearchService:
    PREFIX_MAP = {
        "tag": ("tags", "tag_image_relations", "tag_id"),
        "pos": ("positive_prompts", "positive_prompt_image_relations", "positive_prompt_id"),
        "neg": ("negative_prompts", "negative_prompt_image_relations", "negative_prompt_id"),
        "model": ("models", "model_image_relations", "model_id"),
    }
    DATE_PREFIXES = {"date", "after", "before"}

    @staticmethod
    def parse_query(query_str: str | None) -> list[dict[str, Any]]:
        """
        Parses the query string into a list of conditions.
        Returns: list of dicts like {"prefix": "tag", "value": "blue", "is_partial": True, "is_global": False}
        """
        if not query_str:
            return []

        # Simple regex to split by space, but respect double quotes
        tokens = re.findall(r'(?:[^\s"]|"(?:\\.|[^"])*")+', query_str)

        conditions = []
        for token in tokens:
            # Global exact match: "value"
            if token.startswith('"') and token.endswith('"'):
                conditions.append({"prefix": None, "value": token[1:-1], "is_partial": False, "is_global": True})
                continue

            # Prefix match: prefix:value or prefix:"value"
            match = re.match(r"^(\w+):(.*)$", token)
            if match:
                prefix, value = match.groups()
                prefix = prefix.lower()
                if prefix in SearchService.PREFIX_MAP or prefix in SearchService.DATE_PREFIXES:
                    is_partial = True
                    # If value is quoted, it's exact match
                    if value.startswith('"') and value.endswith('"'):
                        value = value[1:-1]
                        is_partial = False

                    conditions.append({"prefix": prefix, "value": value, "is_partial": is_partial, "is_global": False})
                    continue

            # Default: Global partial match
            conditions.append({"prefix": None, "value": token, "is_partial": True, "is_global": True})

        return conditions

    @classmethod
    def build_search_sql(cls, query_str: str | None) -> tuple[str, list[str | float]]:
        """
        Builds a SQL WHERE clause and parameters for the search query.
        Returns: (sql_fragment, params)
        """
        conditions = cls.parse_query(query_str)
        if not conditions:
            return "", []

        sub_queries = []
        all_params: list[str | float] = []

        for cond in conditions:
            if cond["is_global"]:
                # Search across all tables
                global_ids_sql = []
                for prefix, (table, rel_table, rel_id) in cls.PREFIX_MAP.items():
                    # Exclude negative prompts from global search
                    if prefix == "neg":
                        continue
                    if cond["is_partial"]:
                        global_ids_sql.append(
                            f"SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name LIKE ? COLLATE NOCASE)"
                        )
                        all_params.append(f"%{cond['value']}%")
                    else:
                        global_ids_sql.append(
                            f"SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name = ? COLLATE NOCASE)"
                        )
                        all_params.append(cond["value"])

                sub_queries.append(f"i.id IN ({' UNION '.join(global_ids_sql)})")

            elif cond["prefix"] in cls.DATE_PREFIXES:
                prefix = cond["prefix"]
                value = cond["value"]
                try:
                    # Support YYYY-MM-DD or YYYY-MM or YYYY
                    if len(value) == 10:  # YYYY-MM-DD
                        dt = datetime.strptime(value, "%Y-%m-%d")
                        start_ts = time.mktime(dt.timetuple())
                        end_ts = start_ts + 86400 - 0.001
                    elif len(value) == 7:  # YYYY-MM
                        dt = datetime.strptime(value, "%Y-%m")
                        start_ts = time.mktime(dt.timetuple())
                        # Find end of month
                        if dt.month == 12:
                            next_month = dt.replace(year=dt.year + 1, month=1)
                        else:
                            next_month = dt.replace(month=dt.month + 1)
                        end_ts = time.mktime(next_month.timetuple()) - 0.001
                    elif len(value) == 4:  # YYYY
                        dt = datetime.strptime(value, "%Y")
                        start_ts = time.mktime(dt.timetuple())
                        next_year = dt.replace(year=dt.year + 1)
                        end_ts = time.mktime(next_year.timetuple()) - 0.001
                    else:
                        continue

                    if prefix == "date":
                        sub_queries.append("i.created_at BETWEEN ? AND ?")
                        all_params.extend([start_ts, end_ts])
                    elif prefix == "after":
                        sub_queries.append("i.created_at >= ?")
                        all_params.append(start_ts)
                    elif prefix == "before":
                        sub_queries.append("i.created_at <= ?")
                        all_params.append(end_ts)
                except ValueError:
                    # Invalid date format, skip this condition
                    continue

            else:
                # Targeted search (tags, models, etc.)
                prefix = cond["prefix"]
                table, rel_table, rel_id = cls.PREFIX_MAP[prefix]
                if cond["is_partial"]:
                    sub_queries.append(
                        f"i.id IN (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name LIKE ? COLLATE NOCASE))"
                    )
                    all_params.append(f"%{cond['value']}%")
                else:
                    sub_queries.append(
                        f"i.id IN (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name = ? COLLATE NOCASE))"
                    )
                    all_params.append(cond["value"])

        if not sub_queries:
            return "", []

        # Combine with AND
        sql_fragment = " AND " + " AND ".join(sub_queries)
        return sql_fragment, all_params

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

        # 4. Date (pick a random date that exists)
        cursor.execute("SELECT created_at FROM images WHERE deleted_at IS NULL ORDER BY RANDOM() LIMIT 1")
        date_row = cursor.fetchone()
        if date_row:
            dt = datetime.fromtimestamp(date_row[0])
            suggestions.append({"type": "date", "value": dt.strftime("%Y-%m-%d")})

        return suggestions
