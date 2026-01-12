import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Setting Screen</Text>
         <Button title='Go to Profile' onPress={() => navigation.navigate('Settings')} />
      </View>
   );
}

export default SettingScreen;
