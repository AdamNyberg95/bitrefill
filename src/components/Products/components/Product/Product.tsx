import React from 'react';
import { useCart } from '../../../../context/CartContext';
import './Product.css';

// Define the Product type
interface ProductProps {
  product: {
    id: string;
    image: string;
    name: string;
    range: {
      min: number;
      max: number;
    };
    currency: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="product"
      onClick={() => addToCart({ ...product, quantity: 1 })} // Add a quantity of 1 when adding to cart
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        Price Range: {product.range.min} - {product.range.max}{' '}
        {product.currency}
      </p>
    </div>
  );
};

export default Product;
