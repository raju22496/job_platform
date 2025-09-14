import React, { useState } from "react";
import { useNavigate } from "react-router-dom";     

import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
   if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      navigate("/dashboard"); // redirect to dashboard or jobs page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
