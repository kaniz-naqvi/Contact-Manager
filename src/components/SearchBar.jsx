import React, { useState } from "react";

// SearchBar component for input and search button
const SearchBar = ({ searchHandel }) => {
  const [inputVal, setInputVal] = useState(""); // State to store input value

  return (
    <form
      onSubmit={(e) => searchHandel(e, inputVal)} // Handle form submission
      className="d-flex justify-content-center align-items-center"
    >
      {/* Input field for search */}
      <input
        value={inputVal} // Bind input value to state
        type="text"
        className="w-100 bg-transparent search-input px-3 p-2 my-1 text-light border rounded-pill"
        placeholder="Search Contacts"
        onChange={(e) => setInputVal(e.target.value)} // Update state on input change
      />

      {/* Button to trigger search */}
      <button className="btn btn-light search-btn rounded-pill px-3 p-2">
        <i className="bi bi-search"></i> {/* Search icon */}
      </button>
    </form>
  );
};

export default SearchBar;
