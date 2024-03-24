import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

const ReusableBtn = ({
  text,
  font,
  size,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
      onPress={onPress}
    >
      <Text style={styles.text(font, size, textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  text: (font, size, textColor) => ({
    fontFamily: font,
    fontSize: size,
    color: textColor,
  }),
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    width,
    backgroundColor,
    borderWidth,
    borderColor,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
  }),
});
