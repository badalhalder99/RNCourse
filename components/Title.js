import { Text, StyleSheet } from 'react-native';
import Colors from '../css/color/Colors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
   title: {
      fontSize: 22,
      fontFamily: "Poppins_Medium",
      color: Colors.black,
      textAlign: 'center',
      padding: 12,
   },
});