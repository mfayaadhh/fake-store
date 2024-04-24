import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CategoriesContainer from "./CategoriesContainer";
import ContainerProducts from "./ContainerProducts";
import Hero from "./Hero";

export default function ContentContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Navbar />
        <Hero />
        <CategoriesContainer />
        <ContainerProducts products={products} />
    </>
  );
}
