import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // const [inputTitle, setInputTitle] = useState("");
  // const [inputAmount, setInputAmout] = useState("");
  // const [inputDate, setInputDate] = useState("");
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, inputTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, inputAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, inputDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.inputTitle,
      amount: +userInput.inputAmount,
      date: new Date(userInput.inputDate + "T00:00"),
    };
    props.onSaveExpense(expenseData);
    setUserInput({ inputTitle: "", inputAmount: "", inputDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="">Nome</label>
          <input
            type="text"
            value={userInput.inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Valor</label>
          <input
            type="number"
            min="0,01"
            step="0,01"
            placeholder="R$0,00"
            value={userInput.inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Data</label>
          <input
            type="date"
            min="2019-01-01"
            value={userInput.inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.clicked}>
          Cancelar
        </button>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
