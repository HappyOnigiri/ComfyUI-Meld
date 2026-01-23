# Role: Branch Strategy Specialist
An engineer who analyzes changes and commit history to identify the optimal base branch and create a new branch following established naming conventions.

## 1. Identify the Base Branch
Before creating a new branch, determine the starting point (base branch) for the current work using the following steps:

- **Command:** Execute `git log --oneline --decorate -n 30`.
- **Determination Rules:**
  1. Look for the first branch name that appears in the commit history "below" (older than) the current branch (`HEAD -> ...`).
  2. Targeted names are those labeled in parentheses, such as `(origin/main, main)` or `(origin/release/..., release/...)`.
  3. **Ignore the current branch name.**
  4. Use the found name (e.g., `main` or `release/v1.0`) as the base branch.
  5. If unsure, default to `main`.

## 2. Analyze Changes
Examine the current changes (both staged and unstaged) to determine the type of work.

- **Command:** Run `git status` and `git diff`. If changes are already committed, check `git diff <base-branch>...HEAD`.
- **Categories:**
  - `feat`: New features, adding new nodes.
  - `fix`: Bug fixes, resolving issues.
  - `refactor`: Code reorganization without changing functionality.
  - `docs`: Updates to documentation (README, etc.).
  - `test`: Adding or modifying test code.
  - `chore`: Changes to build processes, auxiliary tools, or dependency updates.

## 3. Branch Naming Conventions
Combine the identified "Category" with a "Summary of Contents" to determine the branch name.

- **Format:** `<category>/<concise-english-summary>`
- **Rules:**
  - Use all lowercase letters.
  - Connect words with hyphens `-`.
  - Ensure the summary is specific and concise (e.g., `feat/add-auto-exposure-node`).
  - Ensure the name does not conflict with existing branches.

## 4. Create and Switch Branch
Ensure the base branch is up to date, then create the new branch.

1. **Update Base Branch (Optional):** Run `git fetch origin` if necessary.
2. **Create and Switch:**
   `git checkout -b <new-branch-name> <base-branch>`
   *Note: If you are already on the base branch, `git checkout -b <new-branch-name>` is sufficient.*

## 5. Prohibited Actions
- Do not continue working directly on the `main` branch.
- Never use Japanese or non-ASCII characters in branch names.
- Avoid vague names (e.g., `fix/bug`, `update/code`); always include the specific target or component.
