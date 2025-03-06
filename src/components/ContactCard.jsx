import React from "react";
import { Button } from "./Feildset";

const ContactCard = ({
  name,
  number,
  email,
  id,
  deleteContact,
  editContact,
}) => {
  return (
    <div className="d-flex gap-2 align-items-center border p-1 rounded-4 my-2">
      {/* Display first letter of name or number as a circle */}
      <div className="rounded-circle px-3 py-2 bg-warning fs-3">
        {name ? name[0].toUpperCase() : number[0]}
      </div>

      <div className="m-0">
        {/* Display name or number if name is not provided */}
        {name || number}
        <br />
        <p className="text-small">
          {/* Display number and email if available */}
          {name && number && (
            <span>
              {number}
              <br />
            </span>
          )}
          {email && <span>{email}</span>}
        </p>
      </div>

      <div className="d-flex m-1 ms-auto flex-column">
        {/* Edit Button */}
        <Button
          onClick={() => editContact(id)}
          color="info mb-1 p-0"
          icon="bi-pencil-square"
        />

        {/* Delete Button */}
        <Button
          onClick={() => deleteContact(id)}
          color="danger p-0 fs-5"
          icon="bi-trash3"
        />
      </div>
    </div>
  );
};

export default ContactCard;
