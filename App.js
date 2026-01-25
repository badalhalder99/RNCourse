import { useState, useEffect } from 'react';
import { Pressable, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            {(props) => <LoginScreen {...props} onAuthenticate={onAuthenticate} />}
         </Stack.Screen>
         <Stack.Screen name="Signup">
            {(props) => <SignupScreen {...props} onAuthenticate={onAuthenticate} />}
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
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
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
   const [authToken, setAuthToken] = useState(null);

   // Load token from AsyncStorage on app start
   useEffect(() => {
      const loadToken = async () => {
         try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
               setAuthToken(storedToken);
               setIsAuthenticated(true);
            }
         } catch (error) {
            console.log('Failed to load token', error);
         }
      };
      loadToken();
   }, []);

   const authenticateHandler = async (token) => {
      try {
         await AsyncStorage.setItem('token', token); // save token persistently
         setAuthToken(token);
         setIsAuthenticated(true);
      } catch (error) {
         Alert.alert('Error', 'Failed to save token');
      }
   }

   const logoutHandler = async () => {
      try {
         await AsyncStorage.removeItem('token'); // remove token
         setAuthToken(null);
         setIsAuthenticated(false);
      } catch (error) {
         Alert.alert('Error', 'Failed to logout');
      }
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
