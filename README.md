# krill-user-guide

## First steps

### Local installation

1. Install Node / NPM ([Ubuntu installation guide](https://ubunlog.com/nodejs-npm-instalacion-ubuntu-20-04-18-04/))
2. Install Yarn ([Ubuntu installation guide](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/))
3. Install `rsync` and make sure you have SSH access to the guide server if you want to deploy from this machine

### Setup repository

1. Inside `krill-user-guide` folder
2. Change to `develop` branch: `git checkout develop`
3. Install dependencies: `yarn install`

### Development server

To run development server:
```bash
yarn docs:dev
```

### Deploy changes and sync with guide server

To deploy weekly changelog changes:

1. Commit your updates on `develop`
2. Make sure the working tree is clean
3. Run the release script from the repository root on `develop`:

```bash
bash scripts/build.sh
```

The script will:

1. Pull the latest `develop`
2. Validate the VuePress build
3. Bump the patch version in `package.json`
4. Merge `develop` into `master`
5. Create and push the git tag
6. Build the site again and sync it to the guide server

If the script says local `master` is ahead of `origin/master`, finish or reconcile the previous release first. The usual recovery is:

```bash
git checkout master
git push origin master --tags
git checkout develop
```

## Folders structure

- ***Docs*** are archived inside `/docs/krill2` folder.
- ***Spanish docs*** are archived inside `/docs/es/krill2` folder.
- ***Images*** are stored inside `/docs/.vuepress/public/img` folder (try to keep organized structure inside it).
