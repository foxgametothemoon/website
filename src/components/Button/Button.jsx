import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children,
  to,
  primary,
  size,
  onClick,
  type = "button", // default type is button
  disabled = false,
  ...props
}) => {
  const buttonClass = primary ? styles.primaryButton : styles.button;
  const sizeClass = size === "large" ? styles.large : "";

  if (to) {
    return (
      <Link
        to={to}
        className={`${buttonClass} ${sizeClass} ${styles.linkButton}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${buttonClass} ${sizeClass}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
