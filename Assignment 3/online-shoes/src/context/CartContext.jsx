import React, { createContext, useReducer, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

const ACTIONS = {
  INIT: "INIT",
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE_QTY: "UPDATE_QTY",
  CLEAR: "CLEAR"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT:
      return action.payload;
    case ACTIONS.ADD: {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);
      if (existing) {
        return state.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...state, item];
    }
    case ACTIONS.REMOVE:
      return state.filter((i) => i.id !== action.payload);
    case ACTIONS.UPDATE_QTY:
      return state.map((i) =>
        i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
      );
    case ACTIONS.CLEAR:
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [persisted, setPersisted] = useLocalStorage("cart_v1", []);
  const [state, dispatch] = useReducer(reducer, persisted);

  // sync reducer state to persisted storage
  React.useEffect(() => {
    setPersisted(state);
  }, [state, setPersisted]);

  const addToCart = (product, qty = 1) =>
    dispatch({ type: ACTIONS.ADD, payload: { ...product, qty } });
  const removeFromCart = (id) =>
    dispatch({ type: ACTIONS.REMOVE, payload: id });
  const updateQty = (id, qty) =>
    dispatch({ type: ACTIONS.UPDATE_QTY, payload: { id, qty } });
  const clearCart = () => dispatch({ type: ACTIONS.CLEAR });

  const subtotal = state.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, updateQty, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
