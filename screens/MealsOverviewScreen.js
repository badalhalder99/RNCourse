import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = () => {
   const navigation = useNavigation()
   const route = useRoute()

   const { categoryId, categoryTitle } = route.params || {}

   useLayoutEffect(() => {
      navigation.setOptions({
         title: categoryTitle
      })
   }, [navigation, categoryTitle])

   const displayMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(categoryId))

   return <MealsList items={displayMeals}/>
}

export default MealsOverviewScreen;

