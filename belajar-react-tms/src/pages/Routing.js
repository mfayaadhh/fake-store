import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import ContainerProducts from "../components/ContainerProducts";
import Hero from "../components/Hero";

export default function Routing({addToCart}) {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [name]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero/>
        <CategoriesContainer />
        <ContainerProducts addToCart={addToCart} products={products} />
      </div>
    </>
  );
}
