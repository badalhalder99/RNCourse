import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { SafeAreaView } from "react-native-safe-area-context";

const renderCategoryItem = (itemData) => {
   return (
      <CategoryGridTitle
         title={itemData.item.title}
         color={itemData.item.color}
      />
   )
}

const CategoriesScreen = () => {
   return (
      <FlatList
         data={CATEGORIES}
         keyExtractor={(item) => item.id}
         renderItem={renderCategoryItem}
         numColumns={2}
      />
   )
}

export default CategoriesScreen;
