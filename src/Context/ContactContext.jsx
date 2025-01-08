import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const DataContext = createContext();

const ContactContext = ({ children }) => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState(() => {
    try {
      const localValue = localStorage.getItem("contact");
      return localValue ? JSON.parse(localValue) : [];
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return [];
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isSearch, setIsSearch] = useState(false); // Flag for search
  const [isUpdate, setIsUpdate] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Update localStorage only if contacts are added or deleted, not when searched
  useEffect(() => {
    if (!isSearch && contacts.length > 0) {
      localStorage.setItem("contact", JSON.stringify(contacts));
    }
  }, [contacts, isSearch]);

  const addContact = () => {
    const newContact = {
      id: Date.now(),
      name,
      email,
      number,
    };
    setContacts([...contacts, newContact]);
    setEmail("");
    setName("");
    setNumber("");
    navigate("/");
  };

  const deleteContact = (id) => {
    if (
      window.confirm("You will not be able to restore it, want to proceed?")
    ) {
      const filteredContact = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContact);
    }
  };
  function editContact(id) {
    setIsUpdate(true);
    const editableContact = contacts.find((c) => c.id === id);
    setEditingId(id);
    setEmail(editableContact.email);
    setName(editableContact.name);
    setNumber(editableContact.number);
    navigate("/add-contacts");
  }

  function updateContact() {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editingId // Compare the ID of the contact being edited
        ? { ...contact, name, email, number } // Update the contact
        : contact
    );
    setContacts(updatedContacts); // Update the state with the new contacts array
    setIsUpdate(false);
    setEmail("");
    setName("");
    setNumber("");
    navigate("/"); // Navigate back to the home screen or contacts list
  }
  function searchHandel(e, inputVal) {
    e.preventDefault();
    if (inputVal === "") {
      const storedContacts = JSON.parse(localStorage.getItem("contact"));
      setContacts(storedContacts);
      setIsSearch(false); // Reset search flag
    } else {
      const searchFilter = contacts.filter((c) =>
        c.name.toLowerCase().includes(inputVal.toLowerCase())
      );
      setContacts(searchFilter);
      setIsSearch(true); // Set search flag true
    }
  }

  return (
    <DataContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        addContact,
        contacts,
        deleteContact,
        searchHandel,
        editContact,
        updateContact,
        isUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContactContext;
