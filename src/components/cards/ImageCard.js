import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const ImageCard = ({ content, onPress }) => {
  const { imgUrl, title } = content;
  const handleOnPress = () => onPress(content);

  return (
    <View style={styles.container} onTouchStart={handleOnPress}>
      <ImageBackground
        style={styles.img}
        source={{
          uri: imgUrl,
        }}
      >
        <View style={styles.child}>
          <Text style={styles.name}>{title || "Title iiiiiiiiiiiiiii"}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const textStyle = {
  fontSize: 38,
  color: "#fff",
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  img: {
    height: 165,
    width: "100%",
    borderRadius: 6,
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    borderRadius: 6,
  },
  name: {
    ...textStyle,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default ImageCard;
