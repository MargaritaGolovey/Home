import { useLayoutEffect, useState } from "react";
import CheckboxList_item_Left from "./CheckboxList_item_Left";
import CheckboxList_item_Right from "./CheckboxList_item_Right";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../../features/toggle/toggle";

const CheckboxList = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const message = useSelector((state) => state.toggle.message);
  const dispatch = useDispatch();
  console.log(isOpen, message);
  const location = useLocation();
  const navigate = useNavigate();
  let [stateRight, setState] = useState([]);
  let [stateLeft, setStateLeft] = useState([
    { id: 3, name: 3, checked: false },
    { id: 1, name: 1, checked: false },
    { id: 4, name: 4, checked: false },
    { id: 2, name: 2, checked: false },
  ]);
  console.log(location);
  const moveRight = (item) => {
    const result = [...stateRight, ...item].map((item) => {
      return { ...item, checked: false };
    });

    setState(result);
  };

  const moveLeft = (item) => {
    const result = [...stateLeft, ...item].map((item) => {
      return { ...item, checked: false };
    });
    setStateLeft(result);
  };

  const modefication = (data, funMove, funSetState) => {
    const dutyState = data.filter((item) => item.checked);
    funMove(dutyState);
    const result = data.filter((item) => !item.checked);
    funSetState(result);
  };
  const changeCheck = (element, data, setState) => {
    const newData = data.map((item) => {
      if (item.id == element.id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setState(newData);
  };
  /*   useLayoutEffect(() => {
  if(error)navigate("/error")
  
  }, [error]); */
  return (
    <div style={{ display: "flex", gap: "50px" }}>
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
      <button
        onClick={() => {
          const result = message.filter((el) => el > 2);

          dispatch(updateMessage(result));
        }}
      >
        increaser
      </button>
    </div>
  );
};

export default CheckboxList;
