import { StyleSheet } from "react-native";

const reusableStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent,
  }),
});

export default reusableStyles;
