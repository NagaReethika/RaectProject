import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // import Navbar
import Home from "./pages/Home";
import ContactManager from "./pages/ContactManager";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
      <div style={{ marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contacts" element={<ContactManager />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
