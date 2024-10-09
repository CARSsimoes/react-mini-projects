import React from "react";
import Header from "./Header/Header";
import "./AppTodoList.css";
import Tasks from "./Tasks/Tasks";
import AddTask from "./AddTask/AddTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const listOfTasks = [
  {
    id: uuidv4(),
    text: "Doctor's Appointment",
    day: "Aug 30th at 10:30am",
    reminder: true,
  },
  {
    id: uuidv4(),
    text: "Meeting at School",
    day: "Aug 31st at 1:00pm",
    reminder: true,
  },
  {
    id: uuidv4(),
    text: "Grocery Shopping",
    day: "Sep 1st at 4:00pm",
    reminder: false,
  },
  {
    id: uuidv4(),
    text: "Dentist Appointment",
    day: "Sep 2nd at 11:00am",
    reminder: true,
  },
  {
    id: uuidv4(),
    text: "Evening Walk",
    day: "Sep 3rd at 6:30pm",
    reminder: false,
  },
];

function AppTodoList() {
  const [showAddForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(listOfTasks);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    const newId = uuidv4();
    const newTask = { ...task, id: newId };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleStatusTasks = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <Header showForm={showAddForm} setShowForm={setShowForm} />
      {showAddForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleStatusTasks}
        />
      ) : (
        <p>"No tasks no manage"</p>
      )}
    </div>
  );
}

export default AppTodoList;
