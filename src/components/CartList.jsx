import React, { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className='cart-container'>
      {CART.map((cartItem, cartIndex) => (
        <div className='cart-item' key={cartIndex}>
          <img
            className='cart-item-image'
            src={cartItem.url}
            alt={cartItem.name}
          />
          <div className='cart-item-details'>
            <span className='cart-item-name'>{cartItem.name}</span>
            <div className='cart-item-quantity'>
              <button
                onClick={() => {
                  const newCART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                      : item;
                  });
                  setCART(newCART);
                }}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => {
                  const newCART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(newCART);
                }}
              >
                +
              </button>
            </div>
            <span>Rs. {cartItem.price * cartItem.quantity}</span>
          </div>
        </div>
      ))}
      <div className='cart-summary'>
        <p>
          Total <span></span>
          {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
        </p>
      </div>
    </div>
  );
}

export default CartList;
