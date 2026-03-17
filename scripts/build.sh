#!/bin/bash
set -euo pipefail

SOURCE_BRANCH="${SOURCE_BRANCH:-develop}"
RELEASE_BRANCH="${RELEASE_BRANCH:-master}"
REMOTE_NAME="${REMOTE_NAME:-origin}"
RELEASE_MESSAGE="${RELEASE_MESSAGE:-UTD}"
DEPLOY_USER="${DEPLOY_USER:-root}"
DEPLOY_HOST="${DEPLOY_HOST:-10.199.110.80}"
DEPLOY_PORT="${DEPLOY_PORT:-4222}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/html/guide}"

ROOT_DIR="$(git rev-parse --show-toplevel)"
cd "$ROOT_DIR"

abort() {
    echo "Error: $*" >&2
    exit 1
}

restore_source_branch() {
    local current_branch
    current_branch="$(git branch --show-current 2>/dev/null || true)"
    if [[ -n "$current_branch" && "$current_branch" != "$SOURCE_BRANCH" ]]; then
        git checkout "$SOURCE_BRANCH" >/dev/null 2>&1 || true
    fi
}

require_clean_worktree() {
    if [[ -n "$(git status --porcelain)" ]]; then
        abort "Repo is dirty, please commit or stash changes before pushing"
    fi
}

require_branch() {
    local current_branch
    current_branch="$(git branch --show-current)"
    if [[ "$current_branch" != "$1" ]]; then
        abort "Run this script from '$1' (current branch: '$current_branch')"
    fi
}

ensure_tag_is_new() {
    local tag_name="$1"

    if git rev-parse "refs/tags/$tag_name" >/dev/null 2>&1; then
        abort "Tag '$tag_name' already exists locally"
    fi

    if git ls-remote --exit-code --tags "$REMOTE_NAME" "refs/tags/$tag_name" >/dev/null 2>&1; then
        abort "Tag '$tag_name' already exists on '$REMOTE_NAME'"
    fi
}

cleanup_release_branch_build_output() {
    if git ls-tree -r --name-only HEAD -- docs/.vuepress/dist | grep -q .; then
        echo "Cleaning tracked VuePress build output from ${RELEASE_BRANCH}..."
        git rm -r --cached docs/.vuepress/dist >/dev/null

        if ! git diff --cached --quiet; then
            git commit -m "Stop tracking VuePress generated files" >/dev/null
        fi
    fi
}

clean_generated_output() {
    git clean -fdX docs/.vuepress/dist docs/.vuepress/.cache docs/.vuepress/.temp >/dev/null 2>&1 || true
}

require_clean_worktree
require_branch "$SOURCE_BRANCH"
trap restore_source_branch EXIT

echo "Fetching from ${REMOTE_NAME}..."
git fetch "$REMOTE_NAME" --tags >/dev/null

echo "Pulling ${SOURCE_BRANCH} from ${REMOTE_NAME}..."
git pull --rebase "$REMOTE_NAME" "$SOURCE_BRANCH" >/dev/null

echo "Building VuePress site..."
yarn docs:build >/dev/null
clean_generated_output

current_version="$(node -p "require('./package.json').version")"
next_version="$(node -p "(() => { const version = require('./package.json').version; const parts = version.split('.').map(Number); if (parts.length !== 3 || parts.some(Number.isNaN)) { throw new Error('Unsupported version: ' + version); } return parts[0] + '.' + parts[1] + '.' + (parts[2] + 1); })()")"

ensure_tag_is_new "$next_version"

echo "Bumping version ${current_version} -> ${next_version}..."
node scripts/bump-version.mjs "$next_version" >/dev/null
git add package.json
git commit -m "$RELEASE_MESSAGE" >/dev/null
git tag "$next_version"

echo "Preparing ${RELEASE_BRANCH}..."
git checkout "$RELEASE_BRANCH" >/dev/null
git pull --rebase "$REMOTE_NAME" "$RELEASE_BRANCH" >/dev/null
cleanup_release_branch_build_output

echo "Merging ${SOURCE_BRANCH} into ${RELEASE_BRANCH}..."
git merge --no-ff "$SOURCE_BRANCH" -m "Release ${next_version}" >/dev/null

clean_generated_output

echo "Building VuePress site for deployment..."
yarn docs:build >/dev/null

echo "Pushing branches and tag..."
git push "$REMOTE_NAME" "$SOURCE_BRANCH" "$RELEASE_BRANCH" "refs/tags/$next_version" >/dev/null

echo "Syncing with Krill2 server..."
rsync -e "ssh -p ${DEPLOY_PORT} -l ${DEPLOY_USER}" -av --cvs-exclude --delete docs/.vuepress/dist/ "${DEPLOY_HOST}:${DEPLOY_PATH}" >/dev/null
echo "Done! Released ${next_version}."
