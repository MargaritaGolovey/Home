import { useState } from "react";
import '../Toggle/toggle.css'

const Toggle = () => {
  const [active, setActive] = useState(true);


  const wordOutput = (active) => {
    if (active) {
      return "Включить";
    } else {
      return "Выключить";
    }
  };
  return <button className="toggle" onClick={() => setActive(!active)}>{wordOutput(active)}</button>
};


export default Toggle;


