# Development Guide

## Release Flow

The release process is fully automated via GitHub Actions. No manual version bumping is required.

### Triggering a Release

```bash
gh workflow run release.yml -f version=X.Y.Z
```

This dispatches `.github/workflows/release.yml`, which:
1. Checks out the repository and installs Node.js 24 and Python 3.12 dependencies.
2. Bumps the version in `pyproject.toml`, runs `make ci` (which rebuilds `web/js/*`), and stages the build artifacts.
3. Pushes the `release/vX.Y.Z` branch and opens a PR with an auto-generated changelog.

### Merging the Release PR

Merging the release PR into `main` triggers two workflows in parallel:
- `.github/workflows/publish-release.yml`: creates the git tag and GitHub Release.
- `.github/workflows/publish_action.yml`: publishes the package to the Comfy registry.

### Release Reminder

`.github/workflows/release-reminder.yml` posts a comment on every PR showing how many PRs have been merged since the last release.

### Secrets Required

- `GH_TOKEN`: A PAT with `contents: write` and `pull-requests: write` permissions, registered in the repository settings.
