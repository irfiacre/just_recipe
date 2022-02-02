import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Display from "../components/Header";
import ImageTextCard from "../components/cards/ImageTextCard";
import apiService from "../config/apiService";

const CategoryScreen = ({ route, navigation }) => {
  const { title, id } = route.params;

  const [state, setState] = useState({
    categoryMeals: [],
  });

  useEffect(async () => {
    const data = await apiService({
      path: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`,
      method: "GET",
    });
    if (data.meals) {
      setState({
        ...state,
        categoryMeals: data.meals.map((cat) => ({
          id: cat.idMeal,
          imgUrl: cat.strMealThumb,
          title: cat.strMeal,
        })),
      });
    }
  }, []);

  const handleCardPress = (data) =>
    navigation.navigate("FoodRecipe", { ...data });

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={state.categoryMeals}
          numColumns={2}
          renderItem={({ item }) => (
            <ImageTextCard onPress={handleCardPress} content={item} />
          )}
          keyExtractor={(item, index) => `${item.title}-${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: "#F6F9FE",
    paddingHorizontal: 10,
  },
  input: {
    height: 60,
    paddingHorizontal: 20,
    borderColor: "#045653",
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 24,
    color: "#045653",
  },
  resultText: {
    marginVertical: 5,
    fontSize: 18,
    color: "#045653",
  },
});

export default CategoryScreen;
