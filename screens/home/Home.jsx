import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import reusableStyles from "../../components/Reusable/reusable.style";
import {
  HeightSpacer,
  ReusableText,
  Places,
  Recommendations,
  BestHotel,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import styles from "./home.style";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusableStyles.container}>
      <View>
        <View style={reusableStyles.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey User!"}
            //   font={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          //   font={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <Places />

        <HeightSpacer height={15} />

        <Recommendations />

        <HeightSpacer height={22} />

        <BestHotel />
      </View>
    </SafeAreaView>
  );
};

export default Home;
