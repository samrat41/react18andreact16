import React from 'react';
import { createRoot } from 'react-dom/client';
import RemoteProducts from './RemoteProducts';

const App = () => (
  <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
    <h1>Container (React {React.version})</h1>
    <p>Remote below runs its own React 16 tree:</p>
    <RemoteProducts />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);


