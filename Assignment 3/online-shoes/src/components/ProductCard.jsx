import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="font-semibold block">{product.title}</Link>
        <div className="text-sm text-slate-600 mt-1">${product.price.toFixed(2)}</div>
      </div>
    </article>
  );
}
