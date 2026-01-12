import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProfileScreen() {
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Profile Screen</Text>
         <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      </View>
   );
}

export default ProfileScreen;
