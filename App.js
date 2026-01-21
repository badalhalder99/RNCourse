import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import IconButton from './components/ui/IconButton'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./css/color/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ExpensesContextProvider from './store/store';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
   return (
      <BottomTabs.Navigator screenOptions={({ navigation }) => ({
         headerStyle: {
            backgroundColor: Colors.accent
         },
         headerTintColor: Colors.white,
         tabBarStyle: {
            backgroundColor: Colors.accent
         },
         tabBarActiveTintColor: Colors.white,
         headerRight: ({tintColor}) => (
            <IconButton
               icon="add"
               size={24}
               color={tintColor}
               onPress={() => {
                  navigation.navigate("ManageExpense")
               }}
            />
         )
      })}>
         <BottomTabs.Screen
            name="AllExpenses"
            component={AllExpenses}
            options={{
               title: "All Expenses",
               tabBarLabel: "All Expenses",
               tabBarIcon: ({size, color}) => <Ionicons name="calendar" size={size} color={color} />
            }}
         />
         <BottomTabs.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
               title: "Recent Expenses",
               tabBarLabel: "Recent Expenses",
               tabBarIcon: ({size, color}) => <Ionicons name="hourglass" size={size} color={color} />
            }}
         />
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
         <StatusBar barStyle="light-content" hidden={false} />
           <ExpensesContextProvider>
               <NavigationContainer>
                  <Stack.Navigator initialRouteName="ExpensesOverview">
                     <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{
                           headerShown: false,
                        }}
                     />

                     <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpense}
                        options={{
                           title: "Manage Expense",
                           presentation: 'modal'
                        }}
                     />
                  </Stack.Navigator>
               </NavigationContainer>
            </ExpensesContextProvider>
      </SafeAreaProvider>
   );
};

export default App;
