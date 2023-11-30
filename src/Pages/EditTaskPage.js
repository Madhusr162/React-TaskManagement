// EditTaskPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EditTaskForm from '../Components/EditTaskForm';

const EditTaskPage = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        // Fetch task from localStorage or API
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const selectedTask = storedTasks.find((t) => t.id === parseInt(taskId, 10));
        setTask(selectedTask);
    }, [taskId]);

    const handleEditTask = (editedTask) => {
        // Update task in localStorage or API
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = storedTasks.map((t) =>
            t.id === editedTask.id ? editedTask : t
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        navigate('/');
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>Edit Task</h1>
                <Link to="/"><button type="button" class="btn btn-success">Back to Task List</button></Link>
            </div>
            {task ? <EditTaskForm task={task} onSubmit={handleEditTask} /> : <p>Loading...</p>}
        </div>
    );
};

export default EditTaskPage;
