import React from 'react';
import { TrashcanIcon } from '../../../assets/icons';
import {
  useCart,
  CartItem as CartItemType,
} from '../../../context/CartContext';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();

  const totalPrice = item.range.min * item.quantity;

  return (
    <li className="cart-item">
      :
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
          }}
        >
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">${item.range.min} value</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <p className="cart-item-quantity">{item.quantity}</p>{' '}
          <div
            className="cart-item-remove"
            onClick={() => removeFromCart(item.id)}
          >
            <TrashcanIcon />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <p className="cart-item-price">${totalPrice}</p>
      </div>
    </li>
  );
};

export default CartItem;
