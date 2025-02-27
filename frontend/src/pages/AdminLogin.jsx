"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import 'react-datepicker/dist/react-datepicker.css';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page reload

    // Dummy Admin Credentials (Replace with API call)
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      navigate("/admin"); // Navigate to admin dashboard
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Admin Login</h2>

        <form className="reservation-form" onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="form-group">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="form-group">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="form-group">
              <input id="remember" type="checkbox" className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="form-group">Forgot password?</a>
          </div>

          <button type="submit" className="btn" style={{ width: "100%" }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
