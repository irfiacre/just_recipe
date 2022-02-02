import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default (props) => {
  const { text, previous, navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-sharp" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}> {text ? text : "Meal Recipe"}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#045653",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    marginTop: 3,
    color: "#fff",
    fontSize: 24,
  },
});
