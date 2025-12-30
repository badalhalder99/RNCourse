import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView, Button } from 'react-native';
import Goal from './components/Goal';
import GoalInput from './components/GoalInput';

const  App = () => {
   const [goals, setGoals] = useState([])
   const [modalIsVisible, setModalIsVisible] = useState(false)

   const submit = (text, setText) => {
      //Handle corner case:
      if (!text || text.trim().length === 0) alert("Empty input value!")

      setGoals(prevGoals => [...prevGoals, {text: text, id: Math.random().toString() }])
      setText("")
      setModalIsVisible(false)
   }

   const deleteGoalItem = (id) => {
      setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
      console.log("Item is deleted!")
   }

   const showModal = () => {
      setModalIsVisible(true)
   }

   const closeModal = () => {
      setModalIsVisible(false)
   }

   return (
      <View style={styles.appContainer}>
         <Button onPress={showModal} title="Add new Goal" color="#2d09ccff" />

         {modalIsVisible && <GoalInput submit={submit} modalVisible={modalIsVisible} modalHidden={closeModal} />}

         {goals.length === 0 ? (
            <View style={styles.goalsContainer}>
               <Text style={styles.noGoalText}>There is no Goal!</Text>
            </View>
         ) : (
            <View style={styles.goalsContainer}>
               <FlatList
                  data={goals}
                  keyExtractor={(item, index) => item.id}
                  renderItem={(itemData) => {
                     return <Goal itemData={itemData} deleteGoalItem={deleteGoalItem}/>
                  }}
               />
               {/* <ScrollView showsVerticalScrollIndicator={false}>
                  {goals.map((goal, index) => (
                     <View key={index} style={styles.wrap}>
                        <Text style={styles.listText}>{goal}</Text>
                     </View>
                  ))}
               </ScrollView> */}
            </View>
         )}
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
   goalsContainer: {
      flex: 5
   },
   noGoalText: {
      textAlign: 'center',
      marginTop: 20
   }
});

