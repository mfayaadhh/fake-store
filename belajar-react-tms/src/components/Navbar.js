import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaShoppingCart, FaInfo, FaStore } from "react-icons/fa";
import { RiLoginBoxFill, RiContactsBook2Fill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <FaStore />      Fake Store
      </Link>
      <Searchbar />
      <ul>
        <li>
          <Link className="button" to="cart">
            <FaShoppingCart />   Cart
          </Link>
        </li>
        <li>
          <Link className="button" to="Login">
            <RiLoginBoxFill />   Login
          </Link>
        </li>
        <li>
          <Link className="button" to="about">
            <FaInfo />   About
          </Link>
        </li>
        <li>
          <Link className="button" to="contact">
            <RiContactsBook2Fill />   Contact
          </Link>
        </li>
        <li>
          <Link className="button" to="help">
            <IoIosHelpCircle />   Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
