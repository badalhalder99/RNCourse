import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
         <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
      </View>
   );
}

export default HomeScreen;
