import React, { useContext } from "react";
import User from "./User";
import UserContext from "../../context/userContext";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-light" key={user.id}>
            <User {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
