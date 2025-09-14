import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Job Platform</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/dashboard">Dashboard</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
