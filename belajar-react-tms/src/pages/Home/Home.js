import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

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
        <div className="hero"></div>
        <div className="categories-container">
          <button>
            <Link to={"men"}>Men's Clothing</Link>
          </button>
          <button>Women's Clothing</button>
          <button>Jewelery</button>
          <button>Electronics</button>
        </div>
        <div className="container-products">
          {products.map((product) => {
            return (
              <div>
                <img key={product.id} src={product.image} alt={product.title} />

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
