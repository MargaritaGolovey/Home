import React, { useState } from "react";

const ToD = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index, editedText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editedText;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        value={newTodo}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button
                onClick={() => {
                  const editedText = prompt("Edit the task:", todo);
                  if (editedText !== null) {
                    editTodo(index, editedText);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToD;
