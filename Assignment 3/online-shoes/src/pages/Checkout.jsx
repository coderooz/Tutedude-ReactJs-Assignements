import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div>Your cart is empty. <a href="/">Shop now</a></div>;
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock payment flow: replace with Stripe / Razorpay integration in production.
    await new Promise(res => setTimeout(res, 1000));

    // On success:
    clearCart();
    setLoading(false);
    navigate("/", { state: { orderSuccess: true } });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <div>
          <label className="block text-sm">Full name</label>
          <input required className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm">Address</label>
          <input required className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm">Payment</label>
          <div className="text-sm text-slate-600">This demo uses a mock payment flow. Integrate Stripe or Razorpay for real payments. See README.</div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-semibold">Total: ${subtotal.toFixed(2)}</div>
          <button type="submit" disabled={loading} className="bg-yellow-300 text-white hover:cursor-pointer shadow hover:shadow-md px-4 py-2 rounded">
            {loading ? "Placing order..." : "Place order"}
          </button>
        </div>
      </form>
    </div>
  );
}
