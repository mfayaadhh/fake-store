import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });
  return (
    <div className="container">
      <div className="hero-image">
        <div className="hero-text">
          <h1>This is Hero</h1>
        </div>
      </div>
      <div className="categories-container">
        <Link to="/category">
          <button>All</button>
        </Link>
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
        <button>Jewelery</button>
        <button>Electronics</button>
      </div>
      <div className="container-products">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
