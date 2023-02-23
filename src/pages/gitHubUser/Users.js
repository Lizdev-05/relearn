import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState({});

  const jokeUrl = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    fetch(jokeUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <section className="--flex-center --bg-primary --p --100vh">
      <div className="container">
        <h2>GitHub Users</h2>
        <div className="--flex-between">
          <img src="" alt="" />
          <div className="profile">
            <h1>name</h1>
            <p>view profile</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
