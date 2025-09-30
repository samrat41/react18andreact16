
# React 18 + 16 Module Federation Example (with Shared Context)

This project demonstrates Module Federation with a React 18 host (`container`) and a React 16 remote (`products`), sharing a context via a local package (`shared-context-legacy`).

## Features
- `container` uses React 18, `products` uses React 16.
- Shared context is implemented in `shared-context-legacy` and consumed by both apps.
- Context value can be displayed and updated from either app, and changes propagate live.
- Uses Webpack 5 Module Federation with singleton sharing for `shared-context-legacy` (React is not shared between apps).

## Prerequisites
- Node.js 18+

## Install
```bash
cd mfe_16_18_context/shared-context-legacy && yarn install && yarn build
cd mfe_16_18_context/container && yarn install
cd mfe_16_18_context/products && yarn install
```

## Run
Open two terminals:
```bash
cd mfe_16_18_context/products && yarn start
```
```bash
cd mfe_16_18_context/container && yarn start
```
- Host: http://localhost:8080
- Remote: http://localhost:8081/remoteEntry.js

## Build
```bash
cd mfe_16_18_context/shared-context-legacy && yarn build
cd mfe_16_18_context/products && yarn build
cd mfe_16_18_context/container && yarn build
```

## Notes
- Both apps import context from the built `shared-context-legacy` package.
- Module Federation is configured to share `shared-context-legacy` as a singleton.
- Context updates in one app are reflected in the other.


