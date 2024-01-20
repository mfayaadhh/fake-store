import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-gray-200 md:mt-20 mt-48">
        <div className="p-10 bg-white rounded-lg shadow-md w-96 text-center">
          <h2 className="mb-5 text-3xl font-semibold">About Fake Store</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Fake Store, the premier online destination for pretend
            shopping. Our mission is to provide a fun and engaging platform for
            learning and testing web development skills.
          </p>
          <h3 className="mb-3 text-2xl font-semibold">Our Products</h3>
          <p className="text-gray-700 mb-4">
            We offer a wide range of fake products across multiple categories.
            From electronics to clothing, you can add anything to your cart and
            pretend to purchase.
          </p>
        </div>
      </div>
    </>
  );
}
