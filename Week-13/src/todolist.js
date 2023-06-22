import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');

  function handleInput(e) {
    setInputVal(e.target.value);
  }

  function handleTodo() {
    if (inputVal === "") return;
    const newTodo = {
      id: uuidv4(),
      content: inputVal
    };
    setTodos([...todos, newTodo]);
    setInputVal("");
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add your Task here" value={inputVal} onChange={handleInput} />
      <button onClick={handleTodo}>Add To-do List</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" onChange={() => handleDelete(todo.id)} />
            {todo.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
