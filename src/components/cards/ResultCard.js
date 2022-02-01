import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ResultCard = ({ content }) => {
  const { title, imgUrl, ingredients } = content;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: imgUrl,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{title}</Text>
        <View>
          {ingredients.map((ing, index) => (
            <Text key={`${ing}-${index}`} style={styles.nutrients}>
              - {ing}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexShrink: 1,
    marginVertical: 10,
    borderWidth: 0.5,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderColor: "#045653",
    padding: 10,
  },
  img: {
    width: 150,
    height: 120,
    borderRadius: 6,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    color: "#045653",
    fontWeight: "500",
    fontSize: 20,
    paddingVertical: 5,
  },
  nutrients: {
    fontSize: 16,
    color: "gray",
  },
});

export default ResultCard;
