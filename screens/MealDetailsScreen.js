import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import MealDetail from "../components/MealDetail";
import List from "../components/MealDetails/List";
import Subtitle from "../components/MealDetails/Subtitle";
import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={selectedMeal.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredient</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  //   detailText: {
  //       color: "white",
  //   },
  listContainer: {
    maxHeight: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
