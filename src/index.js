import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList"
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
