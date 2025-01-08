import React from "react";
import Feildset from "./Feildset";
import { Button } from "./Feildset";

const AddContact = ({
  submitHandler,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  isUpdate,
  updateContact,
}) => {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <h2 className="text-center">Add Contact</h2>
      <Feildset
        value={name}
        type={"text"}
        label={"Name"}
        placeholder={"Enter Contact name"}
        setValue={(e) => setName(e)}
      />
      <Feildset
        value={email}
        setValue={(e) => setEmail(e)}
        type={"email"}
        label={"Email"}
        placeholder={"Enter Contact email"}
      />
      <Feildset
        value={number}
        setValue={(e) => setNumber(e)}
        type={"number"}
        label={"Number"}
        placeholder={"Enter Contact number"}
      />
      {isUpdate ? (
        <Button
          text={"Update"}
          color={"info"}
          icon={"bi-arrow-clockwise"}
          onClick={(e) => {
            e.preventDefault();
            updateContact();
          }}
        />
      ) : (
        <Button icon={"bi-person-plus-fill"} text={"Add"} />
      )}
    </form>
  );
};

export default AddContact;
