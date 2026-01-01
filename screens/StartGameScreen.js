import { TextInput, View, Text } from "react-native";
import { styles } from "../css/StartGameScreenStyles";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

   return (
      <View style={styles.wrap}>
         <TextInput placeholder="Write your number!"  style={styles.textInput}/>
         <PrimaryButton>Reset</PrimaryButton>
         <PrimaryButton>Confirm</PrimaryButton>
      </View>
   )
}

export default StartGameScreen;

