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
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.id === p.id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === p.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      console.log(cart);
      return;
    }
    setCart((cart) => [
      ...cart,
      { ...p, amount: 1 }, // <-- initial amount 1
    ]);
    console.log(cart);
  }

  return (
    <Routes>
      <Route index element={<Home addToCart={addToCart} />}></Route>
      <Route path="/products/:id" element={<Product />}></Route>
      <Route
        path="/category"
        element={<Category addToCart={addToCart} />}
      ></Route>
      <Route path="/category/:name" element={<Routing addToCart={addToCart}/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/cart"
        element={<Cart cart={cart} setCart={setCart} />}
      ></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/help" element={<Help />}></Route>
    </Routes>
  );
}
