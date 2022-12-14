import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditingEnabled, setIsEditingEnabled] = useState(false);
  const showExpenseForms = () => {
    setIsEditingEnabled(true);
  };
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.addNewExpense(expenseData);
    hideEditingEnabled();
  };

  const hideEditingEnabled = () => {
    setIsEditingEnabled(false);
  };
  return (
    <div>
      {isEditingEnabled ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelExpenseForm={hideEditingEnabled}
        />
      ) : (
        <button onClick={showExpenseForms}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
