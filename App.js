import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

const  App = () => {
   const [text, setText] = useState("")
   const [goals, setGoals] = useState([])

   const inputHandler = (text) => {
      setText(text)
   }

   const submit = () => {
      if (!text || text.trim().length === 0) alert("Empty input value!")
      setGoals(prevGoals => [...prevGoals, text])
      setText("")
   }

   return (
      <View style={styles.appContainer}>
         <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your course goal!" value={text} onChangeText={inputHandler} />
            <Button title="Add Goal" onPress={submit} />
         </View>

         <View style={styles.goalsContainer}>
            {/* <FlatList
               data={goals}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({item}) => (
                  <View>
                     <Text>{item}</Text>
                  </View>
               )}
            /> */}

            {goals.map((goal, index) => (
               <View key={goal +1} style={styles.wrap}>
                  <Text style={styles.listText}>{goal} {index + 1}</Text>
               </View>
            ))}
         </View>
      </View>
   );
}

export default App;

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
   },
   inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: "70%",
      padding: 8
   },
   goalsContainer: {
      flex: 5
   },
   wrap: {
      padding: 12,
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 9
   },
   listText: {
      color: "#fff"
   }
});

