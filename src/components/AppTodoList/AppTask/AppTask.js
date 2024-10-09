import "./AppTask.css";

function AppTask({ task, onDelete, onToggle }) {
  return (
    <div className="app-task-container" onDoubleClick={() => onToggle(task.id)}>
      <div style={{ display: "flex" }}>
        {task.reminder ? (
          <div style={{ backgroundColor: "blue", width: "10px" }}></div>
        ) : (
          ""
        )}
        <p>{task.text}</p>
      </div>

      <button
        style={{ color: "red", paddingRight: "10px" }}
        onClick={() => onDelete(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default AppTask;
