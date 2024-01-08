import React, { useState } from 'react';
import AddInput from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import "./Todo.css";

interface TodoItem {
    id: string;
    task: string;
    completed: boolean;
}

function Todo() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    return (
        <div className="todo">
            <Header title="Task List" />
            <AddInput
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}

export default Todo;


