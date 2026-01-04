import { useState } from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import { styles } from "./css/AppStyles";
import Colors from "./css/color/Colors";

const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
  };

  let screen;

  if (!userNumber) {
    screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  } else if (gameIsOver) {
    screen = <GameOverScreen onRestart={restartGameHandler} />;
  } else {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  return (
    <LinearGradient style={styles.wrap} colors={[Colors.primary, Colors.secondary]}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.5 }}
        style={styles.imageStyle}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;
