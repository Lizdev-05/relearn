import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { userData } from "../../data/UserData";
import "./UserProfile.scss";

const UserProfile = () => {
  const [users, setUsers] = useState(userData);

  const removeUser = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };
  return (
    <section className="profile-sec --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className="--text-light">User Profile App</h2>
        {users.map((user) => {
          const { id, name, img, job } = user;
          return (
            <div className="profile --card --flex-between --p" key={id}>
              <img src={img} alt="{name}" />

              <div className="desc">
                <h1 className="--text-light">Name: {name}</h1>
                <p className="--text-light"> Job: {job}</p>
              </div>

              <BiTrash
                size={18}
                className="icon"
                onClick={() => removeUser(id)}
              />
            </div>
          );
        })}
        <button className="--btn --btn-danger" onClick={() => setUsers([])}>
          Remove All
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
