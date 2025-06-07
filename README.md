# Mastermind in typescript

## Setup

### Install node using nvm

nvm ls-remote
nvm install v24.1.0
nvm use v24.1.0
node --version

### Setup project files

create tsconfig.json:  npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
create package.json including dependencies (see source code)
npm install (to install packages defined in package.json)

## Execution

run mastermind via: npm run start:dev

## Setup testing

npm install --save-dev @babel/preset-typescript
npm install --save-dev @babel/preset-env
create babel.config.js
