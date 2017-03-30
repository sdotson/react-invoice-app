import React from 'react';
import ProductList from '../components/product_list';
import Header from '../components/header';

const Products = (props) => {
  return (
    <div>
      <Header title="Products" />
      <ProductList />
    </div>
  );
};

export default Products;
