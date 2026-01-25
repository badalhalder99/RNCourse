import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Welcome!</Text>
         <Text>You are logged in successfully.</Text>
      </View>
   );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24
   },
   title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 16
   }
});
