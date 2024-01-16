import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <>
      <Navbar />
      <div className="flex align-baseline justify-center h-screen bg-gray-200">
        <form
          className="p-10 bg-white rounded-lg shadow-md w-96"
          onSubmit={handleLogin}
        >
          <h2 className="mb-5 text-3xl font-semibold text-center">Login</h2>
          <input
            className="w-full mb-3 p-2 border border-gray-400 rounded outline-none"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full mb-5 p-2 border border-gray-400 rounded outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            type="submit"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <Link className="text-blue-500 hover:text-blue-700" to="/register">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
