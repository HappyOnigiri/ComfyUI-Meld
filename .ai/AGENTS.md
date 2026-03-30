# Basic Rules

- **Mandatory CI Execution**: After modifying the code, you must run `make ci` and ensure that all linting, tests, and static analysis complete successfully.
- **Temporary File Creation**: When creating temporary files such as log outputs, validation scripts, or temporary notes, always create them within the `tmp/` directory at the repository root.

# Implementation Rules

## 1. Source Code and Comments (Strictly English)
- All source code, variable names, function names, and comments MUST be written in English.
- Do not use non-ASCII or multi-byte characters in any code files.
- If the user provides a prompt in another language, you must translate the logic into English for the code implementation.
- **Document Requirements**: When implementing specific logic based on implementation requirements or special conditions, include these requirements as comments within the code. This helps prevent future AI agents or developers from accidentally violating these constraints during refactoring or updates.

## 2. Documentation and Localization
- Non-English languages are permitted ONLY for documentation files.
- Localized documentation must be identified by one of the following conventions:
  - **Filename convention**: `*.{lang}.md` (e.g., `README.ja.md`)
  - **Directory convention**: Path includes `{lang}` as a directory (e.g., `docs/ja/nodes.md`)

## 3. Handling of Build Artifacts
- Build artifacts (e.g., files in `web/` directory) MUST be included in Git commits when their corresponding source files (e.g., in `ui/`) are modified.
- AI agents SHOULD NOT attempt to read or analyze the content of build artifacts (especially large minified files) during the commit process.
- If source files are changed and `make ci` (which includes the build process) is executed, any resulting changes in build artifacts are assumed to be correct and should be staged without detailed inspection.

# Architecture Map Maintenance Rules

This project relies on `architecture.md` as a source of truth for AI agents to understand the codebase.

## 1. Always Read First
When starting a new task, **ALWAYS** read `architecture.md` first to understand:
- Where to find the relevant code.
- How modules interact.
- Where to place new files.

## 2. Update on Change
You must update `architecture.md` if your changes involve:
- **Creating new directories or modules**.
- **Adding new critical logic files** (e.g., a new service or repository).
- **Changing the data flow** (e.g., adding a new event listener or API route group).
- **Renaming major components**.

## 3. How to Update
- Keep the format consistent (Markdown).
- Update the relevant section (Module Directory, Key Logic, etc.).
- If a new pattern or rule is introduced, add it to "Implementation Rules".

## 4. Path Convention
- Refer to backend files relative to the root (e.g., `meld/image_manager/...`).
- Refer to frontend files relative to `ui/src/`.

## 5. Error Handling
- Raise `MeldError` subclasses (`meld/image_manager/common/exceptions.py`) in
  service/common code. Never raise Python builtins (`ValueError`,
  `FileNotFoundError`) for domain errors.
- In routers, catch `MeldError` with `status=e.status_code`. Do not catch `Exception`.
- Keep `except (TypeError, ValueError)` for `from_dict()` schema parsing (request
  DTO construction at the router boundary).
