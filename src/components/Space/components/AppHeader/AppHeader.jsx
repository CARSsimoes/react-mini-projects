import React from "react";
import "./AppHeader.css";

function AppHeader() {
  return (
    <div className="app-header__container">
      <p className="column">Mission Name</p>
      <p className="column">Rocket Name</p>
      <p className="column">Launch Date</p>
      <p className="double-column">Details</p>
      <p className="double-column">Patch</p>
    </div>
  );
}

export default AppHeader;
