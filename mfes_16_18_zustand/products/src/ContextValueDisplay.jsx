import React from 'react';
import sharedStore from 'zustand-shared-context';
import './ContextValueDisplay.css';

const ContextValueDisplay = () => {
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
    sharedStore.setState({ value: 'Updated from Products!' });
  };
  return (
    <div className="zustand-value-container">
      <b>Zustand value in Products:</b>
      <span className="zustand-value-badge">{value}</span>
      <button style={{ marginLeft: 16 }} onClick={handleUpdate}>
        Update Zustand
      </button>
    </div>
  );
};

export default ContextValueDisplay;
