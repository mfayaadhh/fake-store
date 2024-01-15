import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Product() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="product-wrapper">
        <div className="product-content">
          <img src={products.image} alt={products.title} />
        </div>
        <div className="product-sidebar">
            <h1>{products.title}</h1>
            <h2>${products.price}</h2>
            <p>{products.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
