import "./ExpensesYearly.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpensesYearly = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const yearZeroHandler = (chosenYear) => {
    setSelectedYear(chosenYear);
  };

  const yearFilteredData = props.item.filter(
    (filter) => filter.date.getFullYear() === parseInt(selectedYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={yearFilteredData} />
        <ExpenseFilter
          startingYear={selectedYear}
          onChangeYear={yearZeroHandler}
        />
        <ExpensesList filteredData={yearFilteredData} />
      </Card>
    </div>
  );
};

export default ExpensesYearly;
