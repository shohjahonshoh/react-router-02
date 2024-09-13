import "../App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todo) => {
    if (editTodo) {
      setTodos(
        todos.map((item) =>
          item.id === editTodo.id ? { ...item, task: todo.task } : item
        )
      );
      setEditTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), task: todo.task }]);
    }
  };

  const editHandler = (todo) => {
    setEditTodo(todo);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} />
      <TodoList todos={todos} onEdit={editHandler} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
