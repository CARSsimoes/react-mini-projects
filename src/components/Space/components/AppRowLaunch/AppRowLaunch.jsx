import React from "react";
import "./AppRowLaunch.css";

function AppRowLaunch({
  missionName,
  rocketName,
  launchDate,
  details,
  missionPatch,
}) {
  return (
    <div className="app-row-launch__container">
      <p className="column">{missionName}</p>
      <p className="column">{rocketName}</p>
      <p className="column">{launchDate}</p>
      <p className="double-column">{details ?? "NO DESCRIPTION"}</p>
      <div className="image-container">
        <img src={missionPatch} />
      </div>
    </div>
  );
}

export default AppRowLaunch;
