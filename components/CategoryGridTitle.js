import { StyleSheet, View, Text, Pressable, Dimensions, Platform  } from "react-native";

const CategoryGridTitle = ({title, color, onPress}) => {

   return (
      <View style={[styles.gridItem, { backgroundColor: color}]}>
         <Pressable
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            android_ripple={{ color: "#ccc" }}
            onPress={onPress}
         >
            <View style={styles.innerContainer}>
               <Text style={{fontFamily: "Poppins_Medium"}}>{title}</Text>
               <Text>{color}</Text>
            </View>
         </Pressable>
      </View>
   )
}

export default CategoryGridTitle;

const screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
   gridItem: {
      flex: 1,
      margin: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 16,
      height: 150,
      width: screenWidth <= 600 ? screenWidth / 2 : null,
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible"
   },
   button: {
      flex: 1
   },
   buttonPressed: {
      opacity: 0.5
   },
   innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center"
   },
})

