## React Module Federation Boilerplate

This repo contains a minimal setup for a React Module Federation architecture with a host (`container`) and a remote (`products`).

### Prerequisites
- Node.js 18+

### Install
```bash
cd /Users/sam/mfes/container && npm install
cd /Users/sam/mfes/products && npm install
```

### Run
Open two terminals:
```bash
cd /Users/sam/mfes/products && npm start
```
```bash
cd /Users/sam/mfes/container && npm start
```

- Host available at: `http://localhost:8080`
- Remote served from: `http://localhost:8081/remoteEntry.js`

### Build
```bash
cd /Users/sam/mfes/products && npm run build
cd /Users/sam/mfes/container && npm run build
```

### Notes
- `container` (React 18) consumes the `products` remote (React 16).
- The remote exposes a `mount` function and renders with its own React version.
- The host keeps `react` and `react-dom` as singletons locally, while the remote keeps its own versions; they are not singletons across boundaries.


