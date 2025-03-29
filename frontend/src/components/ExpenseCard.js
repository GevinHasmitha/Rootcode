import React, { useState, useContext } from "react";
import { IconButton, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseForm from "./ExpenseForm";
import ConfirmDialog from "./ConfirmDialog";

const ExpenseCard = ({ expense }) => {
  const { updateExpense, deleteExpense } = useContext(ExpenseContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    deleteExpense(expense.id);
    setOpenDelete(false);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#F5F5F5",
          maxWidth: "100%",
          borderRadius: 2,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": { boxShadow: 6 },
          position: "relative",
        }}
      >
        <CardContent>
          <div>
            <h3>{expense.title}</h3>
            <p>{expense.description || "No description"}</p>
            <p>{expense.category}</p>
            <p>{new Date(expense.date).toLocaleDateString()}</p>
            <p>{expense.amount} LKR</p>
          </div>
          <div>
            <IconButton onClick={() => setOpenEdit(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setOpenDelete(true)}>
              <DeleteIcon />
            </IconButton>
          </div>

          <ExpenseForm
            open={openEdit}
            handleClose={() => setOpenEdit(false)}
            expense={expense}
            onSubmit={(updatedExpense) =>
              updateExpense(expense.id, updatedExpense)
            }
          />

          <ConfirmDialog
            open={openDelete}
            handleClose={() => setOpenDelete(false)}
            handleConfirm={handleDelete}
            title="Confirm Delete"
            message={`Are you sure you want to delete the expense "${expense.title}"?`}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseCard;
