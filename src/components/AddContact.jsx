import React from "react";
import Feildset from "./Feildset";
import { Button } from "./Feildset";

const AddContact = ({
  submitHandler, // Handles form submission (add or update)
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  isUpdate, // Indicates whether it's an update or add
  updateContact, // Updates the contact
}) => {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <h2 className="text-center">Add Contact</h2>

      {/* Name field */}
      <Feildset
        value={name}
        type={"text"}
        label={"Name"}
        placeholder={"Enter Contact name"}
        setValue={(e) => setName(e)}
      />

      {/* Email field */}
      <Feildset
        value={email}
        setValue={(e) => setEmail(e)}
        type={"email"}
        label={"Email"}
        placeholder={"Enter Contact email"}
      />

      {/* Number field */}
      <Feildset
        value={number}
        setValue={(e) => setNumber(e)}
        type={"number"}
        label={"Number"}
        placeholder={"Enter Contact number"}
      />

      {/* Button - Add or Update based on isUpdate */}
      {isUpdate ? (
        <Button
          text={"Update"}
          color={"info"}
          icon={"bi-arrow-clockwise"}
          onClick={(e) => {
            e.preventDefault();
            updateContact(); // Update contact
          }}
        />
      ) : (
        <Button icon={"bi-person-plus-fill"} text={"Add"} />
      )}
    </form>
  );
};

export default AddContact;
