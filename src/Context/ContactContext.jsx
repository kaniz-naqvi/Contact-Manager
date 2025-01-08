import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// Create a context to provide data across the app
export const DataContext = createContext();

const ContactContext = ({ children }) => {
  const navigate = useNavigate();

  // State for storing contacts with localStorage fallback
  const [contacts, setContacts] = useState(() => {
    try {
      // Try to retrieve contacts from localStorage
      const localValue = localStorage.getItem("contact");
      return localValue ? JSON.parse(localValue) : []; // Parse or return empty array if no contacts exist
    } catch (error) {
      console.error("Error reading from localStorage", error); // Handle any errors
      return [];
    }
  });

  // States for contact details input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // Flag to handle search operation
  const [isSearch, setIsSearch] = useState(false);

  // States for handling update and edit operations
  const [isUpdate, setIsUpdate] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Update localStorage only when contacts array is modified (added or deleted)
  useEffect(() => {
    if (!isSearch && contacts.length > 0) {
      localStorage.setItem("contact", JSON.stringify(contacts)); // Store contacts in localStorage
    }
  }, [contacts, isSearch]); // Trigger effect on contacts or isSearch change

  // Function to add a new contact
  const addContact = () => {
    const newContact = {
      id: Date.now(), // Unique ID using timestamp
      name,
      email,
      number,
    };
    setContacts([...contacts, newContact]); // Add new contact to state
    setEmail(""); // Clear email input
    setName(""); // Clear name input
    setNumber(""); // Clear number input
    navigate("/"); // Navigate back to home or contact list
    setShowSnackbar(true); // Show snackbar notification (assumed to be handled elsewhere)
  };

  // Function to delete a contact by ID
  const deleteContact = (id) => {
    if (
      window.confirm("You will not be able to restore it, want to proceed?")
    ) {
      // Confirm with the user before deleting
      const filteredContact = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContact); // Remove the contact from state
    }
  };

  // Function to start editing a contact
  function editContact(id) {
    setIsUpdate(true); // Set flag to indicate we're in update mode
    const editableContact = contacts.find((c) => c.id === id); // Find contact by ID
    setEditingId(id); // Set the ID of the contact being edited
    setEmail(editableContact.email); // Set form inputs with existing contact data
    setName(editableContact.name);
    setNumber(editableContact.number);
    navigate("/add-contacts"); // Navigate to the add contact page for editing
  }

  // Function to update an existing contact
  function updateContact() {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editingId // Find the contact being edited by its ID
        ? { ...contact, name, email, number } // Update the contact details
        : contact
    );
    setContacts(updatedContacts); // Set updated contacts list
    setIsUpdate(false); // Reset update flag
    setEmail(""); // Clear form inputs
    setName("");
    setNumber("");
    navigate("/"); // Navigate back to home screen or contacts list
  }

  // Function to handle search based on input value
  function searchHandel(e, inputVal) {
    e.preventDefault();
    if (inputVal === "") {
      // If search input is empty, reset contacts from localStorage
      const storedContacts = JSON.parse(localStorage.getItem("contact"));
      setContacts(storedContacts);
      setIsSearch(false); // Reset search flag
    } else {
      // Filter contacts based on name or number matching search input
      const searchFilter = contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(inputVal.toLowerCase()) ||
          c.number.includes(inputVal)
      );
      setContacts(searchFilter); // Set filtered contacts
      setIsSearch(true); // Set search flag to true
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
