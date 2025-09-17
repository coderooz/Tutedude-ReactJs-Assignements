import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ShoeStore</h2>
          <p className="text-sm text-gray-300">
            Discover premium quality shoes for every occasion. Comfort, style, and performance — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@shoestore.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-accent">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent">Twitter</a>
          </div>
        </div>

      </div>
      <div className="bg-slate-900 text-center text-sm py-4">
        © {new Date().getFullYear()} ShoeStore. All rights reserved.
      </div>
    </footer>
  );
}
