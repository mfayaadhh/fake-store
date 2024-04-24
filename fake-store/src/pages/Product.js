import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CartBtn from "../components/CartBtn";

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
      <div className="flex justify-center md:mt-24 mt-48">
        <div className="w-1/2 pt-10">
          <img
            className="w-full h-64 object-contain rounded-lg"
            src={products.image}
            alt={products.title}
          />
        </div>
        <div className="w-1/2 p-10">
          <h1 className="text-2xl font-bold mb-2">{products.title}</h1>
          <h2 className="text-xl font-semibold text-blue-500 mb-4">
            ${products.price}
          </h2>
          <p className="text-gray-700 mb-4">{products.description}</p>

          <CartBtn product={products}/>
        </div>
      </div>
    </>
  );
}
