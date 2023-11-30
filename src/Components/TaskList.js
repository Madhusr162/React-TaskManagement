import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <div className="input-group input-group-lg" key={task.id}>
                    <span className="input-group-text m-auto justify-content-center mt-3" id="inputGroup-sizing-lg" style={{ "width": "50%", textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <input className="form-check-input me-2" type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggle(task.id)}
                        />
                        <div style={{ "background-color": "white" }} className='me-2'>{task.name}</div>
                        <button className="btn btn-danger me-2" onClick={() => onDelete(task.id)}>X</button>
                        <Link to={`/edit/${task.id}`}>
                        <button className="btn btn-info">Edit</button>
                        </Link>
                    </span>
                </div>
            ))}
        </ul>
    );
};

export default TaskList;
