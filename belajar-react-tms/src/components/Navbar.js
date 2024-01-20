import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaShoppingCart, FaInfo, FaStore } from "react-icons/fa";
import { RiLoginBoxFill, RiContactsBook2Fill } from "react-icons/ri";
import {
  IoIosHelpCircle,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { useCartContext } from "../hooks/useCartContext";

export default function Navbar() {
  const { itemCount } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between p-4 lg:p-6 bg-blue-500 shadow-md flex-wrap z-10">
      <Link
        to="/"
        className="text-white text-sm lg:text-2xl md:text-xl font-bold mb-4 lg:mb-0"
      >
        <FaStore className="inline-block mr-2 mb-2" /> Fake Store
      </Link>
      <Searchbar />
      <div className="relative border border-white rounded-full py-4 px-2 hover:border-blue-300">
      <Link
            className="text-white hover:text-blue-300 rounded-full p-2"
            to="/cart"
          >
            <FaShoppingCart className="inline-block" size={28} />
            <span className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {itemCount}
            </span>
          </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      <ul
        className={`flex flex-col space-x-0 lg:space-x-4 sm:items-center ${
          isOpen ? "block" : "hidden"
        } md:flex md:flex-row`}
      >
        <li className="mb-1 md:mb-0 ">
          <Link className="text-white hover:text-blue-300" to="/login">
            <RiLoginBoxFill className="inline-block" /> Login
          </Link>
        </li>
        <li className="mb-1 md:mb-0">
          <Link className="text-white hover:text-blue-300" to="/about">
            <FaInfo className="inline-block" /> About
          </Link>
        </li>
        <li className="mb-1 md:mb-0">
          <Link className="text-white hover:text-blue-300" to="/contact">
            <RiContactsBook2Fill className="inline-block" /> Contact
          </Link>
        </li>
        <li className="mb-1 md:mb-0">
          <Link className="text-white hover:text-blue-300" to="/help">
            <IoIosHelpCircle className="inline-block" /> Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
