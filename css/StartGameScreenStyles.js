import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   wrap: {
      margin: 5,
      backgroundColor: "#b6de13ff",
      padding: 16,
      borderRadius: 12,

      // Box Shadow For Android
      elevation: 10,
      // Box Shadow For IOS
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.30,
      shadowRadius: 6,
   },
   textInput: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 50,
      paddingLeft: 15,
      marginBottom: 10,
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
