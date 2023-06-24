import React, { useContext } from "react";
import UserContext from "../../context/userContext";

const User = ({ id, name }) => {
  const { deleteUser } = useContext(UserContext);
  return (
    <div className="--flex-between">
      <h2>{name}</h2>
      <button className="--btn --btn-danger" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
