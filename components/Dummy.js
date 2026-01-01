import { StyleSheet, View, Text } from "react-native";

const Dummy = () => {

   return (
      <View style={styles.wrap}>
         <Text>Dummy Text</Text>
      </View>
   )
}

export default Dummy;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   }
})
