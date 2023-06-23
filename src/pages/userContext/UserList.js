import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-primary">
            <User {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
