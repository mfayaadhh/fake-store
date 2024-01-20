import React from "react";
import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";

export default function ContainerProducts({ products }) {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {products.map((product) => {
        return (
          <div
            className="flex flex-col justify-end items-center m-4 bg-white rounded shadow-lg h-full p-2 md:w-1/4 sm:w-1/2 w-full"
            key={product.id}
          >
            <Link to={`/products/${product.id}`} className="group">
              <img
                className="mr-auto ml-auto w-auto max-h-32 transition duration-500 ease-in-out transform group-hover:scale-105"
                src={product.image}
                alt={product.title}
              />
              <p className="text-center text-lg font-semibold line-clamp-2 min-h-14">
                {product.title}
              </p>
              <p className="text-center text-lg font-bold text-blue-500">
                ${product.price}
              </p>
            </Link>
            <CartBtn product={product}/>
          </div>
        );
      })}
    </div>
  );
}
