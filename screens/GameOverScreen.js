import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ onRestart }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game is over!</Text>
      <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
