import { StyleSheet, View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = () => {

   const route = useRoute()
   const { categoryId } = route.params || {}

   const displayMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(categoryId))

   const renderMealItem = (itemData) => {
      return <MealItem title={itemData.item.title}/>
   }

   return (
      <View style={styles.wrap}>
         <FlatList
            data={displayMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
         />
      </View>
   )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
   wrap: {
      margin: 5,
   }
})
