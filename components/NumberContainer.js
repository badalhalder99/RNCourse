import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../css/color/Colors';

function NumberContainer({ children }) {

   return (
      <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
      </View>
   );
}

export default NumberContainer;

const screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
   container: {
      borderWidth: 4,
      borderColor: Colors.border ,
      padding: screenWidth < 350 ? 16 : 24,
      margin: screenWidth < 350 ? 16 : 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },
   numberText: {
      color: Colors.accent500,
      fontSize: 36,
      fontWeight: 'bold',
   },
});
