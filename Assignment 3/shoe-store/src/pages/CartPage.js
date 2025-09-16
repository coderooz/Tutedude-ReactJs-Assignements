// src/pages/CartPage.js
import React from "react";
import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h2>Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}

export default CartPage;
