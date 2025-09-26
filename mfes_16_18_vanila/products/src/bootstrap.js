import React from 'react';
import ReactDOM from 'react-dom';
import ProductsApp from './ProductsApp';

export function mount(el, props = {}) {
  ReactDOM.render(<ProductsApp {...props} />, el);
  return () => {
    if (el) {
      ReactDOM.unmountComponentAtNode(el);
    }
  };
}

export function unmount(el) {
  if (el) {
    ReactDOM.unmountComponentAtNode(el);
  }
}


