import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <div className="p-10 bg-white rounded-lg shadow-md w-96 text-center">
          <h2 className="mb-5 text-3xl font-semibold">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Please reach out with any questions,
            comments, or feedback.
          </p>
          <div className="flex flex-col items-center justify-center">
            <label className="mb-2 font-bold text-left">Name</label>
            <input
              className="w-full mb-4 p-2 border border-gray-400 rounded outline-none"
              type="text"
              placeholder="Your Name"
            />
            <label className="mb-2 font-bold text-left">Email</label>
            <input
              className="w-full mb-4 p-2 border border-gray-400 rounded outline-none"
              type="email"
              placeholder="Your Email"
            />
            <label className="mb-2 font-bold text-left">Message</label>
            <textarea
              className="w-full mb-4 p-2 h-32 border border-gray-400 rounded outline-none"
              placeholder="Your Message"
            ></textarea>
            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
