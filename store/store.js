import { createContext, useEffect, useReducer } from "react";

const BACKEND_URL = "http://192.168.0.115:3005/api/expenses";

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
         const updateIndex = state.findIndex(
            (expense) => expense.id === action.payload.id
         );

         const updatedExpense = {
            ...state[updateIndex],
            ...action.payload.data,
         };

         const updatedState = [...state];
         updatedState[updateIndex] = updatedExpense;

         return updatedState;

      case "DELETE":
         return state.filter((expense) => expense.id !== action.payload);

      default:
         return state;
   }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  /**
   * 🔥 FETCH ALL EXPENSES FROM BACKEND
   */
   useEffect(() => {
      async function loadExpenses() {
         try {
            const response = await fetch(BACKEND_URL);

            if (!response.ok) {
               throw new Error("Failed to fetch expenses");
            }

            const data = await response.json();
            
            const loadedExpenses = data.map((item) => ({
               id: item._id,
               description: item.description,
               amount: item.amount,
               date: new Date(item.date),
            }));

            dispatch({ type: "SET", payload: loadedExpenses });
         } catch (error) {
            console.log("FETCH ERROR:", error);
         }
      }

      loadExpenses();
   }, []);

  /**
   * ➕ ADD EXPENSE
   */
   async function addExpense(expenseData) {
      try {
         const response = await fetch(BACKEND_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(expenseData),
         });

         if (!response.ok) {
            throw new Error("Failed to add expense");
         }

         const data = await response.json();

         dispatch({
            type: "ADD",
            payload: {
               id: data._id,
               description: data.description,
               amount: data.amount,
               date: new Date(data.date),
            },
         });
      } catch (error) {
         console.log("ADD ERROR:", error);
      }
   }

  /**
   * ✏️ UPDATE EXPENSE
   */
   async function updateExpense(id, expenseData) {
      try {
         const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(expenseData),
         });

         if (!response.ok) {
            throw new Error("Failed to update expense");
         }

         dispatch({
            type: "UPDATE",
            payload: {
               id: id,
               data: expenseData,
            },
         });
      } catch (error) {
         console.log("UPDATE ERROR:", error);
      }
   }

  /**
   * 🗑 DELETE EXPENSE
   */
   async function deleteExpense(id) {
      try {
         const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: "DELETE",
         });

         if (!response.ok) {
            throw new Error("Failed to delete expense");
         }

         dispatch({ type: "DELETE", payload: id });
      } catch (error) {
         console.log("DELETE ERROR:", error);
      }
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



