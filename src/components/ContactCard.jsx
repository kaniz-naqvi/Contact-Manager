import React from "react";
import { Button } from "./Feildset"; // Importing Button component

const ContactCard = ({
  name, // Contact's name
  number, // Contact's phone number
  email, // Contact's email
  id, // Contact's unique ID
  deleteContact, // Function to delete the contact
  editContact, // Function to edit the contact
}) => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center border p-1  rounded-4 my-2">
        {/* Display first letter of name or number as circle */}
        <div className={`rounded-circle px-3 py-2 bg-warning fs-3`}>
          {name ? name[0].toUpperCase() : number[0]}
        </div>

        <div className=" m-0">
          {/* Display name or number if name is not provided */}
          {name ? name : number}
          <br />
          <p className="text-small">
            {/* Display number and email if available */}
            {name && number} <br /> {email && email}
          </p>
        </div>

        <div className="d-flex m-1   ms-auto flex-column">
          {/* Edit Button */}
          <Button
            onClick={() => editContact(id)} // Trigger edit function on click
            color={"info mb-1 p-0"}
            icon="bi-pencil-square"
          />
          {/* Delete Button */}
          <Button
            onClick={() => {
              deleteContact(id); // Trigger delete function on click
            }}
            color={"danger p-0 fs-5"}
            icon="bi-trash3"
          />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
