import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, TEXT } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";

const Country = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetail", item)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          borderRadius={12}
        />
        <HeightSpacer height={6} />
        <ReusableText
          text={item.country}
          //   font={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
