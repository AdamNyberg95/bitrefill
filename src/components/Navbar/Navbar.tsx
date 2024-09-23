import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for Navbar
import { BitrefillLogo, TrashcanIcon, CartIcon } from '../../assets/icons';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useCart } from '../../context/CartContext';
import { useAnimation } from 'framer-motion';
const Navbar: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTotalItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <ul
        style={{
          padding: '0',
          margin: '0',
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
