import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/store";
import { getDateMinusDays } from "../utils/utils";

const RecentExpenses = () => {
   const expensesContext = useContext(ExpensesContext)

   const recentExpenses = expensesContext.expenses.filter(expense => {
      const today = new Date();
      const get7DaysAgo = getDateMinusDays(today, 7);

      const expenseDate = new Date(expense.date);
      return expenseDate >= get7DaysAgo && expenseDate <= today;
   });

   return (
      <ExpensesOutput
         expenses={recentExpenses}
         expensesPeriod="Last 7 Days"
         fallbackText="No expenses registered for the last 7 days."
      />
   )
}

export default RecentExpenses;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   }
})
