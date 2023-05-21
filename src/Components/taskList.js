import React, { useState, useRef } from "react";
import DateFormat from "./dateFormat";

const TaskList = ({ task, i, deleteTask }) => {
  // Hooks
  const [readonly, setReadonly] = useState(true);
  const save = useRef(null);

  // Editing Task
  const editTask = () => {
    const edit = document.querySelectorAll(".edit__btn");
    if (edit[i].textContent === "Edit") {
      edit[i].textContent = "Save";
      save.current.focus();
      setReadonly(false);
    } else if (edit[i].textContent === "Save") {
      edit[i].textContent = "Edited";
      setReadonly(true);
    }
  };

  return (
    <div className="tasks__container">
      <div className="all__tasks">
        <div className="each__task" key={i}>
          <input
            className="task__value"
            type="text"
            defaultValue={task}
            readOnly={readonly}
            ref={save}
          />

          <div className="task__btns">
            <button onClick={editTask} className="edit__btn">
              Edit
            </button>
            <button onClick={deleteTask} className="delete__btn">
              Delete
            </button>
          </div>
          <DateFormat />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
