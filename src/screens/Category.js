import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Display from "../components/Header";
import ResultCard from "../components/cards/ResultCard";
import apiService from "../config/apiService";
import ImageCard from "../components/cards/ImageCard";

const CategoryScreen = () => {
  const [state, setState] = useState({
    searchText: "",
    searchResult: [],
    mealCategories: [],
  });

  const handleOnPress = (cond) => {
    if (cond === "0") {
      return setState({ ...state, count: 0 });
    }
    return setState((prevState) => ({
      count: cond === "+" ? prevState.count + 1 : prevState.count - 1,
    }));
  };

  useEffect(async () => {
    const data = await apiService({
      path: "https://www.themealdb.com/api/json/v1/1/categories.php",
      method: "GET",
    });
    if (data.categories) {
      setState({
        ...state,
        mealCategories: data.categories.map((cat) => ({
          id: cat.idCategory,
          imgUrl: cat.strCategoryThumb,
          title: cat.strCategory,
        })),
      });
    }
  }, []);

  const handleOnSearch = async (text) => {
    setState({ ...state, searchText: text });
    const data = await apiService({
      path: `https://www.themealdb.com/api/json/v1/1/search.php?s=${state.searchText}`,
      method: "GET",
    });
    if (data.meals) {
      setState({
        ...state,
        searchText: text,
        searchResult: data.meals.map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          imgUrl: meal.strMealThumb,
          ingredients: [
            meal.strIngredient1,
            meal.strIngredient2,
            meal.strIngredient3,
          ],
        })),
      });
    }
  };

  console.log(">>>>>", state.searchResult);
  return (
    <SafeAreaView style={styles.root}>
      <Display value={state.count} />
      <View style={styles.actions}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleOnSearch(text)}
          value={state.searchText}
          placeholder="Search by meal ex: Chicken"
        />
      </View>
      <View>
        {state.searchResult.length > 0 ? (
          <>
            <Text style={styles.resultText}> Results </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={state.searchResult}
              renderItem={({ item }) => <ResultCard content={item} />}
              keyExtractor={(item) => item.id}
            />
          </>
        ) : (
          <>
            <Text style={styles.resultText}> Meal Categories </Text>
            {state.mealCategories.length > 0 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={state.mealCategories}
                renderItem={({ item }) => <ImageCard content={item} />}
                keyExtractor={(item) => item.id}
              />
            )}
          </>
        )}
      </View>

      {/* <Button onPress={() => handleOnPress("0")}> Search </Button> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#F6F9FE",
    padding: 20,
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
