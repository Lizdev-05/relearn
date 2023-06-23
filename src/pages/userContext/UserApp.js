import React, { useState } from "react";
import { peopleData } from "../../data/PeopleData";
import UserList from "./UserList";
import UserContext from "../../context/userContext";

const UserApp = () => {
  const [users, setUsers] = useState(peopleData);
  return (
    <UserContext.Provider value={{ users }}>
      <div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default UserApp;
