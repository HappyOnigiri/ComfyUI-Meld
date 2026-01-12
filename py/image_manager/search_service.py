import re


class SearchService:
    PREFIX_MAP = {
        "tag": ("tags", "tag_image_relations", "tag_id"),
        "pos": ("positive_prompts", "positive_prompt_image_relations", "positive_prompt_id"),
        "neg": ("negative_prompts", "negative_prompt_image_relations", "negative_prompt_id"),
        "model": ("models", "model_image_relations", "model_id"),
    }

    @staticmethod
    def parse_query(query_str):
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
                if prefix in SearchService.PREFIX_MAP:
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
    def build_search_sql(cls, query_str):
        """
        Builds a SQL WHERE clause and parameters for the search query.
        Returns: (sql_fragment, params)
        """
        conditions = cls.parse_query(query_str)
        if not conditions:
            return "", []

        sub_queries = []
        all_params = []

        for cond in conditions:
            if cond["is_global"]:
                # Search across all tables
                global_ids_sql = []
                for prefix, (table, rel_table, rel_id) in cls.PREFIX_MAP.items():
                    if cond["is_partial"]:
                        global_ids_sql.append(
                            f"SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name LIKE ?)"
                        )
                        all_params.append(f"%{cond['value']}%")
                    else:
                        global_ids_sql.append(
                            f"SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name = ?)"
                        )
                        all_params.append(cond["value"])

                sub_queries.append(f"i.id IN ({' UNION '.join(global_ids_sql)})")

            else:
                # Targeted search
                prefix = cond["prefix"]
                table, rel_table, rel_id = cls.PREFIX_MAP[prefix]
                if cond["is_partial"]:
                    sub_queries.append(
                        f"i.id IN (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name LIKE ?))"
                    )
                    all_params.append(f"%{cond['value']}%")
                else:
                    sub_queries.append(
                        f"i.id IN (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name = ?))"
                    )
                    all_params.append(cond["value"])

        if not sub_queries:
            return "", []

        # Combine with AND
        sql_fragment = " AND " + " AND ".join(sub_queries)
        return sql_fragment, all_params

    @classmethod
    def get_suggestions(cls, cursor, partial_query, limit=30, prefix_filter=None):
        """
        Returns suggestions from tags, prompts, models.
        """
        if partial_query is None:
            return []

        results = []

        # Determine which prefixes to search
        target_prefixes = [prefix_filter] if prefix_filter in cls.PREFIX_MAP else cls.PREFIX_MAP.keys()

        for prefix in target_prefixes:
            table, rel_table, rel_id = cls.PREFIX_MAP[prefix]
            # count usage
            sql = f"SELECT name FROM {table} WHERE name LIKE ? ORDER BY name ASC LIMIT ?"
            cursor.execute(sql, (f"%{partial_query}%", limit))
            rows = cursor.fetchall()

            for (name,) in rows:
                results.append({"type": prefix, "value": name, "count": 0})

        # Sort combined results alphabetically by value
        results.sort(key=lambda x: x["value"].lower())

        return results[:limit]
