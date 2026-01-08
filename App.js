import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { styles } from "./css/AppStyles";
import Colors from "./css/color/Colors";
import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator()

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
      <>
         <StatusBar barStyle="light-content"/>
         <LinearGradient style={styles.wrap} colors={[Colors.primary, Colors.secondary]}>
            <NavigationContainer>
               <Stack.Navigator>
                  {/* Normaly you call the component like <CategoriesScreen /> But here only keep component name without jsx in the component props */}
                  <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
               </Stack.Navigator>
            </NavigationContainer>
         </LinearGradient>
      </>
   );
};

export default App;
