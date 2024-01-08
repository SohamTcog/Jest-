import React, { useState, FC } from 'react';
import "./AddInput.css";
import { v4 as uuidv4 } from "uuid";

interface Todo {
    id: string;
    task: string;
    completed: boolean;
}

interface AddInputProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}

const AddInput: FC<AddInputProps> = ({ setTodos, todos }) => {
    const [todo, setTodo] = useState<string>("");

    const addTodo = () => {
        if (!todo) return;
        const updatedTodos: Todo[] = [
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false
            }
        ];
        setTodos(updatedTodos);
        setTodo("");
    };

    return (
        <div className="input-container">
            <input
                className="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    );
};

export default AddInput;
