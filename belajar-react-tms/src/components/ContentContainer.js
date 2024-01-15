import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CategoriesContainer from "./CategoriesContainer";
import ContainerProducts from "./ContainerProducts";

export default function ContentContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      }, []);
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>This is Hero</h1>
          </div>
        </div>
        <CategoriesContainer />
        <ContainerProducts products={products} />
      </div>
    </>
  );
}
