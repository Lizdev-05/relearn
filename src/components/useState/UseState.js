import React, { useState } from "react";
import { peopleData } from "../../data/PeopleData";

const UseState = () => {
  const [people, setPeople] = useState("");

  return (
    <div>
      <h1>People Data</h1>
    </div>
  );
};

export default UseState;
