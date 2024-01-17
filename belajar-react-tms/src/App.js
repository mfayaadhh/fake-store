import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Routing from "./pages/Routing";
import Product from "./pages/Product";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(p) {
    setCart((cart) => [
      ...cart,
      { ...p, amount: 1 } // <-- initial amount 1
    ])
  }

  return (
    <Routes>
      <Route index element={<Home addToCart={addToCart} />}></Route>
      <Route path="/products/:id" element={<Product />}></Route>
      <Route
        path="/category"
        element={<Category addToCart={addToCart} />}
      ></Route>
      <Route path="/category/:name" element={<Routing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart cart={cart}/>}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/help" element={<Help />}></Route>
    </Routes>
  );
}
