import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  text,
  icon,
  color,
  textColor,
  onClick,
  link,
  linkText,
  linkTo,
}) => {
  return (
    <button
      type="button"
      className={color ? `btn fs-6 btn-${color}` : `btn fs-6 text-${textColor}`}
      onClick={onClick}
    >
      {icon && <i className={`bi ${icon} m-1`}></i>}
      {text && <span>{text}</span>}
      {link && (
        <Link className="text-light" to={linkTo}>
          {linkText}
        </Link>
      )}
    </button>
  );
};
