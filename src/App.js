import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home";

const App = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F6F9FE",
    padding: 20,
  },
});
export default App;
