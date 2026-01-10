import { StyleSheet, View, Text } from "react-native";

const MealItem = ({title}) => {

   return (
      <View style={styles.wrap}>
         <Text>{title}</Text>
      </View>
   )
}

export default MealItem;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
   }
})
