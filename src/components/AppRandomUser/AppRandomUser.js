import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchNewUser from "../../services/users/users";
import { Link } from "react-router-dom";

// Created a component to render the random user
// create a new folder services responsible for store all services of app
// create a new service file to get a User

function AppAvatar({ firstName, lastName, avatar }) {
  const getFullName = () => `${firstName} ${lastName}`;

  return (
    <>
      <p>{getFullName()}</p>
      <img src={avatar} />
    </>
  );
}

function AppRandomUser() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  async function fetchRandomUser() {
    try {
      const data = await fetchNewUser();
      setListOfUsers([...listOfUsers, ...data.results]);
    } catch (error) {
      console.error("Error fetching the new user:", error);
      throw error;
    }
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
        {!listOfUsers.length > 0 ? (
          <h1>No Users</h1>
        ) : (
          listOfUsers.map((u) => (
            <Link to={`/randomUser/${u.name.first}`}>
              <AppAvatar
                key={uuidv4()}
                firstName={u.name.first}
                lastName={u.name.last}
                avatar={u.picture.medium}
              />
            </Link>
          ))
        )}
        <button onClick={fetchRandomUser}>Load more</button>
      </div>
    </>
  );
}

export default AppRandomUser;
