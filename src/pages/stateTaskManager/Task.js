import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({ id, name, date, completed }) => {
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
        <button>
          <FaEdit color="green" />
        </button>
        <button>
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
