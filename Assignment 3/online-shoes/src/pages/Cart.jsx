import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <Link to="/" className="mt-4 inline-block text-accent underline">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        {cart.map(item => (
          <div key={item.id} className="flex gap-4 items-center border-b py-4">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-slate-600">${item.price.toFixed(2)}</div>
              <div className="mt-2 flex items-center gap-2">
                <input type="number" min="1" value={item.qty}
                       onChange={(e) => updateQty(item.id, Number(e.target.value))}
                       className="w-20 border rounded px-2 py-1" />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="border rounded p-4">
        <h3 className="font-semibold">Order summary</h3>
        <div className="flex justify-between mt-4">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="block mt-6 text-center bg-gray-300 text-white shadow hover:bg-amber-300 hover:shadow-2xs py-2 rounded">Checkout</Link>
      </aside>
    </div>
  );
}
