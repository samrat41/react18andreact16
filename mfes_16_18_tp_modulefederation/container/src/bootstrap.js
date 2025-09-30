import React from 'react';
import { createRoot } from 'react-dom/client';
import { createRemoteAppComponent } from '@module-federation/bridge-react';

const FallbackError = ({ error }) => (
  <div>
    <h2>Failed to load Products</h2>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{error && error.message}</pre>
  </div>
);

const FallbackLoading = <div>Loading remote...</div>;

const RemoteProductsApp = createRemoteAppComponent({
  loader: () => import('products/export-app'),
  fallback: FallbackError,
  loading: FallbackLoading
});

const App = () => (
  <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
    <h1>Container</h1>
    <p>React version: {React.version}</p>
    <p>Consuming remote below:</p>
    <RemoteProductsApp />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);


