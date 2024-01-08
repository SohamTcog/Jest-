import React, { useState } from 'react';
import TodoFooter from '../TodoFooter/TodoFooter';
import './TodoList.css';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [editableId, setEditableId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>('');

  const updateTask = (id: string) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  const handleEdit = (id: string) => {
    setEditableId(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditedText(editedTodo?.task || '');
  };

  const handleSaveEdit = (id: string) => {
    setEditableId(null);
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: editedText,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const handleCancelEdit = () => {
    setEditableId(null);
    setEditedText('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleDelete = (id: string) => {
    const indexToDelete = todos.findIndex((todo) => todo.id === id);

    if (indexToDelete !== -1) {
      const updatedTodos = [...todos.slice(0, indexToDelete), ...todos.slice(indexToDelete + 1)];
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className={`todo-item ${todo.completed && 'todo-item-active'}`}>
              {editableId === todo.id ? (
                <div>
                  <input type="text" value={editedText} onChange={handleInputChange} />
                  <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <span onClick={() => updateTask(todo.id)}>{todo.task}</span>
                  <button className="edit-button" onClick={() => handleEdit(todo.id)}>Edit</button>
<button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
