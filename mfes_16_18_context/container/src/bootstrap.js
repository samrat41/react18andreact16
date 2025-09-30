import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider, useAppContext } from "shared-context-legacy";
import RemoteProducts from './RemoteProducts';

const ContextValueDisplay = () => {
  const context = useAppContext();
  if (!context) return <div>Context not found!</div>;
  const { value, setValue } = context;
  return (
    <div style={{ marginBottom: 16 }}>
      <b>Context value in Container:{value}</b>
    </div>
  );
};

const App = () => (
  <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
    <h1>Container (React {React.version})</h1>
    <p>Remote below runs its own React 16 tree:</p>
    <RemoteProducts />
    {/* <ContextValueDisplay /> */}
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
