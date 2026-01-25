import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SIGNUP_URL = 'http://192.168.0.115:3005/api/auth/signup';

const SignupScreen = () => {
   const navigation = useNavigation();

   const [email, setEmail] = useState('');
   const [confirmEmail, setConfirmEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   async function signupHandler() {
      if (!email.includes('@')) {
         Alert.alert('Invalid Email', 'Please enter a valid email');
         return;
      }

      if (email !== confirmEmail) {
         Alert.alert('Email mismatch', 'Emails do not match');
         return;
      }

      if (password.length < 6) {
         Alert.alert('Weak password', 'Password must be at least 6 characters');
         return;
      }

      if (password !== confirmPassword) {
         Alert.alert('Password mismatch', 'Passwords do not match');
         return;
      }

      try {
         const response = await fetch(SIGNUP_URL, {
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
            throw new Error(data.message || 'Signup failed');
         }

         Alert.alert(
            'Signup Successful',
            'Please login with your email and password',
            [
               {
               text: 'OK',
               onPress: () => navigation.replace('Login'),
               },
            ]
         );
      } catch (error) {
         Alert.alert('Error', error.message);
      }
   }

   return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <View>
            <Text style={styles.title}>Create Account</Text>

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
               placeholder="Confirm Email"
               value={confirmEmail}
               onChangeText={setConfirmEmail}
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

            <TextInput
               style={styles.input}
               placeholder="Confirm Password"
               value={confirmPassword}
               onChangeText={setConfirmPassword}
               secureTextEntry
            />

            <Button title="Sign Up" onPress={signupHandler} />

            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
               Already have an account? Login
            </Text>
         </View>
      </KeyboardAvoidingView>
   );
};

export default SignupScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
   },
   title: {
      fontSize: 26,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
   },
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 12,
      borderRadius: 5,
   },
   link: {
      marginTop: 16,
      textAlign: 'center',
      color: 'blue',
   },
});
