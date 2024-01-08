import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {products.map((product) => {
          return (
            <div>
              <img key={product.id} src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
