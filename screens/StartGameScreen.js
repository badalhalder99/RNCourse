import { TextInput, View, Text } from "react-native";
import { styles } from "../css/StartGameScreenStyles";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {

   return (
      <View style={styles.wrap}>
         <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
         />
         <View style={styles.buttonWrap}>
            <View style={{flex: 1, marginRight: 5}}>
               <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={{flex: 1, marginLeft: 5}}>
               <PrimaryButton>Confirm</PrimaryButton>
            </View>
         </View>
      </View>
   )
}

export default StartGameScreen;

