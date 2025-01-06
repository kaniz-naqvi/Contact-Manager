import React, { useState } from "react";
const SearchBar = ({ searchHandel }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <form
      onSubmit={(e) => searchHandel(e, inputVal)}
      className="d-flex justify-content-center align-items-center"
    >
      <input
        value={inputVal}
        type="text"
        className="w-100 bg-transparent search-input px-3 p-2 my-1 text-light border rounded-pill"
        placeholder="Search Contacts"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="btn btn-light search-btn rounded-pill px-3 p-2">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
