import React, { useState, useEffect } from "react";
import { Button } from "./Icons";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // Function to handle search/filter
  const handelSubmit = (e) => {
    e.preventDefault();
    const filteredContact = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        contact.number.includes(inputValue)
      );
    });
    setFilteredContacts(filteredContact);
  };

  // Update filtered contacts whenever the contacts list changes
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <div className="container w-75 pt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fs-3 fs-sm-6">Contact List</h2>
        <Link to="/add">
          <Button icon="bi-plus-lg" color={"primary rounded-circle"} />
        </Link>
      </div>

      <form onSubmit={handelSubmit} className="d-flex gap-0">
        <input
          value={inputValue}
          type="text"
          placeholder="Search Contacts"
          className="rounded-pill my-2 w-100 px-3 py-1 text-light"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="btn rounded-0 search-btn px-3 mt-2 bg-light text-dark"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>

      {filteredContacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
