import { useState } from "react";
import { TextInput, View, Text, Alert } from "react-native";
import { styles } from "../css/StartGameScreenStyles";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({onPickedNumber}) => {
   const [number, setNumber] = useState("")

   const handleNumber = (number) => {
      setNumber(number)
   }

   const handleReset = () => {
      setNumber("")
   }

   const handleConfirm = () => {
      const chooseNumber = parseInt(number)

      if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
         Alert.alert(
            "Invalid input",
            "Number has to be number between 1 to 99",
            [{text: "Okay", style: 'destructive', onPress: handleReset}]
         )
         return;
      }

      onPickedNumber(number)
      console.log('valid number')
   }

   return (
      <View style={styles.wrap}>
         <TextInput
            value={number}
            onChangeText={handleNumber}
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
         />
         <View style={styles.buttonWrap}>
            <View style={{flex: 1, marginRight: 5}}>
               <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            </View>
            <View style={{flex: 1, marginLeft: 5}}>
               <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
         </View>
      </View>
   )
}

export default StartGameScreen;

