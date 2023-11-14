import { useEffect, useState } from "react";
import ToDoListItem from "../toDoList-item/ToDoListItem";
import "../toDoList/toDoList.css";
const data = [
  { id: 1, name: "Зделать зарядку" },
  { id: 2, name: "Почистить зубы" },
  { id: 3, name: "Позавтракать" },
  { id: 4, name: "Позавтракать" },
  { id: 5, name: "Позавтракать" },
  { id: 6, name: "Позавтракать" },
  { id: 7, name: "Позавтракать" },
];

export const ToDoList = () => {
  let [el, changeElem] = useState(checkLocalStorrage());
  console.log(el);
  let [inputValue, changeValue] = useState(" ");

  const newElem = (elem) => {
    changeElem(
      (el = el.filter((item) => item.id !== elem)).map(function (elem, index) {
        if (elem.id > index + 1) {
          return { ...elem, id: index + 1 };
        } else {
          return elem;
        }
      })
    );
  };
  console.log(el);
  const addValue = (value) => {
    changeElem([...el, { id: el.length + 1, name: value }]);
    changeValue("");
  };

  function checkLocalStorrage() {
    const isFill = localStorage.getItem("ToDolist");
    return isFill ? JSON.parse(localStorage.getItem("ToDolist")) : data;
  }

  useEffect(() => {
    localStorage.setItem("ToDolist", JSON.stringify(el));
  }, [el]);

  return (
    <div className="toDolist">
      <h1 className="tite-name">Список дел:</h1>
      <ul className="list-name">
        <ToDoListItem data={el} abdate={newElem} />
      </ul>
      <div className="item-add">
        <input
          value={inputValue}
          type="text"
          name=""
          id=""
          onChange={(e) => changeValue(e.target.value)}
        />
        <button className="button-add" onClick={() => addValue(inputValue)}>
          Add
        </button>
        <div>
          <p></p>
        </div>
        <button onClick={() => changeElem(data)}>
          Вернуть первоначальный список задач
        </button>
      </div>
    </div>
  );
};
