import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CategoriesContainer() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      }, []);
  });
  return (
    <div className="categories-container">
      <Link to={`/category/${category}`}>
        {category.map((cat) => {
          <button>{cat}</button>;
        })}
      </Link>
    </div>
  );
}
