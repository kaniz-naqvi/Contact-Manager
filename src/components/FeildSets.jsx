import React from "react";
import { Link } from "react-router-dom";

// Feildset component for labeled input
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
        required={type == "number" && true}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </fieldset>
  );
};

// Button component with optional link
export function Button({ text, icon, color, onClick, link, linkPath }) {
  return (
    <button
      onClick={onClick && onClick}
      className={
        color ? `btn text-light bg-${color}` : "btn text-light bg-primary"
      }
    >
      {link ? (
        <Link to={linkPath} className="text-light">
          <i className={`bi ${icon} px-1`}></i>
        </Link>
      ) : (
        icon && <i className={`bi ${icon} px-1`}></i>
      )}
      {text && text}
    </button>
  );
}

export default Feildset;
