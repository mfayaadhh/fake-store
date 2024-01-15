import React from "react";
import { useState, useEffect } from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import Navbar from "../components/Navbar";

export default function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="hero-image">
        <div className="hero-text">
          <h1>This is Hero</h1>
        </div>
      </div>
      <CategoriesContainer />
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
    </>
    
  );
}
