import React from "react";
import { v4 as uuidv4 } from "uuid";

function AppDropdown({ option, handleChange, rockets }) {
  return (
    <div className="app-dropdown__container">
      <label htmlFor="rocket-select">Choose a Rocket:</label>
      <select
        id="rocket-select"
        value={option}
        onChange={handleChange}
        className="app-dropdown__select"
      >
        <option value="">All Rockets</option>
        {rockets.map((rocket) => (
          <option key={uuidv4()} value={rocket.rocket_name}>
            {rocket.rocket_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AppDropdown;
