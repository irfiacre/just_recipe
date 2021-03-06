import { View, Text } from "react-native";
import React from "react";

const Display = ({ title }) => {
  return (
    <View style={styles.root}>
      {title ? (
        <Text style={styles.text}>{title}</Text>
      ) : (
        <>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.textLogo}>MEAL RECIPE</Text>
        </>
      )}
    </View>
  );
};

const styles = {
  root: {
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "normal",
    color: "#045653",
  },
  textLogo: {
    fontSize: 38,
    fontWeight: "800",
    color: "#045653",
  },
};

export default Display;
