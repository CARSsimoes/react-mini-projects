import React from "react";
import "./AppButton.css";

function AppButton({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="app-button"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default AppButton;
