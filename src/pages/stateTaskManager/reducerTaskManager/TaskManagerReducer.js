import React, { useEffect, useReducer, useRef, useState } from "react";
import "../TaskManager.css";
import Task from "../Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "use-local-storage";
import Alert from "./alert/Alert";
import Confirm from "./confirm/Confirm";

const taskReducer = (state, action) => {
  if (action.type === "EMPTY_FIELDS") {
    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Kindly enter a name and a date",
      alertClass: "danger",
    };
  }

  if (action.type === "CLOSE_ALERT") {
    return { ...state, isAlertOpen: false };
  }

  if (action.type === "ADD_TASK") {
    const allTasks = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: allTasks,
      isAlertOpen: true,
      alertContent: "Task added successfully",
      alertClass: "success",
    };
  }
  return state;
};

const TaskManagerReducer = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [tasks, setTasks] = useLocalStorage("tasks", []);
  // const storedTasks = useLocalStorage("tasks", []);

  const initialState = {
    // tasks: storedTasks || [],
    tasks: tasks,
    taskId: null,
    isEditing: false,
    isAlertOpen: false,
    alertContent: "This is an alert",
    alertClass: "success",
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const nameInputRef = useRef(null);
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      dispatch({
        type: "EMPTY_FIELDS",
      });
    }

    if (name && date) {
      const newTask = {
        id: Date.now(),
        name,
        date,
        completed: false,
      };
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
      setName("");
      setDate("");
      setTasks([...tasks, newTask]);
    }
  };

  const handleOnCloseAlert = () => {
    dispatch({
      type: "CLOSE_ALERT",
    });
  };

  const editTaskFn = (id) => {};

  const deleteTaskFn = (id) => {};

  const completeTaskFn = (id) => {};
  return (
    <div className="--bg-primary">
      {state.isAlertOpen && (
        <Alert
          alertContent={state.alertContent}
          alertClass={state.alertClass}
          onCloseAlert={handleOnCloseAlert}
        />
      )}

      {/* <Confirm /> */}
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
              {state.isEditing ? "Edit Task" : "Save Task"}
            </button>
          </form>
        </div>
      </div>

      <div className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className="--text-light">Task List</h2>
          <hr style={{ background: "#fff" }} />
          {state.tasks.length === 0 ? (
            <p className="--text-light">No availabe task </p>
          ) : (
            <div>
              {state.tasks.map((task) => {
                return (
                  <Task
                    {...task}
                    editTask={editTaskFn}
                    deleteTask={deleteTaskFn}
                    completeTask={completeTaskFn}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManagerReducer;
