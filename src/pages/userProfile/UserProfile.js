import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { userData } from "../../data/UserData";

const UserProfile = ({ id, image, name, job }) => {
  const [users, setUsers] = useState(userData);

  const removeUser = () => {};

  return (
    <>
      {users.map((user) => {
        const { id, name, img, job } = user;
        return (
          <div key={id}>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <h1>{name}</h1>
              <p>{job}</p>
            </div>
            <div>
              <button>
                {" "}
                <BiTrash color="red" size={22} onClick={() => removeUser(id)} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserProfile;
