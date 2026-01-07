import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../css/color/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function Title({ children }) {
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
         <Text style={styles.title}>{children}</Text>;
      </SafeAreaView>
   )
}

export default Title;

const styles = StyleSheet.create({
   title: {
      fontSize: 22,
      fontFamily: "Poppins_Medium",
      color: Colors.black,
      textAlign: 'center',
      padding: 12,
      maxWidth: '80%',
      alignSelf: 'center',
      // borderWidth: Platform.OS === "ios" ? 0 : 2,
      // borderWidth: Platform.select({ ios: 0, android: 5 }),
      borderWidth: 4,
      borderColor: Colors.success,
      borderRadius: 12
   },
});
