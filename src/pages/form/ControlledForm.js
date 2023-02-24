import React from "react";

const ControlledForm = () => {
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--flex-center"> Controlled Form</h1>
      <div className="--card --width-500px --bg-light --flex-center --center-all">
        <div className=" --flex-center">
          <form action="">
            <div>
              <label htmlFor="name" name="name">
                Name
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Job
              </label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlledForm;
