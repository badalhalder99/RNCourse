import { StyleSheet, View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {

   const renderExpenseItem = (itemData) => {
      return (
         <ExpenseItem
            id={itemData.item.id}
            description={itemData.item.description}
            amount={itemData.item.amount}
            date={itemData.item.date}
         />
      )
   }

   return (
      <FlatList
         data={expenses}
         keyExtractor={(item) => item.id}
         renderItem={renderExpenseItem}
      />
   )
}

export default ExpensesList;

// const styles = StyleSheet.create({
//    wrap: {}
// })
