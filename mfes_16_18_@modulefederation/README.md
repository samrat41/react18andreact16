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
- `container` consumes the `products` remote via Module Federation.
- Dependencies `react` and `react-dom` are shared as singletons.


