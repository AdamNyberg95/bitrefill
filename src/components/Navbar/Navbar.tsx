import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for Navbar
import { BitrefillLogo, TrashcanIcon, CartIcon } from '../../assets/icons';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useCart } from '../../context/CartContext';
const Navbar: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const getTotalItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <nav>
      <ul
        style={{
          padding: '0',
        }}
      >
        <BitrefillLogo />
      </ul>
      <ul onClick={() => setCartOpen(!isCartOpen)} className="cartIcon">
        <div className="iconContainer">
          <CartIcon />
          {cartItems.length > 0 && (
            <span className="cart-count">{getTotalItemsCount()}</span>
          )}
        </div>
        <p className="cart">Cart</p>
        {isCartOpen && <CartDropdown />}
        {isCartOpen && <div className="cart-overlay"></div>}
      </ul>
    </nav>
  );
};

export default Navbar;
