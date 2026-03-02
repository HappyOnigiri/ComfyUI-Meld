#!/usr/bin/env python3
import os
import sys
from pathlib import Path

# Endpoints returning binary (blob) instead of JSON. These cannot use handleResponse
# or parseJsonResponse. Add path segment or exact path that matches api.fetchApi URL.
# - "download": matches /meld/api/download/zip, /meld/api/download/raw (ZIP/image binary)
BLOB_ENDPOINTS = ("download",)


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

            # Exclude handleResponse/parseJsonResponse definition itself
            if "export" in line:
                import re

                if re.search(r"\bexport\s+(const|let|var|function|default|type)\b.*\bhandleResponse\b", line):
                    continue
                if re.search(r"\bexport\s+(const|let|var|function|default|type)\b.*\bparseJsonResponse\b", line):
                    continue

            # Rule 1: Check .json() usage
            if ".json()" in line:
                # In ui/src/api.ts, .json() is allowed (implementation of handleResponse/parseJsonResponse)
                if file_path.endswith("ui/src/api.ts"):
                    continue

                errors.append(
                    f"{file_path}:{i + 1}: Forbidden direct .json() call. Use handleResponse(res) or parseJsonResponse(res) instead."
                )

            # Rule 2: If api.fetchApi is used, handleResponse or parseJsonResponse should be used
            if "api.fetchApi" in line:
                found_handle = False
                for j in range(i, min(i + 15, len(lines))):
                    if "handleResponse" in lines[j] or "parseJsonResponse" in lines[j]:
                        found_handle = True
                        break

                if not found_handle:
                    import re

                    # Extract the URL from api.fetchApi(URL, ...) - handle multiline
                    buffer = " ".join(lines[i : min(i + 5, len(lines))])
                    url_match = re.search(r'api\.fetchApi\(\s*["\'`]([^"\'`]+)["\'`]', buffer)
                    url = url_match.group(1) if url_match else None

                    if url:
                        # Check against BLOB_ENDPOINTS strictly (exact match or path segment)
                        if any(url == b or url.startswith(f"{b}/") or f"/{b}/" in f"/{url}/" for b in BLOB_ENDPOINTS):
                            continue

                    # Determine error message: use extracted URL if available, otherwise check line
                    is_meld = (url and "/meld/" in f"/{url}/") or any(
                        q in line for q in ['"/meld/', "'/meld/", "`/meld/"]
                    )
                    if is_meld:
                        errors.append(
                            f"{file_path}:{i + 1}: api.fetchApi call to /meld/ should use handleResponse(res) or parseJsonResponse(res)."
                        )
                    else:
                        errors.append(
                            f"{file_path}:{i + 1}: api.fetchApi call should use handleResponse or parseJsonResponse, or add to BLOB_ENDPOINTS if binary."
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
