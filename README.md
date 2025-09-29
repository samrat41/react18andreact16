
# React Module Federation Monorepo: React 16, 18, and Context Sharing

This repository demonstrates multiple approaches to microfrontends with React and Webpack Module Federation, including advanced context sharing between host and remote apps.

## Projects Overview

### 1. `mfes_16_18_@modulefederation` — Module Federation Bridge Approach
- **Host:** React 18.3.1
- **Remote:** React 16.14.0
- **Bridge:** Uses `@module-federation/bridge-react` for React version isolation
- **Features:**
   - Automatic React version isolation
   - Shared dependencies management
   - Independent React instances per microfrontend

### 2. `mfes_16_18_vanila` — Vanilla Module Federation Approach
- **Host:** React 18.3.1
- **Remote:** React 16.14.0
- **No Bridge:** Direct Module Federation
- **Features:**
   - Manual React version management
   - No extra bridge libraries
   - Each app bundles its own React

### 3. `mfe_16_18_context` — React 18 Host, React 16 Remote, Shared Context
- **Host:** React 18
- **Remote:** React 16
- **Shared Context:** Both apps consume a context from a local `shared-context` package
- **Features:**
   - Demonstrates context sharing across React versions
   - Context value can be displayed and updated from either app
   - Uses Module Federation singleton for `shared-context` (React is not shared)

### 4. `mfes_18_18` — React 18 Host & Remote, Shared Context
- **Host:** React 18
- **Remote:** React 18
- **Shared Context:** Both apps consume a context from a local `shared-context` package
- **Features:**
   - Both apps use the same React version
   - Context value can be displayed and updated from either app
   - Uses Module Federation singleton for `react`, `react-dom`, and `shared-context`

## Prerequisites
- Node.js 18+
- npm or yarn

## Quick Start

Each project has its own README with detailed install, run, and build instructions. The general workflow is:

1. Install dependencies and build the shared-context package (if present):
    ```bash
    cd <project>/shared-context && yarn install && yarn build
    cd <project>/container && yarn install
    cd <project>/products && yarn install
    ```
2. Start both apps (in separate terminals):
    ```bash
    cd <project>/products && yarn start
    cd <project>/container && yarn start
    ```
3. Access the host app (see project README for port info)

## Key Learnings
- **React version isolation:** Use a bridge or manual config to run different React versions side-by-side
- **Context sharing:** Use a local package and Module Federation singleton to share context between host and remote
- **Module Federation:** Enables runtime composition of microfrontends with independent deployments

## Troubleshooting
- Ensure ports are available and not in use
- Always build the shared-context package before running host/remote
- If you see React hook or context errors, check that only one copy of React is loaded (singleton config)

---
See each subproject's README for more details and usage instructions.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Quick Start

### Option 1: Module Federation Bridge Approach

1. **Install dependencies for both applications:**
   ```bash
   cd mfes_16_18_@modulefederation/container && npm install
   cd mfes_16_18_@modulefederation/products && npm install
   ```

2. **Start both applications (in separate terminals):**
   ```bash
   # Terminal 1 - Start the remote (products)
   cd mfes_16_18_@modulefederation/products && npm start
   
   # Terminal 2 - Start the host (container)
   cd mfes_16_18_@modulefederation/container && npm start
   ```

3. **Access the application:**
   - Host application: http://localhost:8080
   - Remote entry point: http://localhost:8081/remoteEntry.js

### Option 2: Vanilla Module Federation Approach

1. **Install dependencies for both applications:**
   ```bash
   cd mfes_16_18_vanila/container && npm install
   cd mfes_16_18_vanila/products && npm install
   ```

2. **Start both applications (in separate terminals):**
   ```bash
   # Terminal 1 - Start the remote (products)
   cd mfes_16_18_vanila/products && npm start
   
   # Terminal 2 - Start the host (container)
   cd mfes_16_18_vanila/container && npm start
   ```

3. **Access the application:**
   - Host application: http://localhost:8080
   - Remote entry point: http://localhost:8081/remoteEntry.js

## Development

### Running in Development Mode
Both projects use webpack-dev-server for development. Make sure to start the remote application first, then the host application.

### Building for Production
```bash
# For Module Federation Bridge approach
cd mfes_16_18_@modulefederation/products && npm run build
cd mfes_16_18_@modulefederation/container && npm run build

# For Vanilla Module Federation approach
cd mfes_16_18_vanila/products && npm run build
cd mfes_16_18_vanila/container && npm run build
```

## Key Differences

| Feature | Module Federation Bridge | Vanilla Module Federation |
|---------|-------------------------|---------------------------|
| React Version Handling | Automatic via bridge | Manual configuration |
| Dependencies | `@module-federation/bridge-react` | Standard webpack ModuleFederationPlugin |
| Complexity | Higher (bridge abstraction) | Lower (direct configuration) |
| React Router | Included in products | Not included |
| Bundle Size | Larger (bridge overhead) | Smaller (no bridge) |

## Architecture Details

### Module Federation Bridge Approach
- Uses `@module-federation/bridge-react` to create isolated React contexts
- Automatically handles React version conflicts
- Provides better developer experience for React version management
- Includes React Router for navigation

### Vanilla Module Federation Approach
- Direct webpack ModuleFederationPlugin configuration
- Manual React version isolation
- Smaller bundle size
- More control over the federation setup
- Simpler debugging (no bridge abstraction)

## Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 8080 and 8081 are available
2. **React version conflicts**: The bridge approach handles this automatically, while vanilla requires careful configuration
3. **Build failures**: Ensure both applications are built before deploying

### Debugging
- Check browser console for Module Federation loading errors
- Verify remote entry points are accessible
- Ensure both applications are running simultaneously
