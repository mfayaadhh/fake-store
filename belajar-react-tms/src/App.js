import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category/Category";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Men from "./pages/Men";
import Jewelery from "./pages/Jewelery";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/category/men's_clothing" element={<Men />}></Route>
      <Route path="/category/women's_clothing" element={<Women />}></Route>
      <Route path="/category/jewelery" element={<Jewelery />}></Route>
      <Route path="/category/electronics" element={<Electronics />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="help" element={<Help />}></Route>
    </Routes>
  );
}
