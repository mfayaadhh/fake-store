import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  return (
    <div className="categories-container">
      <Link to="/category">
        <button>All</button>
      </Link>
      <Link to="/category/men's_clothing">
        <button>Men's Clothing</button>
      </Link>
      <Link to="/category/women's_clothing">
        <button>Women's Clothing</button>
      </Link>
      <Link to="/category/jewelery">
        <button>Jewelery</button>
      </Link>
      <Link to="/category/electronics">
        <button>Electronics</button>
      </Link>
    </div>
  );
}
