import { StyleSheet } from "react-native";
import Colors from "./color/Colors";

export const styles = StyleSheet.create({
   wrap: {
      margin: 15,
      backgroundColor: Colors.secondary,
      padding: 16,
      borderRadius: 12,

      // Box Shadow For Android
      elevation: 10,
      // Box Shadow For IOS
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.30,
      shadowRadius: 6,
   },
   textInput: {
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: 50,
      paddingLeft: 15,
      paddingHorizontal: 15,
      paddingVertical: 10,
      height: 45,
      marginBottom: 10,
      textAlignVertical: 'center',
   },
   buttonWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   ddd3: {

   },
   ddd: {},
})
