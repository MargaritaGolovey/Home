import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={name} type="text" />
      <button>add</button>
    </form>
  );
};

export default Form;
