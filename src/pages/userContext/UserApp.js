import React, { useState } from "react";
import { peopleData } from "../../data/PeopleData";
import UserList from "./UserList";
import UserContext from "../../context/userContext";

const UserApp = () => {
  const [users, setUsers] = useState(peopleData);

  const deleteUser = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };
  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default UserApp;
