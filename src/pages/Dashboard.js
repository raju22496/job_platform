import React from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.full_name}</p>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Please login to view your dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;
