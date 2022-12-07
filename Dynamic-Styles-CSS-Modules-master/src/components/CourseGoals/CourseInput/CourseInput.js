import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import css from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [invalidText, setInvalidText] = useState("Digite um nome válido");
  const [styling, setStyling] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setStyling(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setStyling(false);
      return setInvalidText("Não é possível adicionar itens vazios");
    }
    props.onAddGoal(enteredValue);
    setInvalidText("Digite um nome válido");
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${css["form-control"]} ${!styling && css.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          placeholder={invalidText}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
