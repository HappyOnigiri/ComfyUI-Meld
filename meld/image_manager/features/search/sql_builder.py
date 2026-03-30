import time
from datetime import datetime

from ...common.constants import (
    RESERVED_TAG_KEYWORD,
    SEARCH_BOOLEAN_PREFIXES,
    SEARCH_DATE_PREFIXES,
    SEARCH_PREFIX_FILENAME,
    SEARCH_PREFIX_ID,
    SEARCH_PREFIX_MAP,
    SEARCH_PREFIX_NOTE,
    SEARCH_PREFIX_RESOLUTION,
    SEARCH_PREFIX_SORT,
)
from ...common.exceptions import ValidationError
from .query_parser import parse_query


def build_search_sql(query_str: str | None) -> tuple[str, list[str | float], str | None]:
    """
    Builds a SQL WHERE clause, parameters, and ORDER BY fragment for the search query.
    Returns: (where_fragment, params, order_fragment)
    """
    conditions = parse_query(query_str)
    if not conditions:
        return "", [], None

    sub_queries = []
    all_params: list[str | float] = []
    order_by = None

    for cond in conditions:
        is_negative = cond.get("is_negative", False)
        in_clause = "NOT IN" if is_negative else "IN"

        if cond["prefix"] == SEARCH_PREFIX_SORT:
            value = cond["value"].lower()
            if value == "created_at_asc":
                order_by = "i.created_at ASC"
            elif value == "created_at_desc":
                order_by = "i.created_at DESC"
            continue

        if cond["is_global"]:
            # Search across all tables
            global_ids_sql = []
            for prefix, (table, rel_table, rel_id) in SEARCH_PREFIX_MAP.items():
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

            # Add user_notes to global search
            if cond["is_partial"]:
                global_ids_sql.append("SELECT id AS image_id FROM images WHERE user_notes LIKE ? COLLATE NOCASE")
                all_params.append(f"%{cond['value']}%")
            else:
                global_ids_sql.append("SELECT id AS image_id FROM images WHERE user_notes = ? COLLATE NOCASE")
                all_params.append(cond["value"])

            sub_queries.append(f"i.id {in_clause} ({' UNION '.join(global_ids_sql)})")

        elif cond["prefix"] in SEARCH_DATE_PREFIXES:
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
                    op = "NOT BETWEEN" if is_negative else "BETWEEN"
                    sub_queries.append(f"i.created_at {op} ? AND ?")
                    all_params.extend([start_ts, end_ts])
                elif prefix == "after":
                    op = "<" if is_negative else ">="
                    sub_queries.append(f"i.created_at {op} ?")
                    all_params.append(start_ts)
                elif prefix == "before":
                    op = ">" if is_negative else "<="
                    sub_queries.append(f"i.created_at {op} ?")
                    all_params.append(end_ts)
            except ValueError:
                # Invalid date format, skip this condition
                continue

        elif cond["prefix"] in SEARCH_BOOLEAN_PREFIXES:
            prefix = cond["prefix"]
            value = cond["value"].lower()
            # Accept yes/no, true/false, 1/0
            is_true = value in ("true", "yes", "1")
            if is_negative:
                is_true = not is_true

            if prefix == "has_source":
                op = "IS NOT NULL" if is_true else "IS NULL"
                sub_queries.append(f"i.parent_id {op}")
            elif prefix == "has_derivatives":
                op = "IN" if is_true else "NOT IN"
                sub_queries.append(
                    f"i.id {op} (SELECT parent_id FROM images WHERE parent_id IS NOT NULL AND deleted_at IS NULL)"
                )

        elif cond["prefix"] == SEARCH_PREFIX_NOTE:
            if cond["is_partial"]:
                op = "LIKE" if not is_negative else "NOT LIKE"
                if not is_negative:
                    sub_queries.append(f"i.user_notes IS NOT NULL AND i.user_notes {op} ? COLLATE NOCASE")
                else:
                    sub_queries.append(f"(i.user_notes IS NULL OR i.user_notes {op} ? COLLATE NOCASE)")
                all_params.append(f"%{cond['value']}%")
            else:
                op = "=" if not is_negative else "!="
                if not is_negative:
                    sub_queries.append(f"i.user_notes IS NOT NULL AND i.user_notes {op} ? COLLATE NOCASE")
                else:
                    sub_queries.append(f"(i.user_notes IS NULL OR i.user_notes {op} ? COLLATE NOCASE)")
                all_params.append(cond["value"])

        elif cond["prefix"] == SEARCH_PREFIX_ID:
            # Exact match only
            try:
                parsed_id = int(cond["value"])
            except ValueError:
                raise ValidationError(f"Invalid ID format: {cond['value']}. ID must be an integer.") from None

            if is_negative:
                sub_queries.append("i.id != ?")
            else:
                sub_queries.append("i.id = ?")
            all_params.append(parsed_id)

        elif cond["prefix"] == SEARCH_PREFIX_FILENAME:
            if cond["is_partial"]:
                op = "LIKE" if not is_negative else "NOT LIKE"
                sub_queries.append(f"i.filename {op} ? COLLATE NOCASE")
                all_params.append(f"%{cond['value']}%")
            else:
                op = "=" if not is_negative else "!="
                sub_queries.append(f"i.filename {op} ? COLLATE NOCASE")
                all_params.append(cond["value"])

        elif cond["prefix"] == SEARCH_PREFIX_RESOLUTION:
            # Resolution: width x height (e.g. 1024x768). Filter on images table.
            res_expr = "CAST(i.width AS TEXT) || 'x' || CAST(i.height AS TEXT)"
            sub_queries.append("i.width IS NOT NULL AND i.height IS NOT NULL")
            if cond["is_partial"]:
                op = "LIKE" if not is_negative else "NOT LIKE"
                sub_queries.append(f"({res_expr}) {op} ? COLLATE NOCASE")
                all_params.append(f"%{cond['value']}%")
            else:
                op = "=" if not is_negative else "!="
                sub_queries.append(f"({res_expr}) {op} ? COLLATE NOCASE")
                all_params.append(cond["value"])

        else:
            # Targeted search (tags, models, etc.)
            prefix = cond["prefix"]
            table, rel_table, rel_id = SEARCH_PREFIX_MAP[prefix]

            # Special case for "none" (untagged, no model, etc.)
            if cond["value"].lower() == RESERVED_TAG_KEYWORD:
                # is_negative=True means "has at least one tag/model"
                op = "IN" if is_negative else "NOT IN"
                sub_queries.append(f"i.id {op} (SELECT image_id FROM {rel_table})")
                continue

            if cond["is_partial"]:
                sub_queries.append(
                    f"i.id {in_clause} (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name LIKE ? COLLATE NOCASE))"
                )
                all_params.append(f"%{cond['value']}%")
            else:
                sub_queries.append(
                    f"i.id {in_clause} (SELECT image_id FROM {rel_table} WHERE {rel_id} IN (SELECT id FROM {table} WHERE name = ? COLLATE NOCASE))"
                )
                all_params.append(cond["value"])

    if not sub_queries:
        return "", [], order_by

    # Combine with AND
    sql_fragment = " AND " + " AND ".join(sub_queries)
    return sql_fragment, all_params, order_by
