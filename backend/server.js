const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenses");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
