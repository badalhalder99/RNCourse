import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './constants/styles';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <>
         <StatusBar style='dark' />
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               headerStyle: {
                  backgroundColor: Colors.primary200
               },
               headerTintColor: Colors.gray700,
               contentStyle: {
                  backgroundColor: Colors.primary50
               }
            }}>
               <Stack.Screen
                  name="AllPlaces"
                  component={AllPlaces}
                  options={({ navigation }) => ({
                     title: "Your Favorite Places!",
                     headerRight: ({ tintColor }) => (
                        <IconButton
                           icon="add"
                           size={22}
                           color={tintColor}
                           onPress={() => navigation.navigate("AddPlace")}
                        />
                     )
                  })}
               />

               <Stack.Screen
                  name="AddPlace"
                  component={AddPlace}
                  options={{
                     title: "Add a new place"
                  }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}

export default App;
