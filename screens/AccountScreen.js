import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Account Screen</Text>
         <Button title='Go to Profile' onPress={() => navigation.navigate('Account')} />
      </View>
   );
}

export default AccountScreen;
