import { StyleSheet, View, Text } from "react-native";

const ManageExpense = () => {

   return (
      <View style={styles.wrap}>
         <Text>ManageExpense Text</Text>
      </View>
   )
}

export default ManageExpense;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   }
})
