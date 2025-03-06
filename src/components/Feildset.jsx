import React from "react";
import { Link } from "react-router-dom";

// Fieldset component for rendering form input fields
const Feildset = ({ label, placeholder, type, value, setValue }) => {
  return (
    <fieldset className="my-3">
      <label className="d-block">{label}</label>
      <input
        className="w-100 bg-transparent p-2 my-2 text-light border rounded-2"
        value={value}
        type={type}
        name={type}
        id={type}
        required={type === "number"} // Required for number type
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </fieldset>
  );
};

// Button component for rendering buttons with optional icons and links
export function Button({ text, icon, color, onClick, link, linkPath }) {
  return (
    <button
      onClick={onClick}
      className={`btn text-light ${color ? `bg-${color}` : "bg-primary"}`}
    >
      {link ? (
        // Render Link if "link" prop is true
        <Link to={linkPath} className="text-light">
          {icon && <i className={`bi ${icon} px-1`}></i>}
          {text}
        </Link>
      ) : (
        <>
          {icon && <i className={`bi ${icon} px-1`}></i>}
          {text}
        </>
      )}
    </button>
  );
}

export default Feildset;
