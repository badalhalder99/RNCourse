import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({deleteGoalItem, itemData}) => {
   console.log(itemData.item)

   return (
      <View style={styles.wrap}>
         <Pressable onPress={() => deleteGoalItem(itemData.item.id)} android_ripple={{color: "#11043eff"}}>
            <Text style={styles.listText}>{itemData.item.text}</Text>
         </Pressable>
      </View>
   )
}

export default GoalItem;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9,
      overflow: 'hidden' // Important to clip ripple
   },
   listText: {
      padding: 12,
      color: "#fff"
   }
})
