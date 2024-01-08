import { useState, useEffect } from "react";
import Navbar from "../Navbar";

export default function Home() {
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
        <div className="sidebar">
            <h3>Categories</h3>
            <h4>Men's Clothing</h4>
            <h4>Women's Clothing</h4>
            <h4>Jewelery</h4>
            <h4>Electronics</h4>
        </div>
        <div className="container-products">
          {products.map((product) => {
            return (
              <div>
                  <img
                    key={product.id}
                    src={product.image}
                    alt={product.title}
                  />

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
