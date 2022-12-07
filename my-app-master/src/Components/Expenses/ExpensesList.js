import "./ExpensesList.css";
import Expenses from "./Expenses";

const ExpensesList = (props) => {
  let expenseData = <h2 className="expenses-list__fallback">Nenhum item registrado.</h2>

  if (props.filteredData.length > 0) {
    expenseData = props.filteredData.map((expense) => (
      <Expenses
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expenseData}</ul>;
};

export default ExpensesList;
