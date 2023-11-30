import React, { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    priority: 'low',
  });

  const handleChange = (field, value) => {
    setTask((prevTask) => ({
      ...prevTask,
      [field]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim()) {
      onSubmit({ ...task, id: Date.now(), completed: false });
      setTask({
        name: '',
        description: '',
        priority: 'low',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {task && (
        <div className="card shadow p-3 mt-5 bg-body-tertiary rounded">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Task Name:</label>
              <input
                type="text"
                className="form-control"
                value={task.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Task Description:</label>
              <textarea
                className="form-control"
                value={task.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Priority Level:</label>
              <select
                className="form-select"
                value={task.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddTaskForm;
