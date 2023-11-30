import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskListPage from './Pages/TaskListPage';
import AddTaskPage from './Pages/AddTaskPage';
import EditTaskPage from './Pages/EditTaskPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/edit/:taskId" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
