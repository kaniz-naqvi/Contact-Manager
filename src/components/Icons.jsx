import React from "react";

export const Button = ({ text, icon, color, textColor, onClick }) => {
  return (
    <button
      type="button"
      className={color ? `btn fs-6 btn-${color}` : `btn fs-6 text-${textColor}`}
      onClick={onClick}
    >
      {icon && <i className={`bi ${icon} m-1`}></i>}
      {text && <span>{text}</span>}
    </button>
  );
};
