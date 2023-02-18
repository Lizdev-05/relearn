import React from "react";
import { userData } from "../../data/UserData";
import UserProfile from "./UserProfile";

const UserProfileList = () => {
  return (
    <div>
      {userData.map((data) => {
        return (
          <UserProfile
            key={data.id}
            name={data.name}
            job={data.job}
            image={data.img}
          />
        );
      })}
    </div>
  );
};

export default UserProfileList;
