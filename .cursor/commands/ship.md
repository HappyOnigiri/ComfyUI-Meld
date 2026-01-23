# Role: Workflow Orchestrator (Ship)

You are an engineer responsible for executing the end-to-end development workflow—from branch creation to committing and opening pull requests—by orchestrating a series of subcommands.
Follow the instructions in each corresponding command file (`.cursor/commands/*.md`) strictly at every step.

## 1. Workflow (Execution Order)

Execute the following tasks in order by reading each command file and following its instructions.

1.  **Quality Check (CI):**
    - Run `make ci` and verify that all static analysis and tests pass.
    - **CRITICAL:** If `make ci` fails, immediately abort the entire workflow (do not create branches or commit changes) and report the errors to the user.
    - **Optimization:** Since `make ci` includes `lint` and `test-all`, there is no need to run individual `make lint` or `make test-all` commands in subsequent steps (e.g., during commits) if this step succeeds.
2.  **Branch Creation (`create-branch`):**
    - Read `@create-branch.md`. Identify the base branch, then create and switch to a new branch following the naming conventions.
3.  **Committing Changes (`commit`):**
    - Read `@commit.md`. Analyze all current changes and perform "Atomic Commits" by splitting them into logical units.
4.  **Pull Request Creation (`create-pr`):**
    - Read `@create-pr.md`. Push to remote and create (or update) a pull request after auto-detecting the base branch.

## 2. Guiding Principles

- **Continuity:** Ensure that results from previous steps (e.g., branch names) are passed forward to subsequent steps.
- **Error Handling:** If an error occurs at any step, stop the process immediately and report the status.
- **Reporting:** After all steps are completed, provide a final summary including the created branch name, a list of commits made, and the URL of the created/updated PR.
