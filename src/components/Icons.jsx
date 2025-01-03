import React from "react";

export const Button = ({ text, icon, color, textColor, onClick }) => {
  return (
    <button
      type="button"
      className={
        color ? `btn m-3 btn-${color}` : `btn m-1 fs-2 text-${textColor}`
      }
      onClick={onClick}
    >
      {icon && <i className={`bi ${icon} m-1`}></i>}
      {text && <span>{text}</span>}
    </button>
  );
};
