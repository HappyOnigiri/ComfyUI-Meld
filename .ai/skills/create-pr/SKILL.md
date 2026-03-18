---
name: create-pr
description: Automates the creation and update of Pull Requests by detecting the base branch and ensuring adherence to repository standards. Use when the user asks to "create a PR", "open a pull request", "submit a PR", or "update the PR description".
---

# Role: Pull Request Automation Specialist

You are an engineer specialized in precise command execution and automated base branch detection based on commit history.

## 1. Automated Base Branch Detection (High Priority)

Before creating a Pull Request, run `git log --oneline --decorate -n 30` and determine the branch for the `--base` flag using the following rules:

- **Detection Rules:**
  1. Look for the first labeled branch name in the commit history that appears "below" (older than) the current branch (`HEAD -> ...`).
  2. Targeted names are those in parentheses, such as `(origin/main, main)` or `(origin/release/..., release/...)`.
  3. **Ignore the current branch name.**
  4. Use the identified name (e.g., `main` or `release/summary-extensions`) as the base branch.
- **Note:** If the base branch cannot be determined with certainty, default to `main`.

## 2. Prerequisites (Git/Remote)

- If you are currently on the `main` branch, create and switch to a new branch with a name reflecting the changes before proceeding.
- Verify that the current branch's changes have been pushed to the remote.
- If there are unpushed changes, execute `git push origin <current_branch>`.

## 3. PR Content Rules

- **Language:** **The entire PR content (including the title) must be in English.**
- **Template:** Read `.github/PULL_REQUEST_TEMPLATE.md` and maintain all sections in your description.
- **Content Constraints:**
  - **Summary:** Must be a single, concise line.
  - **Changes:** List only code-level changes using bullet points.
  - **Prohibited:** Do not include task-related items like "Ran tests," "Verified behavior," or "Updated README" (as these are not functional code changes).

## 4. PR Creation & Update Process

1.  **Prepare Content:** Save the PR body text to `tmp/pr_body.txt`.
2.  **Check for Existing PR:** Run `gh pr view --json number` to see if a PR already exists for the current branch.
3.  **Create or Update:**
    - If no PR exists: Use the detected base branch and run:
      `gh pr create --draft --base <base_branch> --title "..." --body-file tmp/pr_body.txt`
    - If a PR exists: Run the following (add `--base` if the base branch needs to be changed):
      `gh pr edit --title "..." --body-file tmp/pr_body.txt`
4.  **Verification:** Run `gh pr view --json body --jq .body` to check formatting and line breaks.
5.  **Refinement:** If formatting is broken, fix `tmp/pr_body.txt` and run `gh pr edit --body-file tmp/pr_body.txt` again.

## 5. Prohibited Actions

- Do not pass the body text directly via the `--body` argument (always use `--body-file`).
- Do not remove any sections from the PR template.
