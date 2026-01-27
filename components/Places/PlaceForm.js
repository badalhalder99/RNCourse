import { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { Colors } from '../../constants/styles';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';

const PlaceForm = () => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [pickedImage, setPickedImage] = useState();
   const [pickedLocation, setPickedLocation] = useState();


   function changeTitleHandler(enteredText) {
      setEnteredTitle(enteredText);
   }

   function pickImageHandler(imageUri) {
      setPickedImage(imageUri);
   }

   const pickLocationHandler = useCallback((location) => {
      setPickedLocation(location);
   })


   function saveplaceHandler() {
      if (!enteredTitle || !pickedImage || !pickedLocation) {
         Alert.alert('Invalid input', 'Please fill all fields.');
         return;
      }

      const placeData = {
         title: enteredTitle,
         imageUri: pickedImage,
         location: pickedLocation,
      };

      console.log(placeData);
   }


   return (
      <ScrollView style={styles.form}>
         <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
               style={styles.input}
               onChangeText={changeTitleHandler}
               value={enteredTitle}
            />
         </View>
         <ImagePicker onTakeImage={pickImageHandler} />
         <LocationPicker onPickLocation={pickLocationHandler} />
         <Button onPress={saveplaceHandler}>Add place</Button>
      </ScrollView>
   );
}

export default PlaceForm;

const styles = StyleSheet.create({
   form: {
      flex: 1,
      padding: 24,
   },
   label: {
      fontWeight: 'bold',
      marginBottom: 4,
      color: Colors.primary500,
   },
   input: {
      marginVertical: 8,
      paddingHorizontal: 4,
      paddingVertical: 8,
      fontSize: 16,
      borderBottomColor: Colors.primary700,
      borderBottomWidth: 2,
      backgroundColor: Colors.primary100,
   },
});
