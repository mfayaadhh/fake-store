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
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4 bg-blue-500">
      <Link to={`/category`} className="m-2">
        <button className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-600">All</button>
      </Link>
      {category.map((cat) => (
        <Link to={`/category/${cat}`} key={cat} className="m-2">
          <button className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-600">{cat.toUpperCase()}</button>
        </Link>
      ))}
    </div>
  );
}
