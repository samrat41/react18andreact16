# React 16 & 18 Module Federation Examples

This repository contains two different approaches to implementing Module Federation with React 16 and React 18, demonstrating how to handle version compatibility between different React versions in a microfrontend architecture.

## Projects Overview

### 1. `mfes_16_18_@modulefederation` - Module Federation Bridge Approach
This project uses the `@module-federation/bridge-react` package to handle React version compatibility between the host (React 18) and remote (React 16) applications.

**Architecture:**
- **Container (Host)**: React 18.3.1 - serves as the main application
- **Products (Remote)**: React 16.14.0 - exposes a products microfrontend
- **Bridge**: Uses `@module-federation/bridge-react` to manage React version isolation

**Key Features:**
- React version isolation using Module Federation Bridge
- Shared dependencies management
- Independent React instances per microfrontend

### 2. `mfes_16_18_vanila` - Vanilla Module Federation Approach
This project demonstrates a vanilla Module Federation setup without additional bridge libraries, showing how React 16 and 18 can coexist.

**Architecture:**
- **Container (Host)**: React 18.3.1 - serves as the main application
- **Products (Remote)**: React 16.14.0 - exposes a products microfrontend
- **No Bridge**: Direct Module Federation implementation

**Key Features:**
- Direct Module Federation without additional libraries
- Independent React versions per microfrontend
- Manual React version management

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both approaches
5. Submit a pull request

## License

This project is for educational purposes demonstrating Module Federation with React 16 and 18.
