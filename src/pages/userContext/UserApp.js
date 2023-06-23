import React, { useState } from "react";
import { peopleData } from "../../data/PeopleData";
import UserList from "./UserList";

const UserApp = () => {
  const [users, setUsers] = useState(peopleData);
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default UserApp;
