import { useContext, useEffect } from "react";
import PlacesList from "../components/Places/PlacesList";
import { PlacesContext } from "../store/places-context";
import { fetchPlaces } from "../util/http";
import { Place } from "../models/place";

const AllPlaces = ({ route }) => {
   const { places, setPlaces } = useContext(PlacesContext);

   // Load places from backend
   useEffect(() => {
      async function loadPlaces() {
         const placesData = await fetchPlaces();
         const loaded = placesData.map(
            (p) => new Place(p._id, p.title, p.imageUri, p.location)
         );
         setPlaces(loaded);
      }

      loadPlaces();
   }, []);

   // 🔥 Remove deleted place from context when coming back
   useEffect(() => {
      if (route.params?.deletedPlaceId) {
         setPlaces((currentPlaces) =>
            currentPlaces.filter(
               (place) => place.id !== route.params.deletedPlaceId
            )
         );
      }
   }, [route.params?.deletedPlaceId]);

   return <PlacesList places={places} />;
};

export default AllPlaces;
