import React from 'react';
import ContextValueDisplay from './ContextValueDisplay';
import './ProductsApp.css';

const ProductsApp = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$29.99' },
    { id: 2, name: 'Product B', price: '$39.99' },
    { id: 3, name: 'Product C', price: '$49.99' }
  ];

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // Dispatch event to host
    const event = new CustomEvent('product:addToCart', {
      detail: product
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="products-container">
      <h2 className="products-header">Products Remote (React {React.version})</h2>
      <ContextValueDisplay />
    </div>
  );
};

export default ProductsApp;


