import React, { useEffect, useRef, useState } from "react";
import PractiseTask from "./PractiseTask";
import "../TaskManager.css";
import useLocalStorage from "use-local-storage";

const PractiseTaskList = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !date) || !name || !date) {
      return alert("Enter a task and name");
    } else if (name && date && isEditing) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, name, date, completed: false };
          }
          return { ...task };
        })
      );
      setName("");
      setDate("");
    } else {
      const newTask = {
        id: Date.now(),
        name,
        date,
        completed,
      };
      setTasks([...tasks, newTask]);
      setName("");
      setDate("");
    }
  };

  const editFn = (id) => {
    const thisTask = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setTaskId(id);
    setName(thisTask.name);
    setDate(thisTask.date);
  };

  const deleteFn = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  const completeTaskFn = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return { ...task };
      })
    );
  };
  return (
    <div className="--bg-primary">
      <h1>Task Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <form action="" onSubmit={handleSubmit}>
            <div className="--form-control">
              <input
                type="text"
                placeholder="enter task"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
              />
            </div>
            <div className="--form-control">
              <input
                type="date"
                placeholder="enter date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="--btn --btn-success">Save task</button>
          </form>
        </div>
      </div>
      <div className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className="--text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />

          {tasks.map((task) => {
            return (
              <PractiseTask
                {...task}
                edit={editFn}
                deleteTask={deleteFn}
                completeTask={completeTaskFn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PractiseTaskList;
