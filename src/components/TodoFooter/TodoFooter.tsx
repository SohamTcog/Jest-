import React from 'react';
import "./TodoFooter.css";
import { Link } from "react-router-dom";

interface TodoFooterProps {
    numberOfIncompleteTasks: number;
} 

const TodoFooter: React.FC<TodoFooterProps> = ({ numberOfIncompleteTasks}) => {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link to="/followers">Followers</Link>
        </div>
    );
}

export default TodoFooter;
