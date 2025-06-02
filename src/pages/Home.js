import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const [contactCount, setContactCount] = useState(0);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Get contacts count from localStorage
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContactCount(storedContacts.length);

    // Get welcome message passed from Login via state (if any)
    if (location.state?.welcomeMessage) {
      setWelcomeMessage(location.state.welcomeMessage);

      // Optional: Clear the welcome message from location state so it doesn't show again on refresh
      // This works if you control navigation and want to avoid message persisting on reload
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="ui container">
      <h1>Welcome to My Website</h1>

      {/* Display welcome message if exists */}
      {welcomeMessage && (
        <div className="ui positive message" style={{ marginBottom: "20px" }}>
          <p>{welcomeMessage}</p>
        </div>
      )}

      <p>
        You have added <strong>{contactCount}</strong> contacts.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/contacts" className="ui button primary">
          Go to Contact Manager
        </Link>
        <Link to="/login" className="ui button" style={{ marginLeft: "10px" }}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;

