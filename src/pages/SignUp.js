import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Replace this with real signup logic (API call, validation, etc.)
    console.log("Signup data:", { username, email, password });

    // After signup success, redirect to login page
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="ui container" style={{ marginTop: "50px", maxWidth: "400px" }}>
      <h2>Sign Up</h2>
      <form className="ui form" onSubmit={handleSignup}>
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
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
