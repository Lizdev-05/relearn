import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { userData } from "../../data/UserData";

const UserProfile = () => {
  const [users, setUsers] = useState(userData);

  const removeUser = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };
  return (
    <div>
      {users.map((user) => {
        const { id, name, img, job } = user;
        return (
          <div key={id}>
            <div>
              <img src={img} alt="{name}" />
            </div>

            <div>
              <h1>{name}</h1>
              <p>{job}</p>
            </div>

            <div>
              <button className="btn btn-danger">
                <BiTrash onClick={() => removeUser(id)} />
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={() => setUsers([])}>Remove All</button>
    </div>
  );
};

export default UserProfile;
