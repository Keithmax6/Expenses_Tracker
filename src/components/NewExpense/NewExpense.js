import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showButton, setShowButton] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowButton(false);
  };
  const buttonHandler = () => {
    setShowButton(true);
  };
  const cancelButtonHandler = () => {
    setShowButton(false);
  };
  return (
    <div className="new-expense">
      {!showButton && <button onClick={buttonHandler}>Add New Expenses</button>}
      {showButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
