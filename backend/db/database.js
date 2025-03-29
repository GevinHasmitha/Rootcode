const loki = require("lokijs");

const db = new loki("wallet.db", {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000, // Save every 4 seconds
});

const expenses = db.addCollection("expenses");

// Function to initialize the database
function databaseInitialize() {
  expenses.insert([
    {
      id: "12334562", //Random ID hardcoded since the data itself is hardcoded
      title: "Food",
      description: "Bought vegetables and fruits",
      date: "2025-03-29",
      category: "Food",
      amount: 20,
    },
    {
      id: "32465437",
      title: "Health",
      description: "Did a health checkup",
      date: "2025-07-29",
      category: "Social Life",
      amount: 20,
    },
    {
      id: "12386346",
      title: "Household",
      description: "Bought new furniture",
      date: "2025-03-29",
      category: "Household",
      amount: 20,
    },
  ]);
  db.saveDatabase();
}

// Function to delete an expense by ID
function deleteExpense(id) {
  console.log("Deleting expense with ID:", id);
  const item = expenses.findOne({ $loki: id });
  if (item) {
    expenses.remove(item);
    db.saveDatabase();
  }
}

module.exports = { expenses, deleteExpense };
