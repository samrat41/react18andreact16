import React from 'react';
import { useAppContext } from 'shared-context';

const ProductsApp = () => {
  const context = useAppContext();
  if (!context) return <div>Context not found!</div>;
  const { value, setValue } = context;
  return (
    <div style={{ border: '1px solid #aaa', padding: 16 }}>
      <h2>Products (Remote, React 18)</h2>
      <div>Context value: <b>{value}</b></div>
      <button onClick={() => setValue('Updated from Products!')}>Update Context</button>
    </div>
  );
};

export default ProductsApp;
