import React from "react";
import "./ButtonBox.css";
import Button from "./Button";
import calc_context from "./context";
import { useContext } from "react";

const ButtonBox = () => {
  const { updateValue, calculate, reset, delete_btn } =
    useContext(calc_context);
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="button-box">
      <div className="operators">
        <button onClick={() => updateValue("/")}>/</button>
        <button onClick={() => updateValue("*")}>*</button>
        <button onClick={() => updateValue("+")}>+</button>
        <button onClick={() => updateValue("-")}>-</button>
      </div>
      
      <div className="digits">
        {numbers.map((number) => (
          <Button
            updateValue={updateValue}
            number={number.toString()}
            key={number}
          />
        ))}
        <button onClick={() => updateValue(".")}>.</button>
        <button onClick={() => updateValue("%")}>%</button>
        <button className="reset" onClick={reset}>C</button>
        <button className="delete" onClick={delete_btn}>DEL</button>
        <button className="equals" onClick={calculate}>=</button>

      </div>
    </div>
  );
};

export default ButtonBox;
