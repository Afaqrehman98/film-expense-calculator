// src/components/ExpenseItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { updateExpense, deleteExpense } from "../features/expensesSlice";
import { TextField, Button, Box, Typography } from "@mui/material";

interface ExpenseItemProps {
  id: string;
  name: string;
  price: number;
  percentage: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  id,
  name,
  price,
  percentage,
}) => {
  const dispatch = useDispatch();

  const handleUpdate = (field: keyof ExpenseItemProps, value: any) => {
    dispatch(updateExpense({ id, field, value }));
  };

  const handleDelete = () => {
    dispatch(deleteExpense(id));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      handleUpdate("price", value === "" ? 0 : parseFloat(value));
    }
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      handleUpdate("percentage", value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={3}
      padding={3}
      border={1}
      borderColor="primary.main"
      borderRadius={2}
      bgcolor="background.paper"
      boxShadow={3}
      sx={{
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 5,
        },
      }}
    >
      <Box sx={{ flexGrow: 1, marginRight: 2 }}>
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => handleUpdate("name", e.target.value)}
          placeholder="Expense Name"
          size="small"
          fullWidth
          sx={{ mb: 1, backgroundColor: "white" }} // Add background color for input
        />
        <Box display="flex" justifyContent="space-between">
          <TextField
            type="number"
            variant="outlined"
            value={price === 0 ? "" : price}
            onChange={handlePriceChange}
            placeholder="Price"
            size="small"
            sx={{ width: "48%", backgroundColor: "white" }} // Add background color for input
          />
          <TextField
            type="number"
            variant="outlined"
            value={percentage === 0 ? "" : percentage}
            onChange={handlePercentageChange}
            placeholder="Percentage"
            size="small"
            sx={{ width: "48%", backgroundColor: "white" }} // Add background color for input
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" marginRight={2}>
        <Typography variant="h6" fontWeight="bold" marginRight={0.5}>
          {(price + price * (percentage / 100)).toFixed(2)}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          €
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Button variant="contained" color="primary">
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ mt: 1 }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ExpenseItem;
