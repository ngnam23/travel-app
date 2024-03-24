import { Image, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./slides.style";
import { HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Image style={styles.image} source={item.image} alt={item.title} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          //   font={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          text={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
          size={SIZES.medium}
          onPress={() => navigation.navigate("Bottom")}
        />
      </View>
    </View>
  );
};

export default Slides;
