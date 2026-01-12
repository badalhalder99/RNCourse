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
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

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
      <SafeAreaProvider>
         <StatusBar barStyle="light-content"/>
         <LinearGradient style={styles.wrap} colors={[Colors.primary, Colors.secondary]}>
            <NavigationContainer>
               <Stack.Navigator
                  initialRouteName="CategoriesScreen"
                  screenOptions={{
                     headerStyle: { backgroundColor: '#ddd' },
                     headerTintColor: 'white',
                     headerTitleStyle: { fontWeight: 'bold' },
                     contentStyle: { backgroundColor: '#3f2f25' },
                  }}
               >
                  <Stack.Screen
                     name="CategoriesScreen"
                     component={CategoriesScreen}
                     options={{ title: "All Categories" }}
                  />

                  <Stack.Screen
                     name="MealsOverviewScreen"
                     component={MealsOverviewScreen}
                  />

                  <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />

               </Stack.Navigator>
            </NavigationContainer>
         </LinearGradient>
      </SafeAreaProvider>
   );
};

export default App;


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

const App = () => {

   return (
      <NavigationContainer>
         <Drawer.Navigator screenOptions={{
            headerStyle: {
               backgroundColor: '#8c8484',
            },
            headerTintColor: "#000",
            drawerActiveBackgroundColor: '#33992c',
            drawerActiveTintColor: "#210868",
            drawerStyle: {
               backgroundColor: '#ddd'
            }
         }}>
            <Drawer.Screen
               name="Welcome"
               component={WelcomeScreen}
               options={{
                  drawerLabel: 'Welcome screen',
                  drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={20}/>
               }}
            />

            <Drawer.Screen
               name="User"
               component={UserScreen}
               options={{
                  drawerLabel: 'User screen',
                  drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={20}/>
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}

export default App;


// import * as React from 'react';
// import { Text, View, Linking } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Help" onPress={() => props.navigation.navigate('Settings')}/>
//       <DrawerItem label="Help" onPress={() => Linking.openURL('https://mywebsite.com/help')}/>
//     </DrawerContentScrollView>
//   );
// }


// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }
