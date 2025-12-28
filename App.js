// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome ddd app World!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react'
import { StyleSheet, Text, View,Button, TextInput } from 'react-native'

const App = () => {
   return (
      <View style={css.wrapper}>
         <Text style={css.text}>Hello, App!!!</Text>
         <Text style={css.text}>Welcome to Mobile App!</Text>
         <Button title="Go Dashboard" />
      </View>
   )
}

export default App;

const css = StyleSheet.create({
   wrapper: {
      backgroundColor: "#0cba20ff",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      color: "blue",
      fontSize: 20
   }
})










