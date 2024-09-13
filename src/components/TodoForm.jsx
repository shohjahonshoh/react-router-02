import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, editTodo }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.task);
    } else {
      setInput("");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ task: input });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add or edit task..."
      />
      <button type="submit">{editTodo ? "Edit Todo" : "Add Todo"}</button>
    </form>
  );
}

export default TodoForm;
