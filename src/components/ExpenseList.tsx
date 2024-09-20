// src/components/ExpenseList.tsx
import React from "react";
import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { RootState } from "../app/store";
import { Box, Typography } from "@mui/material";

const ExpenseList: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  return (
    <Box
      padding={3}
      marginBottom={3}
      border={1}
      borderColor="primary.main"
      borderRadius={2}
      bgcolor="background.paper"
      boxShadow={3}
    >
      <Typography variant="h5" fontWeight="bold" marginBottom={2}>
        Expense List
      </Typography>
      <Box>
        {expenses.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No expenses added yet.
          </Typography>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default ExpenseList;
