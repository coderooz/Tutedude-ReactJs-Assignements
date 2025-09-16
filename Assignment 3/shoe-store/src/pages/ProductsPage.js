// src/pages/ProductsPage.js
import React from "react";
import ProductCard from "../components/ProductCard";

const shoes = [
  { id: 1, name: "Nike Air Max", price: 120, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Adidas Ultraboost", price: 150, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Puma Classic", price: 90, image: "https://via.placeholder.com/150" },
];

function ProductsPage({ addToCart }) {
  return (
    <div className="products-page">
      <h1>🥿 Shoe Store - Products</h1>
      <div className="product-list">
        {shoes.map((shoe) => (
          <ProductCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
