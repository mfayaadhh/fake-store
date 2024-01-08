import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";

export default function App() {
  return (
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="help" element={<Help />}></Route>
        </Routes>
  );
}
