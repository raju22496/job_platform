import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
