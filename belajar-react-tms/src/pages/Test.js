// import React from "react";
// import { useParams } from "react-router-dom";

// export default function Test({ products }) {
//   const { name } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/category`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       });
//   });

//   return (
//     <div className="container-products">
//       {products.map((product) => {
//         return (
//           <div key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//             <p>${product.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
