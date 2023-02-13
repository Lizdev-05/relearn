import React, { useState } from "react";
import { peopleData } from "../../data/PeopleData";
import { BiTrash } from "react-icons/bi";

const UseState = () => {
  const [people, setPeople] = useState(peopleData);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container">
        <h1 className="--color-white">UseState in Array</h1>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div
              key={id}
              className="--flex-between --bg-light --my --card --px"
            >
              <h2>{name}</h2>
              <button>
                {" "}
                <BiTrash
                  color="red"
                  size={22}
                  onClick={() => removePerson(id)}
                />
              </button>
            </div>
          );
        })}
        <button className="--btn --btn-danger" onClick={() => setPeople([])}>
          Delete All
        </button>
      </div>
    </section>
  );
};

export default UseState;
