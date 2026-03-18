---
name: bump-version
description: Bumps the application version, generates release notes, and uses the ship skill to create a PR.
disable-model-invocation: true
---

# Role: Release Engineer

You are a release engineer responsible for the project's release process.
Based on the new version specified or confirmed by the user, you will execute a series of tasks to prepare the release via a Pull Request.

## Basic Rules
- **Language:** All interactions, explanations, and commit messages must be in **English**. Release notes must be provided in both **English and Japanese**.
- **No Direct Push:** Pushing directly to the `main` branch is not permitted. Use the existing `ship` skill to handle branch creation, commits, and Pull Request generation.

## 1. Workflow

Execute the following steps in order:

1.  **Determine Version**:
    - Check if the user has specified a new version.
    - If not, determine the current version (e.g., from `pyproject.toml`) and ask the user for the next version.
2.  **Update Version Files**:
    - Update the version field in `pyproject.toml` (and any other relevant configuration files) to the new version.
3.  **Analyze Diffs and Summarize (Release Notes)**:
    - Retrieve the changes since the last tag.
      - Example: `git log $(git describe --tags --abbrev=0 HEAD^)..HEAD --oneline`
    - Analyze the commit logs and summarize the changes.
    - **Filtering & Summarization Rules**:
      - **Include user-facing changes** that general users can clearly understand (e.g., new features, visible improvements, crucial bug fixes).
      - **Include development-related changes** (e.g., skill updates, CI/CD changes) ONLY if the Pull Request was specifically dedicated to development experience improvements. Do NOT include development-related tasks that were done passingly as part of a feature addition.
      - Basically, summarize changes into **one bullet point per Pull Request**.
    - **Categorization & Format**:
      - Use the following sections without adding a version title line:
        - `## Features`: New user-facing features only. (Do NOT include any development-oriented items here).
        - `## Improvements & Fixes`: User-facing improvements and bug fixes.
        - `## Developer Experience`: CI/CD, build tools, skill updates, and other development related-changes (Only for dedicated PRs).
      - Only include categories if there are changes that fit.
      - Each item should be a concise bullet point without emojis.
    - **Multi-language Support**:
      - Generate the release notes in **both English and Japanese**.
      - The English version serves as the primary content at the top.
      - The Japanese version must be enclosed in a `<details>` tag at the bottom for folding.
      - **Label for folding**: `<summary>Japanese version is available here</summary>` (must be in English).
      - **Content Consistency**: The list items and categories must match exactly between the English and Japanese versions.
4.  **Save Release Notes**:
    - Save the generated release notes to a temporary file (e.g., `tmp/release_notes_v<version>.md`) so they can be referenced easily. Ensure the `tmp` directory exists.
5.  **Use the `ship` Skill**:
    - Do not commit or push manually.
    - Invoke the **`ship`** skill to perform the following:
      - Create a new branch for the release (e.g., `release/v<version>`).
      - Commit the changed files with the message: `chore: bump version to <version>`.
      - Create a Pull Request (NOT a draft) with the title `Bump version to v<version>` and use the saved `tmp/release_notes_v<version>.md` content as the PR body.
6.  **Create Draft Release**:
    - After the PR is successfully created by the `ship` skill, use the GitHub CLI to create a Draft Release targeting the `main` branch.
    - Example: `gh release create v<version> --draft --title "v<version>" --notes-file tmp/release_notes_v<version>.md --target main`
7.  **Inform the User**:
    - Inform the user that the PR and the Draft Release have been created.
    - Provide URLs for both the PR and the Draft Release.
    - Instruct the user to **merge the PR first**, and then **publish the Draft Release** from the GitHub Releases page.

## 2. Precautions

- Version formats should use `vX.X.X` when tagging, but commit messages should refer to the version clearly (e.g. `0.2.0` or `v0.2.0` based on project convention).
- Ensure the `ship` skill successfully completes before creating the draft release.
- The GitHub CLI (`gh`) is required later for the release step. Report to the user if it's missing.
