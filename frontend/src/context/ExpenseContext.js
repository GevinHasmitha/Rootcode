import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [categories] = useState([
    "Food",
    "Household",
    "Social Life",
    "Transportation",
    "Health",
    "Miscellaneous",
  ]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/expenses");
      console.log("Fetched expenses from API:", response.data);
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/expenses",
        expense
      );
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const updateExpense = async (id, updatedExpense) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/expenses/${id}`,
        updatedExpense
      );
      setExpenses(expenses.map((exp) => (exp.id === id ? response.data : exp)));
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const deleteExpense = async (id) => {
    console.log("Deleting expense with ID:", id);
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter((exp) => exp.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        categories,
        addExpense,
        updateExpense,
        deleteExpense,
        fetchExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
