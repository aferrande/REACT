import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseHandler = (inputExpense) => {
    const expenseData = { ...inputExpense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setForm(false);
  };

  const newFormHandler = () => {
    setForm(true);
  };

  const screenReset = () => {
    setForm(false);
  };

  let newForm;

  form
    ? (newForm = (
        <NewExpenseForm
          onSaveExpense={saveExpenseHandler}
          clicked={screenReset}
        />
      ))
    : (newForm = <button onClick={newFormHandler}>Add Novo Item</button>);

  // let newForm = <button onClick={newFormHandler}>Add Novo Item</button>;

  // if (form === true) {
  //   newForm = (
  //     <NewExpenseForm onSaveExpense={saveExpenseHandler} clicked={setForm} />
  //   );
  // }

  return (
    <div className="new-expense">
      {/* {!form && <button onClick={newFormHandler}>Add Novo Item</button>}
      {form && <NewExpenseForm onSaveExpense={saveExpenseHandler} clicked={screenReset}/>} */}
      {newForm}
    </div>
  );
};

export default NewExpense;
