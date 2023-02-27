import React, { useState } from "react";

const MultipleControlledForm = () => {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    // age: "",
    // company: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = person;
    console.log(newPerson);
  };

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--flex-center"> Multiple Controlled Form</h1>
      <div className=" --flex-center">
        <div className="--card --width-500px --bg-light --flex-center">
          <form action="" onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name :</label>
              <input
                name="name"
                type="text"
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job">Job :</label>
              <input
                type="text"
                name="job"
                value={person.job}
                onChange={handleChange}
              />
            </div>

            <button className="--btn --btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultipleControlledForm;
