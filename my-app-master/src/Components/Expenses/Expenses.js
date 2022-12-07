import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">R${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default Expenses;
