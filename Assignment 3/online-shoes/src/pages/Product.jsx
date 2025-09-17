import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img src={product.thumbnail} alt={product.title} className="w-full h-auto rounded" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl mt-2">${product.price.toFixed(2)}</p>
        <p className="mt-4 text-slate-600">{product.description}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => addToCart(product, 1)}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:opacity-90 hover:cursor-pointer shadow hover:shadow-md"
          >
            Add to cart
          </button>
          <Link to="/cart" className="px-4 py-2 border rounded shadow hover:shadow-md">Go to cart</Link>
        </div>
      </div>
    </div>
  );
}
