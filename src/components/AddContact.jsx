import React, { useState } from "react";
import FeildSets from "./FeildSets";
import { Button } from "./Icons";
import { Link } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  function handelSubmit(e) {
    e.preventDefault();
    if (contactNumber) {
      const newContact = {
        id: Date.now(), // Unique ID based on timestamp
        name: contactName,
        email: contactEmail,
        number: contactNumber,
      };

      addContact(newContact); // Pass contact to App.js
      setIsPopupVisible(true);
      // Reset input fields
      setContactName("");
      setContactEmail("");
      setContactNumber("");
      // Hide the popup after 3 seconds
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 2500);
    } else {
      alert("Number is required!");
    }
  }

  return (
    <>
      <form className="container border rounded p-lg-4 p-sm-1 py-4 w-75 mt-4">
        {isPopupVisible && (
          <div className="d-flex justify-content-center align-items-center">
            <Button
              icon={"bi-check-circle-fill"}
              color={"success"}
              text={`Contact Saved.`}
              link={true}
              linkTo={"/"}
              linkText={" View Here"}
            />
          </div>
        )}
        <h2 className="text-center fs-4">Add Contact</h2>
        <FeildSets
          inputType={"text"}
          value={contactName}
          setValue={setContactName}
          name={"Name"}
          placeholder={"Enter Contact Name"}
        />
        <FeildSets
          inputType={"email"}
          value={contactEmail}
          setValue={setContactEmail}
          name={"Email"}
          placeholder={"Enter Contact Email"}
        />
        <FeildSets
          inputType={"number"}
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
    </>
  );
};

export default AddContact;
