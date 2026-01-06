import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList, ScrollView } from 'react-native';

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../css/color/Colors";

// Generate random number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
}

const GameScreen = ({ userNumber, onGameOver }) => {
   const initialGuess = generateRandomBetween(1, 100, userNumber);
   const [currentGuess, setCurrentGuess] = useState(initialGuess);
   const [minBoundary, setMinBoundary] = useState(1);
   const [maxBoundary, setMaxBoundary] = useState(100);
   const [buttonsDisabled, setButtonsDisabled] = useState(false);

   const [guessRounds, setGuessRounds] = useState([initialGuess]);

   // Immediately check if the first guess is correct
   useEffect(() => {
      if (currentGuess === userNumber) {
      setButtonsDisabled(true);
      onGameOver();
      }
   }, []);

   const nextGuessHandler = (direction) => {
      if (buttonsDisabled) return; // Stop button presses

      // Prevent user from lying
      if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
         Alert.alert("Don't lie!", "You know that this is wrong...", [
            { text: "Sorry!", style: "cancel" },
         ]);
         return;
      }

      // Update boundaries
      let newMin = minBoundary;
      let newMax = maxBoundary;

      if (direction === "lower") newMax = currentGuess - 1;
      else newMin = currentGuess + 1;

      setMinBoundary(newMin);
      setMaxBoundary(newMax);

      // Generate next guess
      const nextGuess = newMin > newMax
      ? userNumber
      : generateRandomBetween(newMin, newMax, currentGuess);

      setCurrentGuess(nextGuess);
      setGuessRounds((prevGuessRounds) => [nextGuess, ...prevGuessRounds]);

      // Immediately check if next guess equals user number
      if (nextGuess === userNumber) {
         setButtonsDisabled(true); // disable buttons
         onGameOver();             // trigger GameOverScreen
      }
   };

   return (
      <ScrollView style={{flex: 1}}>
         <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
               <Text style={{textAlign: "center"}}>Higher or lower?</Text>
               <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                  <PrimaryButton onPress={() => nextGuessHandler("lower")} disabled={buttonsDisabled}>
                     <Ionicons name="remove" size={20} color={Colors.black}/>
                  </PrimaryButton>
                  <PrimaryButton onPress={() => nextGuessHandler("greater")} disabled={buttonsDisabled}>
                     <Ionicons name="add" size={20} color={Colors.black}/>
                  </PrimaryButton>
               </View>
            </View>
            <View style={styles.listContainer}>
               {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
               <FlatList
                  data={guessRounds}
                  renderItem={(itemData) => (
                     <View style={styles.listItem}>
                        <Text style={styles.itemText}>#: {guessRounds.length - itemData.index}</Text>
                        <Text style={styles.itemText}>Opponent's Guess: {itemData.item}</Text>
                     </View>
                  )}
                  keyExtractor={(item) => item}
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default GameScreen;

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 24,
   },
   listContainer: {
      flex: 1,
      padding: 16
   },
   listItem: {
      borderColor: Colors.primary800,
      borderWidth: 1,
      borderRadius: 40,
      padding: 12,
      marginVertical: 8,
      backgroundColor: Colors.accent500,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
   },
   itemText: {
      fontFamily: 'Poppins_Medium'
   }
});


