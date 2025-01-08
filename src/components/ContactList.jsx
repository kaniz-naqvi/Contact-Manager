import React from "react";
import ContactCard from "./ContactCard";
import SearchBar from "./SearchBar";
import { Button } from "./Feildset";
const ContactList = ({
  contacts,
  deleteContact,
  searchHandel,
  editContact,
  showSnackbar,
}) => {
  return (
    <>
      <div className="d-flex  justify-content-between my-1 align-items-center">
        <h3>Contact List</h3>
        <Button
          icon={"bi-person-plus-fill"}
          link={true}
          linkPath={"/add-contacts"}
        />
      </div>
      <SearchBar searchHandel={searchHandel} />

      {contacts.map((c) => {
        return (
          <ContactCard
            editContact={editContact}
            deleteContact={deleteContact}
            key={c.id}
            id={c.id}
            name={c.name}
            email={c.email}
            number={c.number}
          />
        );
      })}
    </>
  );
};

export default ContactList;
