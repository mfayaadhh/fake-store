import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaShoppingCart, FaInfo, FaStore } from "react-icons/fa";
import { RiLoginBoxFill, RiContactsBook2Fill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500 shadow-md">
      <Link to="/" className="text-white text-2xl font-bold">
        <FaStore className="inline-block mr-2" /> Fake Store
      </Link>
      <Searchbar />
      <ul className="flex items-center space-x-4">
        <li>
          <Link className="text-white hover:text-blue-300" to="/cart">
            <FaShoppingCart className="inline-block mr-1" /> Cart
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-300" to="/login">
            <RiLoginBoxFill className="inline-block mr-1" /> Login
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-300" to="/about">
            <FaInfo className="inline-block mr-1" /> About
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-300" to="/contact">
            <RiContactsBook2Fill className="inline-block mr-1" /> Contact
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-300" to="/help">
            <IoIosHelpCircle className="inline-block mr-1" /> Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
