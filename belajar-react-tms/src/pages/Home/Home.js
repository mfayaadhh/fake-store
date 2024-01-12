import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
  }, [category]);

  const handleClick = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="categories-container">
          <button onClick={() => setCategory(null)}>All</button>
          <button onClick={() => handleClick("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => handleClick("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => handleClick("jewelery")}>Jewelery</button>
          <button onClick={() => handleClick("electronics")}>
            Electronics
          </button>
        </div>
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
