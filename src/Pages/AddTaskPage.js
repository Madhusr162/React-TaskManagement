import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddTaskForm from '../Components/AddTaskForm';

const AddTaskPage = () => {
    const navigate = useNavigate();

    const handleAddTask = (newTask) => {
        // Save task to localStorage or API
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        localStorage.setItem('tasks', JSON.stringify([...storedTasks, newTask]));
        navigate('/');
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>Add Task</h1>
                <Link to="/"><button type="button" class="btn btn-success">Back to Task List</button></Link>
            </div>
            <AddTaskForm onSubmit={handleAddTask} />
        </div>
    );
};

export default AddTaskPage;
