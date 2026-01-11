import { StyleSheet, View, Text, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

   const renderMealItem = (itemData) => {
      const item = itemData.item

      const mealItemProps = {
         id: item.id,
         title: item.title,
         imageUrl: item.imageUrl,
         duration: item.duration,
         complexity: item.complexity,
         affordability: item.affordability,
      }

      return <MealItem {...mealItemProps} />

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
