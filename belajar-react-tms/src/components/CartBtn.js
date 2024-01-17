import React from "react";

export default function CartBtn({ product, addToCart }) {
  return (
    <button
      onClick={() => addToCart(product)}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:scale-90"
    >
      Add to Cart
    </button>
  );
}
