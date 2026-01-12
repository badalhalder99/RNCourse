import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AccountScreen from './screens/AccountScreen';
import SettingScreen from './screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {

   return (
      <Tab.Navigator>
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               title: "Home",
               tabBarLabel: "Dashboard",
               tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
            }}
         />
         <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
               title: "View Profile",
               tabBarLabel: "Profile",
               tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
            }}
         />
         <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
               tabBarIcon: ({color, size}) => <Ionicons name='basket-outline' color={color} size={size} />
            }}
         />
         <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
               tabBarIcon: ({color, size}) => <Ionicons name='settings-outline' color={color} size={size} />
            }}
         />
      </Tab.Navigator>
   );
}

const App = () => {
   return (
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
   );
}

export default App;
