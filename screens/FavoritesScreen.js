import { StyleSheet, View, Text, FlatList } from "react-native";
import { useContext } from 'react';
import MealsList from '../components/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = () => {
   const favoriteMealsContext = useContext(FavoritesContext)

   const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id))

   if (favoriteMeals.length === 0) {
      return (
         <View style={styles.wrap}>
            <Text style={styles.text}>You have no favorite meals yeat!</Text>
         </View>
      )
   }

   return <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
   wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   }
})
