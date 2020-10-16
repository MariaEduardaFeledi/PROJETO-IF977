import React from "react";
import "./Button.css";

const SIZES = [
  "btn--medium",
  "btn--large",
  "btn--mobile",
  "btn--wide",
  "btn--form",
];

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  Color,
  Font,
}) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      style={{ background: Color, color: Font }}
    >
      {children}
    </button>
  );
};
