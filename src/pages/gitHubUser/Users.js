import React, { useEffect, useState } from "react";
import profile1 from "../../assets/profile1.png";

const Users = () => {
  const [user, setUser] = useState([]);

  const userUrl = "https://api.github.com/users";

  const getUser = async () => {
    const response = await fetch(userUrl);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    // fetch(userUrl)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //   });

    getUser();
  }, []);

  return (
    <section className="--bg-primary --py-2">
      <div className="container">
        <h2 className="--text-center --text-light">GitHub Users</h2>
        <div className="--line"></div>
        <div className="--grid-25 --py">
          {user.map((u) => {
            const { avatar_url, login } = u;
            return (
              <div className="--card --bg-light --p --flex-start">
                <img src={avatar_url} alt="" className="--profile-img --mx" />
                <span>
                  <h2>{login} </h2>
                  <p>view profile</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Users;
