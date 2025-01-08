import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { DataContext } from "./Context/ContactContext";

// The main ContactManager component manages routes and states for contacts
const ContactManager = () => {
  // Destructure values and functions from the context (DataContext)
  const {
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    addContact,
    contacts,
    deleteContact,
    searchHandel,
    editContact,
    updateContact,
    isUpdate,
  } = useContext(DataContext); // Access context to get contact-related data and functions

  // Handle the form submission for adding a new contact
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form behavior
    addContact(); // Call the addContact function to add a new contact
  };

  return (
    <>
      <Header /> {/* Render the header component */}
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
              isUpdate={isUpdate} // Pass isUpdate flag to check if it's an update
              updateContact={updateContact} // Pass updateContact function for updating a contact
              submitHandler={handleSubmit} // Pass the submit handler function to handle form submission
              email={email} // Pass email state for the form
              setEmail={setEmail} // Pass setEmail function for updating email state
              number={number} // Pass number state for the form
              setNumber={setNumber} // Pass setNumber function for updating number state
              name={name} // Pass name state for the form
              setName={setName} // Pass setName function for updating name state
            />
          }
        />
      </Routes>
    </>
  );
};

export default ContactManager;
