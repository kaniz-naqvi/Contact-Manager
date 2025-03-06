import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { DataContext } from "./Context/ContactContext";

const ContactManager = () => {
  const {
    name,
    email,
    number,
    handleFormChange,
    addContact,
    contacts,
    deleteContact,
    searchHandel,
    editContact,
    updateContact,
    isUpdate,
  } = useContext(DataContext);

  // Handle form submission for adding a new contact
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
  };

  return (
    <>
      <Header />
      <Routes>
        {/* Route for displaying the contact list */}
        <Route
          path="/"
          element={
            <ContactList
              editContact={editContact} // Pass editContact function as a prop
              searchHandel={searchHandel} // Pass searchHandel function for searching contacts
              contacts={contacts} // Pass contacts to display them
              deleteContact={deleteContact} // Pass deleteContact function for deleting a contact
            />
          }
        />
        {/* Route for adding or editing a contact */}
        <Route
          path="/add-contacts"
          element={
            <AddContact
              isUpdate={isUpdate}
              updateContact={updateContact}
              submitHandler={handleSubmit}
              email={email}
              number={number}
              name={name}
              handleFormChange={handleFormChange}
            />
          }
        />
      </Routes>
    </>
  );
};

export default ContactManager;
