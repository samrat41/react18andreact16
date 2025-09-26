import React from 'react';
import './ProductsApp.css';

console.log(React.version);

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
      <ul className="products-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <button 
              className="add-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsApp;


