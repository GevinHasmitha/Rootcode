import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ExpenseProvider } from "./context/ExpenseContext";
import "./styles.css";

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ExpenseProvider>
  );
}

export default App;
