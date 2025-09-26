import React from 'react';
import ProductsApp from './ProductsApp';
import { createBridgeComponent } from '@module-federation/bridge-react';

export default createBridgeComponent({
  rootComponent: ProductsApp
});


