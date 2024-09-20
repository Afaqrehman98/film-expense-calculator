// src/App.tsx
import React from "react";
import { useDispatch } from "react-redux";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";
import { addExpense, calculateTotal } from "./features/expensesSlice";
import { Box, Button, Typography } from "@mui/material";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    dispatch(addExpense());
  };

  const handleCalculateTotal = () => {
    dispatch(calculateTotal());
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" fontWeight="bold" marginBottom={3}>
        Film Expense Calculator
      </Typography>
      <Box display="flex" justifyContent="space-between" marginBottom={3}>
        <Button variant="contained" onClick={handleAddExpense}>
          Add New Expense
        </Button>
        <Button variant="contained" onClick={handleCalculateTotal}>
          Calculate Total
        </Button>
      </Box>
      <ExpenseList />
      <Total />
    </Box>
  );
};

export default App;
