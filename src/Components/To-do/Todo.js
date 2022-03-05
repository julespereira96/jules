import React, { useState } from "react";
import "../To-do/Todo.scss";
import bin from "../Assets/bin.png";

const Todo = () => {
  const [inputArray, setinputArray] = useState([]);

  console.log(inputArray, "inputArrrrrrr");

  const addItem = () => {
    if (inputValue === "") {
      alert("return a value");
      return;
    }

    const newItem = {
      id: 1 + Math.random(),
      value: inputValue,
    };

    setinputArray((inputArray) => [...inputArray, newItem]);
    console.log(inputArray, "inputArray");
  };

  const deleteItem = (id) => {
    console.log(inputArray, "inputArrayyyyyy");
    setinputArray(inputArray.filter((item) => item.id !== id));
  };

  const [inputValue, setinputValue] = useState([]);

  return (
    <>
      <div className="to-do">
        <h1 className="to-do-title">My To-do list</h1>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            type="text"
            placeholder="Title..."
            onKeyPress={(e) => e.key === "Enter" && addItem()}
          />
          <button onClick={() => addItem()} id="button">
            Add items
          </button>
        </div>

        <ul className="to-do-list">
          {inputArray.map((item) => (
            <li key={item.id}>
              <div>{item.value}</div>
              <div>
                <img onClick={() => deleteItem(item.id)} src={bin} alt="bin" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
