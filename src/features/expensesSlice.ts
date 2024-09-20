import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Expense interface
interface Expense {
  id: string;
  name: string;
  price: number;
  percentage: number;
}

// Define the state interface for expenses
interface ExpensesState {
  expenses: Expense[];
  total: number;
}

// Initial state for the expenses
const initialState: ExpensesState = {
  expenses: [],
  total: 0,
};

// Create the slice for expenses
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    // Action to add a new expense
    addExpense: (state) => {
      state.expenses.push({
        id: Date.now().toString(), // Generate unique ID based on timestamp
        name: "",
        price: 0,
        percentage: 0,
      });
    },

    // Action to delete an expense by ID
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },

    // Action to update an expense's field
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; field: keyof Expense; value: any }>
    ) => {
      const expense = state.expenses.find((e) => e.id === action.payload.id);
      if (expense) {
        const field = action.payload.field;

        // Type checking based on field
        if (field === "name" && typeof action.payload.value === "string") {
          expense.name = action.payload.value;
        } else if (
          field === "price" &&
          typeof action.payload.value === "number"
        ) {
          expense.price = action.payload.value;
        } else if (
          field === "percentage" &&
          typeof action.payload.value === "number"
        ) {
          expense.percentage = action.payload.value;
        }
      }
    },

    // Action to calculate the total of all expenses
    calculateTotal: (state) => {
      state.total = state.expenses.reduce((acc, expense) => {
        const totalPrice =
          expense.price + expense.price * (expense.percentage / 100);
        return acc + totalPrice;
      }, 0);
    },
  },
});

// Export actions and reducer from the slice
export const { addExpense, deleteExpense, updateExpense, calculateTotal } =
  expensesSlice.actions;
export default expensesSlice.reducer;
