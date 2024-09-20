// src/components/Total.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Box, Typography, Paper } from "@mui/material";

const Total: React.FC = () => {
  const total = useSelector((state: RootState) => state.expenses.total);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        marginTop: 2,
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Total Sum: {total.toFixed(2)} €
      </Typography>
    </Paper>
  );
};

export default Total;
