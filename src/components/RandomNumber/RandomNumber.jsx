import React, { useState } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(1);

  const createRandomNumber = (min,max) => {
   
    return (Math.random() * ((max - min) + min)).toFixed();
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={() => setNumber(createRandomNumber(1,100))}>add</button>
    </>
  );
};

export default RandomNumber;
