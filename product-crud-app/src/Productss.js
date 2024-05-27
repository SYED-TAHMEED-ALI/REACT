import React from 'react';
import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-6 product-form">
            <ProductForm />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 product-list">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
