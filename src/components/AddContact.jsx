import React from "react";
import Feildset from "./Feildset";
import { Button } from "./Feildset";

const AddContact = ({
  submitHandler,
  name,
  email,
  number,
  handleFormChange,
  isUpdate,
  updateContact,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <h2 className="text-center">
        {isUpdate ? "Edit Contact" : "Add Contact"}
      </h2>

      {/* Name field */}
      <Feildset
        value={name}
        type="text"
        label="Name"
        placeholder="Enter Contact name"
        setValue={(value) => handleFormChange("name", value)}
      />

      {/* Email field */}
      <Feildset
        value={email}
        type="email"
        label="Email"
        placeholder="Enter Contact email"
        setValue={(value) => handleFormChange("email", value)}
      />

      {/* Number field */}
      <Feildset
        value={number}
        type="number"
        label="Number"
        placeholder="Enter Contact number"
        setValue={(value) => handleFormChange("number", value)}
      />

      {/* Button - Add or Update based on isUpdate */}
      {isUpdate ? (
        <Button
          text="Update"
          color="info"
          icon="bi-arrow-clockwise"
          onClick={(e) => {
            e.preventDefault();
            updateContact();
          }}
        />
      ) : (
        <Button icon="bi-person-plus-fill" text="Add" />
      )}
    </form>
  );
};

export default AddContact;
