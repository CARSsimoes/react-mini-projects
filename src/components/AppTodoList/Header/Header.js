import React from "react";
import AppButton from "../AppButton/AppButton";
import "./Header.css";

function Header({ showForm, setShowForm }) {
  return (
    <div className="header">
      <p>TodoList</p>
      <AppButton
        text="Add"
        color="green"
        onClick={() => setShowForm(!showForm)}
      />
    </div>
  );
}

export default Header;
