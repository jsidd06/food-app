import { Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>MealDetailsScreen({mealId})</Text>;
}

export default MealDetailsScreen;
