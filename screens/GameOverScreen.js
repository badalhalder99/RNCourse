import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../css/color/Colors";

function GameOverScreen({ onRestart }) {
   const { width, height } = useWindowDimensions();

   const isLandscape = width > height;

   const imageSize = width < 350 ? 150 : 200;

   return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         <View style={styles.screen}>
            <Text style={styles.text}>Game is over!</Text>

            <Image
               source={require("../assets/icon.png")}
               style={[
               styles.image,
               {
                  width: imageSize,
                  height: imageSize,
                  borderRadius: imageSize / 2,
               },
               ]}
               resizeMode="contain"
            />

            <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
         </View>
      </ScrollView>
   );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    marginBottom: 16,
    borderWidth: 4,
    borderColor: Colors.success,
  },
});
