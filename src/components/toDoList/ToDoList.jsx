import { useEffect, useState } from "react";
import ToDoListItem from "../toDoList-item/ToDoListItem";
import "../toDoList/toDoList.css";
import { useLocation, useNavigate, useParams } from "react-router";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  let [el, changeElem] = useState(checkLocalStorrage());
  let [inputValue, changeValue] = useState(" ");

  const deleteItem = (elem) => {
    changeElem(el.filter((item) => item.id !== elem));
  };

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
        <ToDoListItem data={el} deleteItem={deleteItem} />
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
