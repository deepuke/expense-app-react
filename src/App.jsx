import React from "react";
import { useState } from "react";
import "./App.css";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import data from "./data/data.json";
const App = () => {
  const [expenses, setExpenses] = useState(data.expenses);

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", {}, "Expense App"),
    React.createElement(NewExpense, { addNewExpense: addExpensesHandler }),
    React.createElement(Expenses, { expenses })
  );
};

export default App;
