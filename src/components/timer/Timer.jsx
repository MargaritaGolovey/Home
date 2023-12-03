import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsOpen } from "../../features/toggle/toggle";

const Timer = () => {
  const [initialValue1, setValue1] = useState(0);
  const [initialValue2, setValue2] = useState(10);
  const isEqual = initialValue1 === initialValue2;
  const dispatch = useDispatch();
  const {isOpen,message} = useSelector((state) => state.toggle);
 
  console.log(message);

  useEffect(() => {
    if (isEqual) return;
    const timer1 = setInterval(() => {
      setValue1((initialValue1) => initialValue1 + 1);
      setValue2((initialValue2) => initialValue2 - 1);
    }, 1000);
    return () => clearInterval(timer1);
  }, [isEqual]);

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div>{initialValue1}</div>
      <div>{initialValue2}</div>

      {isOpen && "Opened now"}
      <button onClick={() => dispatch(updateIsOpen(!isOpen))}>Togglew</button>
    </div>
  );
};

export default Timer;
