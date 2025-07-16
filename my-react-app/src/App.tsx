import React from 'react';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import BrandList from './BrandList';
import OrderList from './OrderList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <CategoryList />
      <BrandList />
      <OrderList />
    </div>
  );
}

export default App;
