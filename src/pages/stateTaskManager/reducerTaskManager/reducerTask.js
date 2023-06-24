export const taskReducer = (state, action) => {
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

  if (action.type === "EDIT_TASK_MODAL") {
    return {
      ...state,
      taskId: action.payload,
      isEditModalOpen: true,
      modalTitle: "Edit Task",
      modalMsg: "You are about to edit this taks",
      modalActionText: "Edit",
    };
  }

  if (action.type === "EDIT_TASK") {
    return {
      ...state,
      isEditing: true,
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    };
  }

  if (action.type === "UPDATE_TASK") {
    const updatedTask = action.payload;
    const id = action.payload.id;

    const taskIndex = state.tasks.findIndex((task) => {
      return task.id === id;
    });

    if (taskIndex !== -1) {
      state.tasks[taskIndex] = updatedTask;
    }

    return {
      ...state,
      isEditing: false,
      isAlertOpen: true,
      alertContent: "Task updated successfully",
      alertClass: "success",
    };
  }

  if (action.type === "OPEN_DELETE_MODAL") {
    console.log(action.payload);
    return {
      ...state,
      taskId: action.payload,
      isDeleteModalOpen: true,
      modalTitle: "Delete Task",
      modalMsg: "You are about to delete this task",
      modalActionText: "Delete",
    };
  }

  if (action.type === "DELETE_TASK") {
    const id = action.payload;
    const remainingTasks = state.tasks.filter((task) => task.id !== id);
    return {
      ...state,
      tasks: remainingTasks,
      isAlertOpen: true,
      alertContent: "Task deleted successfully",
      alertClass: "success",
      isDeleteModalOpen: false,
    };
  }

  if (action.type === "COMPLETE_TASK") {
    const id = action.payload;

    const taskIndex = state.tasks.findIndex((task) => {
      return task.id === id;
    });

    let completedTask = {
      id,
      name: state.tasks[taskIndex].name,
      date: state.tasks[taskIndex].date,
      completed: true,
    };

    if (taskIndex !== -1) {
      state.tasks[taskIndex] = completedTask;
    }
    return {
      ...state,
      isAlertOpen: true,
      alertContent: "Task completed",
      alertClass: "success",
    };
  }

  return state;
};
