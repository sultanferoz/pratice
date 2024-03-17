import React from "react";
import { useReducer ,useState } from "react";
const initialValue = "";

const resultCard = (state, action) => {
  let marks = action;
  console.log(state,action,"adg kqwehdjh ");

  switch (true) {
    case marks <= 40:
      return " F";
      break;
    case marks >= 41 && marks <= 55:
      return "D";
      break;
    case marks >= 56 && marks <= 65:
      return "C";
      break;
    case marks >= 66 && marks <= 79:
      return "B";
      break;
    case marks >= 80 && marks <= 100:
      return "A";
    default:
      return initialValue;
  }

};

const CalculateGrades = () => {
    const [marks, MarksDispatch] = useReducer(resultCard, initialValue);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
      setInputValue("");
      MarksDispatch();
    }
  return (
    <>
      <div>
        <h2>Result card</h2>
        <input
          type="number"
          placeholder="enter your marks here"
          value={inputValue}
          onChange={(e) =>
            setInputValue(MarksDispatch(parseInt(e.target.value)))
          }
        />
        <br />
        <button onClick={handleClick}>clear</button>
        <p>grade:{marks}</p>
      </div>
    </>
  );
};

export default CalculateGrades;
