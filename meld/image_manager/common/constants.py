RESERVED_TAG_KEYWORD = "none"

# Search Prefixes
SEARCH_PREFIX_TAG = "tag"
SEARCH_PREFIX_POS = "pos"
SEARCH_PREFIX_NEG = "neg"
SEARCH_PREFIX_MODEL = "model"
SEARCH_PREFIX_DATE = "date"
SEARCH_PREFIX_AFTER = "after"
SEARCH_PREFIX_BEFORE = "before"
SEARCH_PREFIX_HAS_SOURCE = "has_source"
SEARCH_PREFIX_HAS_DERIVATIVES = "has_derivatives"
SEARCH_PREFIX_NOTE = "note"
SEARCH_PREFIX_SORT = "sort"
SEARCH_PREFIX_ID = "id"
SEARCH_PREFIX_FILENAME = "filename"
SEARCH_PREFIX_RESOLUTION = "resolution"

# Prefix Categories
SEARCH_PREFIX_MAP = {
    SEARCH_PREFIX_TAG: ("tags", "tag_image_relations", "tag_id"),
    SEARCH_PREFIX_POS: ("positive_prompts", "positive_prompt_image_relations", "positive_prompt_id"),
    SEARCH_PREFIX_NEG: ("negative_prompts", "negative_prompt_image_relations", "negative_prompt_id"),
    SEARCH_PREFIX_MODEL: ("models", "model_image_relations", "model_id"),
}

SEARCH_DATE_PREFIXES = {SEARCH_PREFIX_DATE, SEARCH_PREFIX_AFTER, SEARCH_PREFIX_BEFORE}
SEARCH_BOOLEAN_PREFIXES = {SEARCH_PREFIX_HAS_SOURCE, SEARCH_PREFIX_HAS_DERIVATIVES}

ALL_SEARCH_PREFIXES = (
    sorted(list(SEARCH_PREFIX_MAP.keys()))
    + sorted(list(SEARCH_DATE_PREFIXES))
    + sorted(list(SEARCH_BOOLEAN_PREFIXES))
    + sorted(
        [
            SEARCH_PREFIX_NOTE,
            SEARCH_PREFIX_SORT,
            SEARCH_PREFIX_ID,
            SEARCH_PREFIX_FILENAME,
            SEARCH_PREFIX_RESOLUTION,
        ]
    )
)
