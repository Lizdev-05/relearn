import React, { useEffect, useState } from "react";
import spinner from "../../assets/spinner.jpg";

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const jokeUrl = "https://api.chucknorris.io/jokes/random";

  const getJoke = () => {
    fetch(jokeUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJoke(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2 className="">Random Jokes Generator</h2>
        <h4 className="--line"></h4>
        {isLoading ? (
          <div className="--center-all">
            <img src={spinner} alt="loading" width={100} />
          </div>
        ) : (
          <>
            <h4>Joke id: {joke.id}</h4>
            <p>{joke.value}</p>
          </>
        )}

        <br />
        <button className="--btn --btn-primary" onClick={getJoke}>
          Generate Jokes
        </button>
      </div>
      ;
    </section>
  );
};

export default Joke;
