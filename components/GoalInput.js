import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

const GoalInput = ({submit, modalVisible, modalHidden}) => {
   const [text, setText] = useState("")

   const inputHandler = (text) => {
      setText(text)
   }

   console.log("User input is", text)

   return (
      <Modal visible={modalVisible} animationType='slide'>
         <View style={styles.inputContainer}>
            <Image
               style={styles.image}
               source={require("../assets/icon.png")}
            />

            <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Your course goal!" value={text} onChangeText={inputHandler} />

            <View style={styles.buttonContainer}>
               <View style={{marginRight: 5}}>
                  <Button title="Add Goal" onPress={() => submit(text, setText)} />
               </View>
               <View style={{marginLeft: 5}}>
                   <Button title="Cancel" onPress={modalHidden} color="#f31282" />
               </View>
            </View>
         </View>
      </Modal>
   )
}

export default GoalInput;

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#311b6b'
   },
   buttonContainer: {
      flexDirection: "row"
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#fff',
      width: "90%",
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginBottom: 12,
      borderRadius: 9,
      height: 40,
      color: "#fff"
   },
   image: {
      width: 100,
      height: 100,
      borderRadius: 100,
      marginBottom: 20
   }
})
