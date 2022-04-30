import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data"

function randomCategoryItem(itemData){
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

function CategoryScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={randomCategoryItem}  />
}

export default CategoryScreen