import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Display from "../components/Header";
import ImageTextCard from "../components/cards/ImageTextCard";
import apiService from "../config/apiService";
import { ImageBackground } from "react-native-web";

const CategoryScreen = ({ route, navigation }) => {
  const { title, id } = route.params;

  const [state, setState] = useState({
    mealInfo: {},
  });
  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        amount: meal[`strMeasure${i}`],
      });
    }

    return ingredients;
  };

  useEffect(async () => {
    const data = await apiService({
      path: `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`,
      method: "GET",
    });
    if (data.meals) {
      setState({
        ...state,
        mealInfo: data.meals.map((meal) => ({
          id: meal.idCategory,
          imgUrl: meal.strMealThumb,
          title: meal.strMeal,
          instruction: meal.strInstructions.split("."),
          tutorial: meal.strYoutube,
          ingredients: getIngredients(meal),
        })),
      });
    }
  }, []);

  const { mealInfo } = state;
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <ImageBackground
          source={{ uri: mealInfo.imgUrl }}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>Inside</Text>
        </ImageBackground>
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
  img: {
    height: 165,
    borderRadius: 6,
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
