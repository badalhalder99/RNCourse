import { useState } from 'react';
import { View, Text,TextInput,Button,StyleSheet,Alert,KeyboardAvoidingView,Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BACKEND_URL = 'http://192.168.0.115:3005/api/auth/login';

const LoginScreen = ({ onAuthenticate }) => {
   const navigation = useNavigation();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function loginHandler() {
      if (!email.includes('@') || password.length < 6) {
         Alert.alert('Invalid input', 'Enter valid email and password');
         return;
      }

      try {
         const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: email,
               password: password,
            }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.message || 'Login failed');
         }

         // ✅ login success
         onAuthenticate(data.token);
      } catch (error) {
         Alert.alert('Login failed', error.message);
      }
   }

   return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <View>
            <Text style={styles.title}>Login</Text>

            <TextInput
               style={styles.input}
               placeholder="Email"
               value={email}
               onChangeText={setEmail}
               autoCapitalize="none"
               keyboardType="email-address"
            />

            <TextInput
               style={styles.input}
               placeholder="Password"
               value={password}
               onChangeText={setPassword}
               secureTextEntry
            />

            <Button title="Login" onPress={loginHandler} />

            <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
               Create new account
            </Text>
         </View>
      </KeyboardAvoidingView>
   );
};

export default LoginScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
   },
   title: {
      fontSize: 28,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
   },
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      padding: 10,
      borderRadius: 5,
   },
   link: {
      marginTop: 16,
      textAlign: 'center',
      color: 'blue',
   },
});
