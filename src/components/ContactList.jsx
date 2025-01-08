import React from "react";
import ContactCard from "./ContactCard"; // Importing ContactCard
import SearchBar from "./SearchBar"; // Importing SearchBar
import { Button } from "./Feildset"; // Importing Button

const ContactList = ({
  contacts, // List of contacts
  deleteContact, // Function to delete a contact
  searchHandel, // Function to handle search
  editContact, // Function to edit a contact
}) => {
  return (
    <>
      <div className="d-flex  justify-content-between my-1 align-items-center">
        <h3>Contact List</h3>
        {/* Button to navigate to Add Contact page */}
        <Button
          icon={"bi-person-plus-fill"}
          link={true}
          linkPath={"/add-contacts"}
        />
      </div>

      {/* Search bar component */}
      <SearchBar searchHandel={searchHandel} />

      {/* Rendering contact cards */}
      {contacts.map((c) => (
        <ContactCard
          editContact={editContact}
          deleteContact={deleteContact}
          key={c.id}
          id={c.id}
          name={c.name}
          email={c.email}
          number={c.number}
        />
      ))}
    </>
  );
};

export default ContactList;
