import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Title = ({children}) => {

   return (
      <SafeAreaView style={styles.wrap}>
         <View>
            <Text style={styles.text}>{children}</Text>
         </View>
      </SafeAreaView>
   )
}

export default Title;

const styles = StyleSheet.create({
   text: {
      fontSize: 20
   }
})
