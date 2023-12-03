import React, { useState } from "react";

const CounterTest = () => {
  const [count, setCount] = useState(0);

  const decr = () => {
    setCount(count - 1);
  };
  const incr = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </>
  );
};

export default CounterTest;
