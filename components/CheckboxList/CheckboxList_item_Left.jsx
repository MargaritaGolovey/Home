import React, { useState } from "react";

const CheckboxList_item_Left = ({
  moveRight,
  data,
  setState,
  modefication,
  changeCheck,
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: "300px",
        height: "100px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {data.map((item) => {
        return (
          <label key={item.id}>
            {item.name}
            <input
              type="checkbox"
              name={item.name}
              checked={item.checked}
              id={item.id}
              onChange={(e) => changeCheck(e.target, data, setState)}
            />
          </label>
        );
      })}
      <button
        style={{ position: "absolute", bottom: 5 }}
        onClick={() => modefication(data, moveRight, setState)}
      >
        Right
      </button>
    </div>
  );
};

export default CheckboxList_item_Left;
