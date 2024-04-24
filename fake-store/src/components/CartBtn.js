import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function CartBtn({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:scale-90 active:bg-blue-700"
    >
      Add to Cart
    </button>
  );
}
