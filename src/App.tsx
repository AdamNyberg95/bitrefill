import React from 'react';
import './global.css';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import Products from './components/Products/Products';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Products />
        </header>
      </div>
    </CartProvider>
  );
}

export default App;
