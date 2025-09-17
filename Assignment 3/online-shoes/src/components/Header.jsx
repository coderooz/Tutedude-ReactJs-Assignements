import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">ShoeStore</Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="relative px-4 py-2 border rounded bg-blue-100">
            Cart
            {totalItems > 0 && <span className="ml-2 inline-flex items-center justify-center bg-yellow-300 text-white rounded-full px-2 py-0.5 text-xs">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
