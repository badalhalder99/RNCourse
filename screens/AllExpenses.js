import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/store";

const AllExpenses = () => {
   const expensesContext = useContext(ExpensesContext)

   return (
      <ExpensesOutput
         expenses={expensesContext.expenses}
         expensesPeriod="Total"
         fallbackText="No registered expenses found!"
      />
   )
}

export default AllExpenses;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   }
})
