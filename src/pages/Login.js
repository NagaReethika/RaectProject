// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with real auth logic
    if (username === "admin" && password === "1234") {
      // Pass welcomeMessage in state while navigating
      navigate("/", { state: { welcomeMessage: `Welcome back, ${username}!` } });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <h2>Login</h2>
      <form className="ui form" onSubmit={handleLogin}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="ui button primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
