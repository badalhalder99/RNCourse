import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../css/color/Colors";

function GameOverScreen({ onRestart }) {
   return (
      <View style={styles.screen}>
         <Text style={styles.text}>Game is over!</Text>
         <Image
            style={styles.image}
            source={require("../assets/icon.png")}
            resizeMode="cover"
         />
         <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
      </View>
   );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

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
   image: {
      width: deviceWidth < 350 ? 150 : 200,
      height: deviceWidth < 350 ? 150 : 200,
      marginBottom: 16,
      borderWidth: 4,
      borderRadius: deviceWidth < 350 ? 150 : 200,
      borderColor:Colors.success,
   }
});
