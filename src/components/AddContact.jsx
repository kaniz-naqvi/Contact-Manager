import React, { useState } from "react";
import FeildSets from "./FeildSets";
import { Button } from "./Icons";

const AddContact = ({ addContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (contactName && contactEmail && contactNumber) {
      const newContact = {
        id: Date.now(), // Unique ID based on timestamp
        name: contactName,
        email: contactEmail,
        number: contactNumber,
      };

      addContact(newContact); // Pass contact to App.js

      // Reset input fields
      setContactName("");
      setContactEmail("");
      setContactNumber("");
    } else {
      alert("Each Feild is required!");
    }
  }

  return (
    <form className="container border rounded p-lg-4 p-sm-1 py-4 w-75 mt-4">
      <h2 className="text-center fs-4">Add Contact</h2>
      <FeildSets
        value={contactName}
        setValue={setContactName}
        name={"Name"}
        placeholder={"Enter Contact Name"}
      />
      <FeildSets
        value={contactEmail}
        setValue={setContactEmail}
        name={"Email"}
        placeholder={"Enter Contact Email"}
      />
      <FeildSets
        value={contactNumber}
        setValue={setContactNumber}
        name={"Number"}
        placeholder={"Enter Contact's phone Number"}
      />
      <Button
        text="Add"
        icon="bi-plus-lg"
        color={"primary mt-2"}
        onClick={handelSubmit}
      />
    </form>
  );
};

export default AddContact;
