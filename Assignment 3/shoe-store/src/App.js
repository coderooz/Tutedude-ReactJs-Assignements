// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (shoe) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === shoe.id);
      if (existing) {
        return prev.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...shoe, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
