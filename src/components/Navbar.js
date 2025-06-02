import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="ui menu">
      <Link to="/" className="header item">
        My Website
      </Link>
      <Link to="/" className="item">
        Home
      </Link>
      {/* <Link to="/contacts" className="item">
        Contact Manager
      </Link> */}
      <Link to="/login" className="item">
        Login
      </Link>
      <Link to="/signup" className="item"> SignUp</Link>
    </div>
    
  );
}

export default Navbar;
