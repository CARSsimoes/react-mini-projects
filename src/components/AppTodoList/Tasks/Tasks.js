import React from "react";
import AppTask from "../AppTask/AppTask";
import "./Tasks.css";

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <AppTask
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Tasks;
