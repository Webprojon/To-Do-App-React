import React from "react";
import TaskForm from "./Components/taskForm";
import Mode from "./Components/changeMode";
import "./styles/app.scss";

const App = () => {
  return (
    <div className="App">
      <TaskForm />
      <Mode />
    </div>
  );
};

export default App;
