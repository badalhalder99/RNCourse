import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Colors } from '../constants/styles';
import { fetchPlaceDetails } from '../util/http';
import OutlineButton from '../components/ui/OutlinedButton'
import { deletePlace } from '../util/http';
import { useNavigation } from '@react-navigation/native';

const PlaceDetails = ({ route }) => {
   const [place, setPlace] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const navigation = useNavigation();

   const placeId = route.params.id;

   async function deleteHandler() {
      Alert.alert(
         "Delete Place",
         "Are you sure you want to delete this place?",
         [
            { text: "Cancel" },
            {
               text: "Delete",
               style: "destructive",
               onPress: async () => {
                  try {
                     await deletePlace(placeId);

                     navigation.navigate('AllPlaces', {
                        deletedPlaceId: placeId,   // 👈 pass deleted id back
                     });
                  } catch (error) {
                     console.log('Error deleting place:', error);
                  }
               },
            },
         ]
      );
   }

   useEffect(() => {
      async function loadPlaceDetails() {
         try {
            const data = await fetchPlaceDetails(placeId);
            setPlace(data);
         } catch (error) {
            console.log('Error fetching place details:', error);
         } finally {
            setIsLoading(false);
         }
      }

      loadPlaceDetails();
   }, [placeId]);

   if (isLoading) {
      return (
         <View style={styles.centered}>
            <ActivityIndicator size="large" color={Colors.primary500} />
            <Text>Loading place details...</Text>
         </View>
      );
   }

   if (!place) {
      return (
         <View style={styles.centered}>
            <Text>Place not found.</Text>
         </View>
      );
   }

   return (
      <View style={styles.container}>
         <Image style={styles.image} source={{ uri: place.imageUri }} />
         <View style={styles.details}>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.coord}>Latitude: {place.location.lat}</Text>
            <Text style={styles.coord}>Longitude: {place.location.lng}</Text>
         </View>
         <OutlineButton icon="trash" onPress={deleteHandler}>Delete place</OutlineButton>
      </View>
   );
};

export default PlaceDetails;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.primary50,
   },
   centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      width: '100%',
      height: 250,
   },
   details: {
      padding: 16,
   },
   title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: Colors.gray700,
      marginBottom: 12,
   },
   coord: {
      fontSize: 14,
      color: Colors.gray700,
      marginBottom: 4,
   },
});
