import { StyleSheet, View, Text, FlatList } from "react-native";

const ExpensesList = ({ expenses }) => {

   const renderExpenseItem = (itemData) => {
      return <Text>{itemData.item.description}</Text>
   }

   return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpenseItem} />
}

export default ExpensesList;

// const styles = StyleSheet.create({
//    wrap: {}
// })
