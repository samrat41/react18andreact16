# React 18 + 18 Module Federation Example (with Shared Context)

This project demonstrates Module Federation with two React 18 apps (`container` and `products`) sharing a context via a local package (`shared-context`).

## Features
- Both `container` and `products` use React 18.
- Shared context is implemented in `shared-context` and consumed by both apps.
- Context value can be displayed and updated from either app, and changes propagate live.
- Uses Webpack 5 Module Federation with singleton sharing for `react`, `react-dom`, and `shared-context`.

## Prerequisites
- Node.js 18+

## Install
```bash
cd mfes_18_18/shared-context && yarn install && yarn build
cd mfes_18_18/container && yarn install
cd mfes_18_18/products && yarn install
```

## Run
Open two terminals:
```bash
cd mfes_18_18/products && yarn start
```
```bash
cd mfes_18_18/container && yarn start
```
- Host: http://localhost:8082
- Remote: http://localhost:8083/remoteEntry.js

## Build
```bash
cd mfes_18_18/shared-context && yarn build
cd mfes_18_18/products && yarn build
cd mfes_18_18/container && yarn build
```

## Notes
- Both apps import context from the built `shared-context` package.
- Module Federation is configured to share `react`, `react-dom`, and `shared-context` as singletons.
- Context updates in one app are reflected in the other.
