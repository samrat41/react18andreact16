import React from 'react';
import { useAppContext } from 'shared-context-legacy';

const ContextValueDisplay = () => {
  const context = useAppContext();
  if (!context) return null;
  const { value, setValue } = context;
  return (
    <div style={{ margin: '16px 0', padding: 8, border: '1px solid #ccc' }}>
      <b>Context value in Products:</b> {value}
      <button style={{ marginLeft: 16 }} onClick={() => setValue('Updated from Products!')}>
        Update Context
      </button>
    </div>
  );
};

export default ContextValueDisplay;
