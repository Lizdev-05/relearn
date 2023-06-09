import React, { useEffect, useRef, useState } from "react";
import "./TaskManager.css";
import Task from "./Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const [taskId, setaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !date) || !name || !date) {
      toast.error("Kindly enter task name and date");
    } else {
      const newTask = {
        id: Date.now(),
        name,
        date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setName(" ");
      setDate(" ");
    }
  };

  const editTaskFn = (id) => {
    const thisTask = tasks.find((task) => task.id === id);
    setaskId(id);
    setIsEditing(true);
    setName(thisTask.name);
    setDate(thisTask.date);
  };

  return (
    <div className="--bg-primary">
      <h1>Task Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <ToastContainer />
          <form
            action=""
            className="form --form-control"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name">Task:</label>
              <input
                type="text"
                placeholder="Task name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
              />
            </div>
            <div>
              <label htmlFor="name">Date:</label>
              <input
                type="date"
                placeholder="Task date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="--btn --btn-success --btn-block">
              Save Task
            </button>
          </form>
        </div>
      </div>

      <div className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className="--text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />
          {tasks.length === 0 ? (
            <p className="--text-light">No availabe task </p>
          ) : (
            <div>
              {tasks.map((task) => {
                return <Task {...task} editTask={editTaskFn} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
