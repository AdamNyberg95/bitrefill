// Products.tsx
import React from 'react';
import { motion } from 'framer-motion';
import productsData from '../../assets/data/products.json';
import Product from './components/Product/Product';
import './Products.css';

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products-grid">
        {productsData.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Product product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
