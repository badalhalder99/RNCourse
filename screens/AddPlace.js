// import PlaceForm from '../components/Places/PlaceForm';

// const AddPlace = ({ navigation }) => {

//    const createPlaceHandler = (place) => {
//       navigation.navigate('AllPlaces', {
//          place: place
//       });
//    }

//    return <PlaceForm onCreatePlace={createPlaceHandler} />;
// }

// export default AddPlace;

import { useContext } from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { addPlace } from "../util/http";
import { PlacesContext } from "../store/places-context";
import { Place } from "../models/place";

const AddPlace = ({ navigation }) => {
   const { addPlace: addPlaceContext } = useContext(PlacesContext);

   async function createPlaceHandler(place) {
      const data = await addPlace({
         title: place.title,
         imageUri: place.imageUri,
         location: place.location,
      });

      const newPlace = new Place(data._id, data.title, data.imageUri, data.location);
      addPlaceContext(newPlace);
      navigation.goBack();
   }

   return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
