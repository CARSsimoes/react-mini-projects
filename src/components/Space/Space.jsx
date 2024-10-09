import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppNoData from "./components/AppNoData/AppNoData";
import AppRowLaunch from "./components/AppRowLaunch/AppRowLaunch";
import AppDropdown from "./components/AppDropdown/AppDropdown";
import useLaunches from "./hooks/useLaunches/useLaunches";
import { v4 as uuidv4 } from "uuid";
import "./Space.css";

function Space() {
  const { launches, rockets, option, handleChange } = useLaunches();

  return (
    <div className="space__container">
      <AppDropdown
        option={option}
        handleChange={handleChange}
        rockets={rockets}
      />
      <hr style={{ borderWidth: "5px" }} />
      <AppHeader />
      <hr style={{ borderWidth: "5px" }} />
      {launches.length > 0 ? (
        launches.map((launch) => (
          <div key={uuidv4()}>
            <AppRowLaunch
              missionName={launch.mission_name}
              rocketName={launch.rocket.rocket_name}
              launchDate={launch.launch_date_unix}
              details={launch.details}
              missionPatch={launch.links.mission_patch_small}
            />
            <hr style={{ borderWidth: "5px" }} />
          </div>
        ))
      ) : (
        <AppNoData />
      )}
    </div>
  );
}

export default Space;
