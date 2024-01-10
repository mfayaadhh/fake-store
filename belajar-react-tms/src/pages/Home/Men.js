import { useState, useEffect } from "react";

export default function Men() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setCategory(data));
  }, [category]);
  return (
    <div className="container-products">
      {category.map((cat) => {
        return (
          <div>
            <img key={cat.id} src={cat.image} alt={cat.title} />

            <p>{cat.title}</p>
            <p>${cat.price}</p>
          </div>
        );
      })}
    </div>
  );
}
