import React from 'react';

const CartSummary = ({ items, total }) => (
  <div className="cart-summary">
    <h4>Cart Summary</h4>
    {items.map((item, i) => (
      <div key={i} className="cart-item">
        <span>{item.name}</span>
        <span>x{item.qty}</span>
        <span>${item.price.toFixed(2)}</span>
      </div>
    ))}
    <div className="cart-total">Total: <b>${total.toFixed(2)}</b></div>
  </div>
);

export default CartSummary;
