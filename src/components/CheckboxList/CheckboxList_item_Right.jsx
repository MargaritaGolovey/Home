import React, { useState } from "react";

const CheckboxList_item_Right = ({
  data,
  setState,
  moveLeft,
  modefication,
  changeCheck
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: "300px",
        height: "100px",
        border: "1px solid black",
        padding: "10px",
        position: "relative",
      }}
    >
      {data.map((item) => {
        return (
          <label key={item.id}>
            {item.name}
            <input
              type="checkbox"
              name={item.name}
              id={item.id}
              checked={item.checked}
              onChange={(e) => changeCheck(e.target, data, setState)}
            />
          </label>
        );
      })}
      <button
        style={{ position: "absolute", bottom: 5 }}
        onClick={() => modefication(data, moveLeft, setState)}
      >
        Left
      </button>
    </div>
  );
};
export default CheckboxList_item_Right;
