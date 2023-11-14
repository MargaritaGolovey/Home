import React, { useState } from "react";
import CheckboxList_item_Left from "./CheckboxList_item_Left";
import CheckboxList_item_Right from "./CheckboxList_item_Right";

const CheckboxList = () => {
  let [stateRight, setState] = useState([]);
  let [stateLeft, setStateLeft] = useState([
    { id: 3, name: 3, checked: false },
    { id: 1, name: 1, checked: false },
    { id: 4, name: 4, checked: false },
    { id: 2, name: 2, checked: false },
  ]);

  const moveRight = (item) => {
    stateRight = [...stateRight, ...item];
    stateRight = stateRight.map((item) => {
      return { ...item, checked: false };
    });
    setState(stateRight);
  };

  const moveLeft = (item) => {
    stateLeft = [...stateLeft, ...item];
    stateLeft = stateLeft.map((item) => {
      return { ...item, checked: false };
    });
    setStateLeft(stateLeft);
  };

  const modefication = (data, funMove, funSetState) => {
    let duty = data.filter((item) => item.checked == true);
    funMove(duty);
    data = data.filter((item) => item.checked != true);
    funSetState(data);
  };
  const changeCheck = (element, data, setState) => {
    const newData = data.map((item) => {
      if (item.id == element.id) {
        return { ...item, checked: true };
      } else {
        return item;
      }
    });

    setState(newData);
  };

  return (
    <div style={{ display: "flex" }}>
      <CheckboxList_item_Left
        moveRight={moveRight}
        data={stateLeft}
        setState={setStateLeft}
        modefication={modefication}
        changeCheck={changeCheck}
      />
      <CheckboxList_item_Right
        data={stateRight}
        moveLeft={moveLeft}
        setState={setState}
        modefication={modefication}
        changeCheck={changeCheck}
      />
    </div>
  );
};

export default CheckboxList;
