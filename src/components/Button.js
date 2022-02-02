import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#045653",
    borderColor: "#045653",
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
  },
});
export default Button;
