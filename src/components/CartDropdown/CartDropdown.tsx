import React from 'react';
import CartItem from './components/CartItem';
import { useCart } from '../../context/CartContext';
import './CartDropdown.css';

const CartDropdown: React.FC = () => {
  const { cartItems, getTotalValue } = useCart();
  const totalValue = getTotalValue(); // Get the total value

  return (
    <div className="cart-dropdown">
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <p
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span className="total-label">Total: </span>
        <span className="total-value">${totalValue.toFixed(2)}</span>
      </p>
      <button className="button">Continue to checkout</button>
    </div>
  );
};

export default CartDropdown;
