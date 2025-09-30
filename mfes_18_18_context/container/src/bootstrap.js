import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider, useAppContext } from "shared-context";
const RemoteProducts = React.lazy(() => import('products/ProductsApp'));

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
  <AppContextProvider>
    <div style={{ border: '1px solid #aaa', padding: 16 }}>
      <h1>Container (React 18)</h1>
      <ContextValueDisplay />
      <Suspense fallback={<div>Loading Products...</div>}>
        <RemoteProducts />
      </Suspense>
    </div>
  </AppContextProvider>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
