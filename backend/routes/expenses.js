const express = require("express");
const router = express.Router();
const { expenses } = require("../db/database");

// Get all expenses
router.get("/", (req, res) => {
  res.json(expenses.find());
});

// Create a new expense
router.post("/", (req, res) => {
  const { title, description, date, category, amount } = req.body;

  // Validation
  if (!title || !date || !category || !amount) {
    return res
      .status(400)
      .json({ error: "Title, date, category, and amount are required" });
  }
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  const newExpense = {
    id: Date.now().toString(),
    title,
    description: description || "",
    date,
    category,
    amount: parseFloat(amount),
  };

  expenses.insert(newExpense);
  res.status(201).json(newExpense);
});

// Update an expense
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, date, category, amount } = req.body;

  // Validation
  if (!title || !date || !category || !amount) {
    return res
      .status(400)
      .json({ error: "Title, date, category, and amount are required" });
  }
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  const expense = expenses.findOne({ id });
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  expense.title = title;
  expense.description = description || "";
  expense.date = date;
  expense.category = category;
  expense.amount = parseFloat(amount);

  expenses.update(expense);
  res.json(expense);
});

// Delete an expense
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const expense = expenses.findOne({ id });
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  expenses.remove(expense);
  res.status(204).send();
});

module.exports = router;
