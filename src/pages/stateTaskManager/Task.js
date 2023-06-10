import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({ id, name, date, completed, editTask, deleteTask }) => {
  return (
    <div key={id} className={completed ? "task complete" : "task"}>
      <span>
        <p>
          <b>Task:</b> {name}
        </p>
        <p>
          <b>Date:</b> {date}
        </p>
      </span>

      <span>
        <button onClick={() => editTask(id)}>
          <FaEdit color="green" />
        </button>
        <button onClick={() => deleteTask(id)}>
          {" "}
          <FaTrashAlt color="red" />
        </button>
        <button>
          {" "}
          <FaCheckDouble color="purple" />
        </button>
      </span>
    </div>
  );
};

export default Task;
