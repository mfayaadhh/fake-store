import React from "react";
import { Link } from "react-router-dom";

export default function ContainerProducts({ products }) {
  return (
    <div className="container-products">
      {products.map((product) => {
        return (
          <div className="container-products-product">
            <Link to={`/products/${product.id}`}>
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            </Link>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
