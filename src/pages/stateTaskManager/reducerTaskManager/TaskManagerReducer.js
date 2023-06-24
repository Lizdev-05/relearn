import React, { useEffect, useReducer, useRef, useState } from "react";
import "../TaskManager.css";
import Task from "../Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "use-local-storage";
import Alert from "./alert/Alert";
import Confirm from "./confirm/Confirm";
import { taskReducer } from "./reducerTask";

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
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    modalTitle: "Delete Task",
    modalMsg: "You are about to delete this taks",
    modalActionText: "OK",
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

    if (name && date && state.isEditing) {
      const updatedTask = {
        id: state.taskId,
        name,
        date,
        completed: false,
      };
      dispatch({
        type: "UPDATE_TASK",
        payload: updatedTask,
      });

      setName("");
      setDate("");
      setTasks(
        tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return {
              ...task,
              name,
              date,
              completed: false,
            };
          }
          return task;
        })
      );

      return;
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
  const editTaskModalFn = (id) => {
    dispatch({
      type: "EDIT_TASK_MODAL",
      payload: id,
    });
  };

  const editTaskFn = () => {
    const id = state.taskId;
    dispatch({
      type: "EDIT_TASK",
      payload: id,
    });

    const thisTask = state.tasks.find((task) => task.id === id);
    setName(thisTask.name);
    setDate(thisTask.date);
    closeModalfn();
  };

  const openDeleteModal = (id) => {
    dispatch({
      type: "OPEN_DELETE_MODAL",
      payload: id,
    });
  };
  const deleteTaskFn = () => {
    const id = state.taskId;
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });

    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const completeTaskFn = (id) => {
    dispatch({
      type: "COMPLETE_TASK",
      payload: id,
    });

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      })
    );
  };
  const closeModalfn = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };
  return (
    <div className="--bg-primary">
      {state.isAlertOpen && (
        <Alert
          alertContent={state.alertContent}
          alertClass={state.alertClass}
          onCloseAlert={handleOnCloseAlert}
        />
      )}
      {state.isEditModalOpen && (
        <Confirm
          modalTitle={state.modalTitle}
          modalMsg={state.modalMsg}
          modalActionText={state.modalActionText}
          modalAction={editTaskFn}
          onCloseModal={closeModalfn}
        />
      )}

      {state.isDeleteModalOpen && (
        <Confirm
          modalTitle={state.modalTitle}
          modalMsg={state.modalMsg}
          modalActionText={state.modalActionText}
          modalAction={deleteTaskFn}
          onCloseModal={closeModalfn}
        />
      )}
      {/*  */}
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
                    editTask={editTaskModalFn}
                    deleteTask={openDeleteModal}
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
