import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0); // New state variable for item count

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
      setItemCount(itemCount + 1); // Increase item count
      return;
    }
    setCart((cart) => [...cart, { ...p, amount: 1 }]);
    setItemCount(itemCount + 1); // Increase item count
  }

  function increaseQuantity(p) {
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
    setItemCount(itemCount + 1); // Increase item count
  }

  function decreaseQuantity(p) {
    if (p.amount === 1) {
      removeItem(p);
    } else {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === p.id
            ? {
                ...cartItem,
                amount: cartItem.amount - 1,
              }
            : cartItem
        )
      );
      setItemCount(itemCount - 1); // Decrease item count
    }
  }
  
  

  function removeItem(p) {
    let arr = cart.filter((item) => item.id !== p.id);
    setCart(arr);
    setItemCount(itemCount - p.amount); // Decrease item count
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        itemCount,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
