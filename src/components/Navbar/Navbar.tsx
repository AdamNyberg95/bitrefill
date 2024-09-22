import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for Navbar
import { BitrefillLogo, TrashcanIcon, CartIcon } from '../../assets/icons';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useCart } from '../../context/CartContext';
const Navbar: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  return (
    <nav>
      <ul>
        <BitrefillLogo />
      </ul>
      <ul onClick={() => setCartOpen(!isCartOpen)} className="cartIcon">
        <div className="iconContainer">
          <CartIcon />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
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
