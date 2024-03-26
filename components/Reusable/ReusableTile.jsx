import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusableStyles from "./reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import HeightSpacer from "./HeightSpacer";
import Rating from "./Rating";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusableStyles.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          borderRadius={12}
        />
        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={item.title}
            //   font={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={8} />
          <ReusableText
            text={item.location}
            //   font={"medium"}
            size={14}
            color={COLORS.gray}
          />
          <HeightSpacer height={8} />
          <View style={reusableStyles.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />
            <ReusableText
              text={`(${item.review})`}
              //   font={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
