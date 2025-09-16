// src/components/ProductCard.js
import React from "react";

function ProductCard({ shoe, addToCart }) {
  return (
    <div className="product-card">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>${shoe.price}</p>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
