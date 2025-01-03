import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("Contact");
    return savedContact ? JSON.parse(savedContact) : [];
  }); // State to manage contacts

  // Function to add a new contact
  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact]); // Add new contact to the list
  };

  const handelDelete = (id) => {
    if (window.confirm("You won't be able to restore this. Proceed?")) {
      const updateContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updateContacts);
    }
  };
  useEffect(() => {
    localStorage.setItem("Contact", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <Header />
      <AddContact addContact={addContactHandler} />
      <ContactList contacts={contacts} deleteContact={handelDelete} />
      {/* Pass contacts to ContactList */}
    </>
  );
};

export default App;
