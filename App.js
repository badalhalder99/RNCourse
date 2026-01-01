import { View, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { styles } from "./css/AppStyles";

const App = () => {

   return (
      <View style={styles.wrap}>
         <StartGameScreen />
      </View>
   )
}

export default App;

