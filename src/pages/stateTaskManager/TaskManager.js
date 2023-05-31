import React from "react";

const TaskManager = () => {
  return (
    <div className="--bg-primary">
      <h1>Task Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <form action="" className="form --form-control">
            <div>
              <label htmlFor="name">Task:</label>
              <input type="text" placeholder="Task name" />
            </div>
            <div>
              <label htmlFor="name">Date:</label>
              <input type="date" placeholder="Task date" />
            </div>
            <button className="--btn --btn-success --btn-block">
              Save Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
