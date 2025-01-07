import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { DataContext } from "./Context/ContactContext";

const ContactManager = () => {
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
  } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              editContact={editContact}
              searchHandel={searchHandel}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          }
        />
        <Route
          path="/add-contacts"
          element={
            <AddContact
              isUpdate={isUpdate}
              updateContact={updateContact}
              submitHandler={handleSubmit}
              email={email}
              setEmail={setEmail}
              number={number}
              setNumber={setNumber}
              name={name}
              setName={setName}
            />
          }
        />
      </Routes>
    </>
  );
};

export default ContactManager;
