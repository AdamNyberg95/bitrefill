// Products.tsx
import React from 'react';
import productsData from '../../assets/data/products.json';
import Product from './components/Product/Product';
import './Products.css';

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products-grid">
        {productsData.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
