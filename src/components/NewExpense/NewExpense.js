import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const changeVisibility = () => {
    setFormVisible((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="new-expense">
      {formVisible ? (
        <ExpenseForm
          onCancelForm={changeVisibility}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={changeVisibility}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
