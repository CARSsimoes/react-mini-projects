import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [formData, setFormData] = useState({
    taskName: "",
    dayTime: "",
    reminder: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onAdd({
      text: formData.taskName,
      day: formData.dayTime,
      reminder: formData.reminder,
    });
    // validations
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          name="taskName"
          value={formData.taskName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Day & Time</label>
        <input
          type="text"
          name="dayTime"
          value={formData.dayTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={formData.reminder}
          onChange={handleChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
}

export default AddTask;
