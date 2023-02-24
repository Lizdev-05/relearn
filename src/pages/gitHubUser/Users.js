import React, { useEffect, useState } from "react";
import spinner from "../../assets/spinner.jpg";

const Users = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const userUrl = "httpsd://api.github.com/users";

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(userUrl);
      if (!response.ok) {
        throw new Error("Seems like something is not right!");
      }
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setIsLoading(false);
    }
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
        {isLoading ? (
          <h2 className="--text-light --center-all">Loading...</h2>
        ) : (
          <div className="--grid-25 --py">
            {error ? (
              <h2 className="--text-light --center-all">
                Something went wrong!
              </h2>
            ) : (
              user.map((u) => {
                const { avatar_url, login, id, html_url } = u;
                return (
                  <div className="--card --bg-light --p --flex-start" key={id}>
                    <img
                      src={avatar_url}
                      alt=""
                      className="--profile-img --mx"
                    />
                    <span>
                      <h2>{login} </h2>
                      <a href={html_url}>view profile</a>
                    </span>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Users;
