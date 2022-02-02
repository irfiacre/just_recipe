import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopNavigation from "../components/TopNavigation";
import HomeScreen from "../screens/Home";
import CategoryScreen from "../screens/Category";
import FoodRecipeScreen from "../screens/FoodRecipe";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ scene, previous, navigation }) =>
          route.name === "Home" ? null : (
            <TopNavigation
              navigation={navigation}
              previous={previous}
              text={route.params?.title || route.name}
            />
          ),
      })}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="FoodRecipe" component={FoodRecipeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
