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
