import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, job);
    setName("");
    setJob("");
  };
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--flex-center"> Controlled Form</h1>
      <div className="--card --width-500px --bg-light --flex-center --center-all">
        <div className=" --flex-center">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" name="name">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Job
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => {
                  setJob(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlledForm;
