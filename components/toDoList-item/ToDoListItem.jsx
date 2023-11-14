import React from "react";
import "../toDoList-item/toDoListItem.css";

const ToDoListItem = ({ data, abdate }) => {
  return (
    <>
      {data.map((item) => (
        <li className="item-type" key={item.id}>
          <div className="wrapper">
            <div className="itemNumber">{item.id}</div>
            <h2>{item.name}</h2>
          </div>
          <div className="icon-type">
            <button id={item.id} onClick={() => abdate(item.id)}>
              <img
                className="icon"
                src="https://mywebicons.ru/i/png/786d276d54049f601c7ead91cb930193.png"
                alt=""
              />
            </button>
            <button>
              <img
                className="icon"
                src="https://e7.pngegg.com/pngimages/374/839/png-clipart-keene-business-brattleboro-car-salespro-consulting-pvt-ltd-business-angle-pencil-thumbnail.png"
                alt=""
              />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default ToDoListItem;
