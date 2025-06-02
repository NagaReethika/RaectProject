import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


function ContactManager() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    // Initialize state from localStorage if available
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save contacts to localStorage on every update
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Add new contact handler
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // Remove contact by id
  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <h2>Contact Manager</h2>

      {/* AddContact form */}
      <AddContactForm addContactHandler={addContactHandler} />

      {/* Contact List */}
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

// Simple form component for adding contact
function AddContactForm({ addContactHandler }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in both name and email");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form className="ui form" onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Contact
      </button>
    </form>
  );
}

// Component for showing the contact list
function ContactList({ contacts, removeContactHandler }) {
  if (contacts.length === 0) return <p>No contacts added yet.</p>;

  return (
    <div className="ui celled list">
      {contacts.map(({ id, name, email }) => (
        <div key={id} className="item">
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
          <button
            className="ui button red right floated"
            onClick={() => removeContactHandler(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactManager;
