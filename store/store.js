import { createContext, useEffect, useReducer } from "react";
import { fetchExpenses, createExpense, updateExpenseApi,deleteExpenseApi } from "../API/http"

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  updateExpense: (id, expenseData) => {},
  deleteExpense: (id) => {},
});

const expensesReducer = (state, action) => {
   switch (action.type) {
      case "SET":
         return action.payload;

      case "ADD":
         return [action.payload, ...state];

      case "UPDATE":
         const index = state.findIndex(
            (expense) => expense.id === action.payload.id
         );
         const updatedExpense = {
            ...state[index],
            ...action.payload.data,
         };

         const updatedState = [...state];
         updatedState[index] = updatedExpense;

         return updatedState;

      case "DELETE":
         return state.filter((expense) => expense.id !== action.payload);

      default:
         return state;
   }
};

const ExpensesContextProvider = ({ children }) => {
   const [expensesState, dispatch] = useReducer(expensesReducer, []);

   // 🔥 LOAD DATA FROM BACKEND
   useEffect(() => {
      async function loadExpenses() {
      const expenses = await fetchExpenses();
      dispatch({ type: "SET", payload: expenses });
      }

      loadExpenses();
   }, []);

   async function addExpense(expenseData) {
      const newExpense = await createExpense(expenseData);
      dispatch({ type: "ADD", payload: newExpense });
   }

   async function updateExpense(id, expenseData) {
      await updateExpenseApi(id, expenseData);
      dispatch({
      type: "UPDATE",
      payload: { id: id, data: expenseData },
      });
   }

   async function deleteExpense(id) {
      await deleteExpenseApi(id);
      dispatch({ type: "DELETE", payload: id });
   }

   const value = {
      expenses: expensesState,
      addExpense,
      updateExpense,
      deleteExpense,
   };

   return (
      <ExpensesContext.Provider value={value}>
      {children}
      </ExpensesContext.Provider>
   );
};

export default ExpensesContextProvider;
