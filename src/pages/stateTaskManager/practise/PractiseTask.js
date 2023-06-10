import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const PractiseTask = ({
  name,
  date,
  id,
  completed,
  edit,
  deleteTask,
  completeTask,
}) => {
  return (
    <div key={id} className={completed ? "task complete" : "task"}>
      <span>
        <p>
          Task: <span>{name}</span>
        </p>
        <p>
          Date: <span>{date}</span>
        </p>
      </span>
      <span>
        <button onClick={() => edit(id)}>
          <FaEdit />
        </button>
        <button>
          <FaTrashAlt onClick={() => deleteTask(id)} />
        </button>
        <button>
          <FaCheckDouble onClick={() => completeTask(id)} />
        </button>
      </span>
    </div>
  );
};

export default PractiseTask;
