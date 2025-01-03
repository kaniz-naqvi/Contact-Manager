import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="container w-75 p-3">
      <h2 className="text-center fs-3">Contact List</h2>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          deleteContact={deleteContact}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;
