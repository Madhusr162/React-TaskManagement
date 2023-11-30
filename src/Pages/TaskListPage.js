import React, { useState, useEffect } from 'react';
import TaskList from '../Components/TaskList';
import { Link } from 'react-router-dom';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from localStorage or API
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Task List</h1>
      <Link to="/add"><button type="button" class="btn btn-success">Add Task</button></Link>
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default TaskListPage;
