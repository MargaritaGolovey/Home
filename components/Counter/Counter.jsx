import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  //   const decre = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incr}>+</button>
      <button onClick={count > 0 ? () => setCount(count - 1) : count}>-</button>
    </div>
  );
};

export default Counter;
