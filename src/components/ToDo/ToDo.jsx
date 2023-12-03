import React, { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

  const handleAdd = () => {
    if (editIndex !== -1) {
      saveEdit();
    } else if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const saveEdit = () => {
    if (editedTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editedTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditedTodo("");
    }
  };

  return (
    <div>
      <input
        value={newTodo}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                </div>
              ) : (
                <div>
                  {index}. {todo}
                  <button onClick={() => deleteTodo(index)}>del</button>
                  <button onClick={() => setEditIndex(index)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
