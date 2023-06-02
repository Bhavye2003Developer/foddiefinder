import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form
        // onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <Link to="/"> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              })
                .then((response) => {
                  if (response.status === 200) {
                    console.log("login success");
                    return response.json();
                  } else if (response.status === 401) {
                    console.log("login unsuccess");
                    throw new Error("Invalid credentials");
                  } else {
                    console.log("login unsuccess");
                    throw new Error("Something went wrong. Please try again.");
                  }
                })
                .then((data) => {
                  // Handle the successful login response
                  console.log(data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>
          {/* </Link> */}
          {/* <Link to="/register"> */}
          <button
            type="submit"
            className="ml-10 bg-orange-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Register
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
