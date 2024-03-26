import { StyleSheet, Text } from "react-native";
import React from "react";

const ReusableText = ({ text, font, size, color, align }) => {
  return <Text style={styles.textStyle(font, size, color, align)}>{text}</Text>;
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (font, size, color, align) => ({
    fontFamily: font,
    fontSize: size,
    color: color,
    textAlign: align,
  }),
});
