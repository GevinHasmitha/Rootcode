import React, { useState, useContext } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { ExpenseContext } from "../context/ExpenseContext";

const Home = () => {
  const { expenses, categories, addExpense } = useContext(ExpenseContext);
  const [openForm, setOpenForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  const filteredExpenses = filterCategory
    ? expenses.filter((exp) => exp.category === filterCategory)
    : expenses;

  return (
    <div className="container">
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <h1>Wallet App</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel>Select a Category</InputLabel>
            <Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              label="Select a Category"
            >
              <MenuItem value="">All</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={() => setOpenForm(true)}>
            Create Expense
          </Button>
        </div>

        <ExpenseList expenses={filteredExpenses} />

        <ExpenseForm
          open={openForm}
          handleClose={() => setOpenForm(false)}
          onSubmit={addExpense}
        />
      </Container>
    </div>
  );
};

export default Home;
