import { createContext, useState } from "react";

export const PlacesContext = createContext({
   places: [],
   addPlace: () => {},
   setPlaces: () => {},
   removePlace: () => {},
});

function PlacesContextProvider({ children }) {
   const [places, setPlacesState] = useState([]);

   function addPlace(place) {
      setPlacesState((prev) => [place, ...prev]);
   }

   function setPlaces(places) {
      setPlacesState(places);
   }

   function removePlace(id) {
      setPlacesState((prev) => prev.filter((p) => p.id !== id));
   }

   return (
      <PlacesContext.Provider value={{ places, addPlace, setPlaces, removePlace }}>
      {children}
      </PlacesContext.Provider>
   );
}

export default PlacesContextProvider;
