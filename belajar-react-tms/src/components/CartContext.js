import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function useCart() {
  const { cart, setCart, addToCart } = useContext(CartContext);
  return { cart, setCart, addToCart };
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  

  function addToCart(p) {
    if (cart.some((cartItem) => cartItem.id === p.id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === p.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }
    setCart((cart) => [...cart, { ...p, amount: 1 }]);
  }
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
