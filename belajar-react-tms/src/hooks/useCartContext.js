import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export function useCartContext() {
    const context = useContext(CartContext);

    if(!context) {
        throw Error('useCartContext must be used inside a WorkoutsContextProvider')
      }
    
      return context
  }