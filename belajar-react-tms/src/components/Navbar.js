import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        My Store
      </Link>
      <Searchbar />
      <ul>
        <li>
          <Link className="button" to="cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className="button" to="Login">
            Login
          </Link>
        </li>
        <li>
          <Link className="button" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="button" to="contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="button" to="help">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
