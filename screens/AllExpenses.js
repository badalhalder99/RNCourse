import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

const AllExpenses = () => {

   return <ExpensesOutput expensesPeriod="Total" />
}

export default AllExpenses;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   }
})
