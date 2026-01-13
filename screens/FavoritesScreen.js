import { StyleSheet, View, Text, FlatList } from "react-native";
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from "react-redux";

const FavoritesScreen = () => {

   const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

   const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

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
