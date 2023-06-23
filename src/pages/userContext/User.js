import React from "react";

const User = ({ id, name }) => {
  return (
    <div className="--flex-between">
      <h2>{name}</h2>
      <button className="--btn --btn-danger">Delete</button>
    </div>
  );
};

export default User;
