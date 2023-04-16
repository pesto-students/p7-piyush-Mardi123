import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTodo() {
    if (inputValue === '') return;

    const newTodo = {
      id: uuidv4(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleTodoChecked(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Take a note..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleTodoChecked(todo.id)}
            />
            <div className={`todo-text ${todo.checked ? 'checked' : ''}`}>
              {todo.text}
            </div>
            <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>
              <i className="fa fa-trash" aria-hidden="true">Delete</i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
