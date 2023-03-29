# krill-user-guide

## First steps

### Local installation

1. Install Node / NPM ([Ubuntu installation guide](https://ubunlog.com/nodejs-npm-instalacion-ubuntu-20-04-18-04/))
2. Install Yarn ([Ubuntu installation guide](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/))

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

To deploy changes and sync you must commit and push work. Then from root repository folder:
```bash
bash scripts/build.sh
```

## Folders structure

- ***Docs*** are archived inside `/docs/krill2` folder.
- ***Spanish docs*** are archived inside `/docs/es/krill2` folder.
- ***Images*** are stored inside `/docs/.vuepress/public/img` folder (try to keep organized structure inside it).
