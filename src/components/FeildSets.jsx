import React from "react";

const FeildSets = ({ name, placeholder, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <fieldset>
      <label htmlFor="" className="d-block py-2">
        <span className="fw-semibold">{name}</span>
      </label>
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        className="w-100 px-2 text-light"
        placeholder={placeholder}
      />
    </fieldset>
  );
};

export default FeildSets;
