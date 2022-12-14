import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <label>{filteredYear}</label>
      <ExpensesFilter
        selectedYear={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
