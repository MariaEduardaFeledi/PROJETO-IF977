import React from "react";
import "./Button.css";

const SIZES = [
  "btn--medium",
  "btn--large",
  "btn--mobile",
  "btn--wide",
  "btn--form",
  "btn--glow",
];

const GLOWS = ["", "orange"];

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  Color,
  Font,
  Glow,
}) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkGlow = GLOWS.includes(Glow) ? Glow : GLOWS[0];
  return (
    <button
      className={`btn ${checkButtonSize} ${checkGlow}`}
      onClick={onClick}
      type={type}
      style={{ background: Color, color: Font }}
    >
      {children}
    </button>
  );
};
