import React, { useState } from "react";
import ShoeList from "./components/ShoeList.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const shoes = [
    {
      id: 1,
      name: "Nike Air Zoom",
      price: 120,
      img: "https://via.placeholder.com/150x100?text=Nike+Air+Zoom",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      img: "https://via.placeholder.com/150x100?text=Adidas+Ultraboost",
    },
    {
      id: 3,
      name: "Puma Running",
      price: 100,
      img: "https://via.placeholder.com/150x100?text=Puma+Running",
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: 90,
      img: "https://via.placeholder.com/150x100?text=Reebok+Classic",
    },
  ];

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === shoe.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div className="store-container">
      <h1 className="heading">Assignment-3 Online Shoe Store</h1>
      <div className="store-content">
        <ShoeList shoes={shoes} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
