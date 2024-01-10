import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Men from "./pages/Home/Men";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="men" element={<Men />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="help" element={<Help />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="help" element={<Help />}></Route>
    </Routes>
  );
}
