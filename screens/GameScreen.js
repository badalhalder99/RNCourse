import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

// Generate random number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
}

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomBetween(1, 100, userNumber)
  );
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

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
    if ((direction === "lower" && currentGuess < userNumber) ||
        (direction === "greater" && currentGuess > userNumber)) {
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

    // Immediately check if next guess equals user number
    if (nextGuess === userNumber) {
      setButtonsDisabled(true); // disable buttons
      onGameOver();             // trigger GameOverScreen
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")} disabled={buttonsDisabled}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")} disabled={buttonsDisabled}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
