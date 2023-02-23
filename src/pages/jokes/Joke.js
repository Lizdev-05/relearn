import React, { useEffect, useState } from "react";
import spinner from "../../assets/spinner.jpg";

const Joke = () => {
  const [joke, setJoke] = useState({});

  //   const jokeUrl = "https://api.chucknorris.io/jokes/random";

  //   useEffect(() => {
  //     fetch(jokeUrl)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setJoke(data);
  //       });
  //   }, []);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2 className="">Random Jokes Generator</h2>
        <h4 className="--line"></h4>
        <h4>Joke id: {joke.id}</h4>

        <p>{joke.value}</p>
        <br />
        <button className="--btn --btn-primary">Generate Jokes</button>
      </div>
      ;
    </section>
  );
};

export default Joke;
