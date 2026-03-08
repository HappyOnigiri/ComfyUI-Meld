import os


def is_dev_mode() -> bool:
    """
    Check if COMFYUI_MELD_DEV is enabled.
    Returns True if the environment variable is 'true', '1', or 'yes'.
    """
    val = os.environ.get("COMFYUI_MELD_DEV", "").strip().lower()
    return val in ("true", "1", "yes")
