import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../css/color/Colors';

function NumberContainer({ children }) {

   const { width, height } = useWindowDimensions()

   const marginTops = width < 350 ? 20 : 100

   return (
      <View style={[styles.container, { marginTop: marginTops }]}>
         <Text style={styles.numberText}>{children}</Text>
      </View>
   );
}

export default NumberContainer;

const styles = StyleSheet.create({
   container: {
      borderWidth: 4,
      borderColor: Colors.border ,
      borderRadius: 8,
      padding: 16,
      margin: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   numberText: {
      color: Colors.accent500,
      fontSize: 36,
      fontWeight: 'bold',
   },
});
