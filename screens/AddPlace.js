import { useContext } from 'react';
import PlaceForm from '../components/Places/PlaceForm';
import { addPlace } from '../util/http';
import { PlacesContext } from '../store/places-context';
import { Place } from '../models/place';

const AddPlace = ({ navigation }) => {
   const { addPlace: addPlaceContext } = useContext(PlacesContext);

   async function createPlaceHandler(placeData) {
      const data = await addPlace(placeData);

      const newPlace = new Place(
         data._id,
         data.title,
         data.imageUri,
         data.location
      );

      addPlaceContext(newPlace);
      navigation.navigate("AllPlaces");
   }

   return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
