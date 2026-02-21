#!/usr/bin/env python3
import glob
import os
import sys


def check_frontend_api_usage() -> int:
    pattern = os.path.join("ui", "src", "features", "**", "api", "*.ts")
    files = glob.glob(pattern, recursive=True)
    # Also check the main api.ts
    files.append(os.path.join("ui", "src", "api.ts"))

    errors = []

    for file_path in files:
        if not os.path.isfile(file_path):
            continue

        with open(file_path, encoding="utf-8") as f:
            content = f.read()

        # Rule 1: Should not use res.json() directly if it's an API response
        lines = content.splitlines()
        for i, line in enumerate(lines):
            # Exclude handleResponse definition itself in ui/src/api.ts
            if "handleResponse" in line and "export async function" in line:
                continue

            # Check for .json()
            if ".json()" in line:
                # In ui/src/api.ts, .json() is allowed as it's the implementation of handleResponse
                if "ui/src/api.ts" in file_path.replace("\\", "/"):
                    continue
                # For uploadImage, it might be okay for now as it's not /meld/
                if "uploadImage" in content and "return await res.json()" in line:
                    continue

                errors.append(f"{file_path}:{i + 1}: Forbidden direct .json() call. Use handleResponse(res) instead.")

            # Rule 2: If api.fetchApi is used, handleResponse should likely be used
            if "api.fetchApi" in line:
                # Check if the next few lines or the same line has handleResponse
                found_handle = False
                # Look ahead up to 15 lines to be safe
                for j in range(i, min(i + 15, len(lines))):
                    if "handleResponse" in lines[j]:
                        found_handle = True
                        break

                if not found_handle:
                    # Only check /meld/ endpoints
                    if any(q in line for q in ['"/meld/', "'/meld/", "`/meld/"]):
                        # Allow download endpoints which return blobs
                        if "download" in line:
                            continue
                        errors.append(
                            f"{file_path}:{i + 1}: api.fetchApi call to /meld/ should be wrapped with handleResponse(res)."
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
