import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   buttonText: {
    color: 'black',
    textAlign: 'center',
   },
   buttonInnerContainer: {
      backgroundColor: "#ddd",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20
   },
   buttonOuterContainer: {
      borderRadius: 50,
      marginBottom: 5,
      overflow: "hidden"
   },
   pressed: {
      opacity: 0.75
   },
})
