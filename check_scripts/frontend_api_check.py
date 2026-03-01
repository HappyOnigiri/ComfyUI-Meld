#!/usr/bin/env python3
import os
import sys
from pathlib import Path

# Files/lines allowed to use .json() without handleResponse (e.g. upload returns different format)
UPLOAD_JSON_EXCEPTIONS = {
    "ui/src/features/importer/api/importerApi.ts",
    "ui/src/features/mask-editor/components/MaskEditorModal.tsx",
}

# Endpoints returning blob or non-JSON formats
BLOB_ENDPOINTS = ("download", "/prompt", "/upload/image")


def get_files_to_check() -> list[str]:
    """Search for .ts and .tsx files using api.fetchApi or .json()"""
    base = Path("ui/src")
    files = []
    for ext in ("*.ts", "*.tsx"):
        for p in base.rglob(ext):
            if p.name.endswith(".d.ts"):
                continue
            text = p.read_text(encoding="utf-8", errors="replace")
            if "api.fetchApi" in text or (".json()" in text and "api" in text):
                files.append(str(p).replace("\\", "/"))
    return sorted(set(files))


def check_frontend_api_usage() -> int:
    files = get_files_to_check()
    errors = []

    for file_path in files:
        if not os.path.isfile(file_path):
            continue

        with open(file_path, encoding="utf-8") as f:
            lines = f.read().splitlines()

        for i, line in enumerate(lines):
            # Inline ignore
            if "frontend-api-check-ignore" in line:
                continue

            # Exclude handleResponse definition itself
            if "handleResponse" in line and "export" in line:
                # regex to match: export (const|let|var|function|default) ... handleResponse
                import re

                if re.search(r"\bexport\s+(const|let|var|function|default|type)\b.*\bhandleResponse\b", line):
                    continue

            # Rule 1: Check .json() usage
            if ".json()" in line:
                # In ui/src/api.ts, .json() is allowed as it's the implementation of handleResponse
                if file_path.endswith("ui/src/api.ts"):
                    continue

                if file_path in UPLOAD_JSON_EXCEPTIONS:
                    continue

                errors.append(f"{file_path}:{i + 1}: Forbidden direct .json() call. Use handleResponse(res) instead.")

            # Rule 2: If api.fetchApi is used, handleResponse should likely be used
            if "api.fetchApi" in line:
                found_handle = False
                for j in range(i, min(i + 15, len(lines))):
                    if "handleResponse" in lines[j]:
                        found_handle = True
                        break

                if not found_handle:
                    import re

                    # Extract the URL from api.fetchApi(URL, ...)
                    url_match = re.search(r'api\.fetchApi\(\s*["\'`]([^"\'`]+)["\'`]', line)
                    if url_match:
                        url = url_match.group(1)
                        # Check against BLOB_ENDPOINTS strictly (exact match or path segment)
                        if any(url == b or url.startswith(f"{b}/") or f"/{b}/" in f"/{url}/" for b in BLOB_ENDPOINTS):
                            continue

                    if any(q in line for q in ['"/meld/', "'/meld/", "`/meld/"]):
                        errors.append(
                            f"{file_path}:{i + 1}: api.fetchApi call to /meld/ should be wrapped with handleResponse(res)."
                        )
                    else:
                        # For non-meld endpoints (like ComfyUI ones), require handleResponse or exceptions
                        errors.append(
                            f"{file_path}:{i + 1}: api.fetchApi call should be wrapped with handleResponse, or added to exceptions."
                        )

    if errors:
        print("Frontend API Usage Checks Failed:")
        for error in errors:
            print(f"  {error}")
        return 1

    print("Frontend API Usage Checks Passed.")
    return 0


if __name__ == "__main__":
    sys.exit(check_frontend_api_usage())
