import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
