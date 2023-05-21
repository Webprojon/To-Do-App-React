import React, { useState } from "react";
import TaskList from "./taskList";

const TaskForm = () => {
  // Hooks
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Getting input value
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Adding Task
  const addTask = () => {
    if (inputValue.length >= 10) {
      setTasks([...tasks, inputValue]);
    } else {
      alert("Plz enter max 10 charachter 😁🤨");
    }
    setInputValue("");

    // console.log(localStorage.setItem("mode", "light"));
  };

  // Deleting Task
  const deleteTask = (i) => {
    setTasks([...tasks, inputValue]);
    const allTasks = [...tasks];
    allTasks.splice(i, 1);
    setTasks(allTasks);
  };

  return (
    <div className="tasks__container">
      <div className="task__header">
        <input
          type="text"
          value={inputValue}
          placeholder="What is your plan for today ?"
          onChange={getInputValue}
        />
        <button onClick={addTask} className="add__task-btn">
          Add task
        </button>
      </div>

      {tasks.map((task, i) => (
        <TaskList task={task} i={i} deleteTask={deleteTask} key={i} />
      ))}
    </div>
  );
};

export default TaskForm;
