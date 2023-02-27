import React, { useRef } from "react";

const UnControlledForm = () => {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = nameInputRef.current.value;
    const jobInput = jobInputRef.current.value;
    console.log(nameInput, jobInput);
  };
  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--flex-center"> Controlled Form</h1>
      <div className=" --flex-center">
        <div className="--card --width-500px --bg-light --flex-center">
          <form action="" onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name" name="name">
                Name :
              </label>
              <input type="text" ref={nameInputRef} />
            </div>
            <div>
              <label htmlFor="job" name="job">
                Job :
              </label>
              <input type="text" ref={jobInputRef} />
            </div>

            <button className="--btn --btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnControlledForm;
