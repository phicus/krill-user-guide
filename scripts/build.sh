#!/bin/bash
set -e
if [[ `git status --porcelain` ]]; then
    echo "Repo is dirty, please commit or stash changes before pushing"
else
    echo "Pulling from origin..."
    git pull --rebase=true >/dev/null

    echo "Building VuePress site..."
    yarn docs:build >/dev/null
    git add docs/.vuepress/dist >/dev/null
    git commit -m 'New build' >/dev/null

    echo "Pushing to origin..."
    git push >/dev/null

    echo "Syncing with Krill2 server..."
#    scp -r -P4222 docs/.vuepress/dist/* root@lab3:/opt/krill-user-guide/guide >/dev/null
    rsync -e "ssh -p 4222 -l root" -av --cvs-exclude --delete docs/.vuepress/dist/ lab3:/opt/krill-user-guide/guide >/dev/null
    echo "Done!"
fi
