import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onSubmit }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask((prevEditedTask) => ({
      ...prevEditedTask,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card shadow p-3 mt-5 bg-body-tertiary rounded">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Task Name:</label>
            <input
              type="text"
              className="form-control"
              value={editedTask.name}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Task Description:</label>
            <textarea
              className="form-control"
              value={editedTask.description}
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Priority Level:</label>
            <select
              className="form-select"
              value={editedTask.priority}
              onChange={handleChange}
              name="priority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Update Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
