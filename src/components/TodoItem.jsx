import React from "react";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <p>{todo.task}</p>
      <div>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
