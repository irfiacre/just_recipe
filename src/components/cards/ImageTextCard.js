import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ImageCard = ({ content, onPress }) => {
  const { imgUrl, title } = content;
  const handleOnPress = () => onPress(content);

  return (
    <View style={styles.container} onTouchStart={handleOnPress}>
      <Image
        style={styles.img}
        source={{
          uri: imgUrl,
        }}
      ></Image>
      <View style={styles.child}>
        <Text style={styles.name}>{title || "Title"}</Text>
      </View>
    </View>
  );
};
const textStyle = {
  fontSize: 24,
  color: "#045653",
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: "47%",
    borderWidth: 0.5,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderColor: "#045653",
    padding: 5,
  },
  img: {
    height: 165,
    borderRadius: 6,
  },
  child: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  name: {
    ...textStyle,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default ImageCard;
