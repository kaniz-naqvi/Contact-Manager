import React from "react";
import { Button } from "./Icons";

const ContactCard = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };
  return (
    <div className="d-flex gap-3 border mt-2 p-2 rounded">
      <img src="./user.png" className="contact-img my-auto" alt="" />
      <div className="d-flex flex-column gap-0">
        <p className="m-0">{contact.name}</p>
        <p className="m-0 text-small text-secondary">
          {contact.number}
          <br />
          {contact.email}
        </p>
      </div>
      <div className="ms-auto">
        <Button icon={"bi-trash"} textColor={"danger"} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ContactCard;
