// import PlacesList from '../components/Places/PlacesList';
// import { useEffect, useState } from 'react';
// import { useIsFocused } from '@react-navigation/native';

// const AllPlaces = ({ route }) => {
//    const [loadedPlaces, setLoadedPlaces] = useState([]);

//    const isFocused = useIsFocused();

//    useEffect(() => {
//       if (isFocused && route.params) {
//          setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
//       }
//    }, [isFocused, route]);

//    return <PlacesList places={loadedPlaces} />;
// }

// export default AllPlaces;

import { useContext, useEffect } from "react";
import PlacesList from "../components/Places/PlacesList";
import { PlacesContext } from "../store/places-context";
import { fetchPlaces } from "../util/http";
import { Place } from "../models/place";

const AllPlaces = () => {
   const { places, setPlaces } = useContext(PlacesContext);

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

   return <PlacesList places={places} />;
};

export default AllPlaces;
