import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { styles } from "./css/AppStyles";
import Colors from "./css/color/Colors";
import Title from "./components/Title";

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
            <Title>Welcome to meal app!</Title>
         </LinearGradient>
      </SafeAreaProvider>
   );
};

export default App;
