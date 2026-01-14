import { StyleSheet, View, Text } from "react-native";
import Colors from "../../css/color/Colors";

const ExpensesSummary = ({ expenses, periodName }) => {

   const expensesSum = expenses.reduce((sum, expense) => {
      return sum + expense.amount
   }, 0)

   return (
      <View style={styles.container}>
         <Text style={styles.period}>{periodName}</Text>
         <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
      </View>
   )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
   container: {
      padding: 8,
      paddingHorizontal: 16,
      backgroundColor: Colors.accent,
      borderRadius: 56,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   period: {
      fontSize: 12,
      color: Colors.white,
   },
   sum: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.white,
   },
});
