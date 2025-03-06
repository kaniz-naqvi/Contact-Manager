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

  const [form, setForm] = useState({ name: "", email: "", number: "" });
  const { name, email, number } = form;

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const [isSearch, setIsSearch] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!isSearch && contacts.length > 0) {
      try {
        localStorage.setItem("contact", JSON.stringify(contacts));
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    }
  }, [contacts, isSearch]);

  const addContact = () => {
    const newContact = { id: Date.now(), name, email, number };
    setContacts([...contacts, newContact]);
    setForm({ name: "", email: "", number: "" });
    navigate("/");
  };

  const deleteContact = (id) => {
    if (
      window.confirm("You will not be able to restore it, want to proceed?")
    ) {
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
    }
  };

  const editContact = (id) => {
    setIsUpdate(true);
    const editableContact = contacts.find((c) => c.id === id);
    setEditingId(id);
    setForm({
      name: editableContact.name,
      email: editableContact.email,
      number: editableContact.number,
    });
    navigate("/add-contacts");
  };

  const updateContact = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editingId ? { ...contact, name, email, number } : contact
    );
    setContacts(updatedContacts);
    setIsUpdate(false);
    setForm({ name: "", email: "", number: "" });
    navigate("/");
  };

  const searchHandel = (e, inputVal) => {
    e.preventDefault(); // Ensure no page reload
    if (inputVal === "") {
      try {
        const storedContacts = JSON.parse(localStorage.getItem("contact"));
        if (Array.isArray(storedContacts)) {
          setContacts(storedContacts);
          setIsSearch(false);
        } else {
          console.warn("No valid contacts found in localStorage");
          setContacts([]);
        }
      } catch (error) {
        console.error("Error reading from localStorage", error);
        setContacts([]);
      }
    } else {
      const searchFilter = contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(inputVal.toLowerCase()) ||
          c.number.includes(inputVal)
      );
      setContacts(searchFilter);
      setIsSearch(true);
    }
  };
  return (
    <DataContext.Provider
      value={{
        name,
        email,
        number,
        handleFormChange,
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
