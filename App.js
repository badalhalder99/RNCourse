import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useFonts } from "expo-font";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { styles } from "./css/AppStyles";
import Colors from "./css/color/Colors";

const App = () => {

   //Font code start:
   const [fontsLoaded] = useFonts({
      Poppins_Regular: Poppins_400Regular,
      Poppins_Medium: Poppins_500Medium,
      Poppins_Bold: Poppins_700Bold,
   });

   if (!fontsLoaded) {
      return null; // Prevent rendering before fonts load
   }
   //Font code end:

   return (
      <SafeAreaProvider>
         <StatusBar barStyle="light-content" animated={true} backgroundColor={Colors.accent}/>
         <LinearGradient style={styles.wrap} colors={[Colors.primary, Colors.secondary]}>
            <Text>Welcome to meal app!</Text>
         </LinearGradient>
      </SafeAreaProvider>
   );
};

export default App;
