import React from 'react';
import RemoteProducts from './RemoteProducts';
import sharedStore from 'zustand-shared-context';
import './ZustandValueDisplay.css';
import './App.css';

console.log('sharedStore in Container:', {...sharedStore});
const ZustandValueDisplay = () => {
  // Directly use getState and setState from the zustand store
  const [value, setValue] = React.useState(sharedStore.getState().value);
  React.useEffect(() => {
    // Subscribe to store changes
    const unsub = sharedStore.subscribe((state) => {
      setValue(state.value);
    });
    return unsub;
  }, []);
  const handleUpdate = () => {
    sharedStore.setState({ value: 'Updated from Container!' });
  };
  return (
    <div className="zustand-value-container">
      <b>Zustand value in Container:</b>
      <span className="zustand-value-badge">{value}</span>
      <button style={{ marginLeft: 16 }} onClick={handleUpdate}>
        Update Zustand
      </button>
    </div>
  );
};

const App = () => (
  <div className="container-app">
    <h1 className="container-header">
      Container (Zustand Shared State) (React {React.version})
    </h1>
    <ZustandValueDisplay />
    <RemoteProducts />
  </div>
);

export default App;
