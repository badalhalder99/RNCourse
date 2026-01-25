import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';

const Stack = createNativeStackNavigator();

function AuthStack({ onAuthenticate }) {
   return (
      <Stack.Navigator screenOptions={{
         headerStyle: { backgroundColor: Colors.primary500 },
         headerTintColor: 'white',
         contentStyle: { backgroundColor: Colors.primary100 },
      }}>
         <Stack.Screen name="Login">
            {(props) => (
               <LoginScreen {...props} onAuthenticate={onAuthenticate} />
            )}
         </Stack.Screen>

         <Stack.Screen name="Signup">
            {(props) => (
               <SignupScreen {...props} onAuthenticate={onAuthenticate} />
            )}
         </Stack.Screen>
      </Stack.Navigator>
   );
}

function AuthenticatedStack({ onLogout }) {
   return (
      <Stack.Navigator screenOptions={{
         headerStyle: { backgroundColor: Colors.primary500 },
         headerTintColor: 'white',
         contentStyle: { backgroundColor: Colors.primary100 },
      }}>
         <Stack.Screen name="Welcome" options={{
            headerRight: () => (
               <Pressable onPress={onLogout}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                     Logout
                  </Text>
               </Pressable>
            ),
         }}>
            {(props) => <WelcomeScreen {...props} />}
         </Stack.Screen>
      </Stack.Navigator>
   );
}

const App = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const authenticateHandler = () => {
      setIsAuthenticated(true);
   }

   const logoutHandler = () => {
      setIsAuthenticated(false);
   }

   return (
      <>
         <StatusBar style="light" />
         <NavigationContainer>
            {isAuthenticated ? (
               <AuthenticatedStack onLogout={logoutHandler} />
            ) : (
               <AuthStack onAuthenticate={authenticateHandler} />
            )}
         </NavigationContainer>
      </>
   );
}

export default App;
