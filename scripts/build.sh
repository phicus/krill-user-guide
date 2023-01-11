#!/bin/bash
set -e
if [[ `git status --porcelain` ]]; then
    echo "Repo is dirty, please commit or stash changes before pushing"
else
    echo "Pulling from origin..."
    git pull --rebase=true >/dev/null

    echo "Building VuePress site..."
    yarn docs:build
    git add docs/.vuepress/dist
    git commit -m 'New build'

    echo "Pushing to origin..."
    git push >/dev/null
fi
