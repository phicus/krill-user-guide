#!/bin/bash
set -e
if [[ `git status --porcelain` ]]; then
    echo "Repo is dirty, please commit or stash changes before pushing"
else
    echo "Pulling from origin..."
    git pull --rebase=true >/dev/null

    echo "Building VuePress site..."
    yarn docs:build >/dev/null

    echo "Pushing to origin..."
    git push >/dev/null

    generate-release -n -t patch -m 'UTD'

    echo "Syncing with Krill2 server..."
    rsync -e "ssh -p 4222 -l root" -av --cvs-exclude --delete docs/.vuepress/dist/ 10.199.110.80:/var/www/html/guide >/dev/null
    echo "Done!"
fi
