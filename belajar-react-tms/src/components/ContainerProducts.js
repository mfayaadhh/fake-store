import React from "react";

export default function ContainerProducts({products}) {
  return (
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
  );
}
