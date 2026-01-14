import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { styles } from "./css/AppStyles";
import Colors from "./css/color/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
   return (
      <BottomTabs.Navigator>
         <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}/>
         <BottomTabs.Screen name="AllExpenses" component={AllExpenses}/>
      </BottomTabs.Navigator>
   )
}

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
         <StatusBar barStyle="light-content" hidden={true} />

         <LinearGradient style={styles.wrap} colors={[Colors.primary, Colors.secondary]}>
            <NavigationContainer>
               <Stack.Navigator initialRouteName="ExpensesOverview">
                  <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
                  <Stack.Screen name="ManageExpense" component={ManageExpense}/>
               </Stack.Navigator>
            </NavigationContainer>
         </LinearGradient>
      </SafeAreaProvider>
   );
};

export default App;
