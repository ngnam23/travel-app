import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AppBar,
  DescriptionText,
  NetworkImage,
  ReusableBtn,
  ReusableText,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusableStyles from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";

const CountryDetail = ({ navigation }) => {
  const route = useRoute();
  const item = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NetworkImage
            source={country.imageUrl}
            width={"100"}
            height={350}
            borderRadius={30}
          />
          <AppBar
            title={country.country}
            color={COLORS.white}
            icon={"search1"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />
        </View>
        <View style={styles.description}>
          <ReusableText
            text={country.region}
            //   font={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />
          <DescriptionText text={country.description} />
          <View style={{ alignContent: "center" }}>
            <View style={reusableStyles.rowWithSpace("space-between")}>
              <ReusableText
                text={"Popular Destinations"}
                //   font={"medium"}
                size={TEXT.large}
                color={COLORS.black}
              />
              <TouchableOpacity onPress={() => {}}>
                <Feather name="list" size={20} />
              </TouchableOpacity>
              <ReusableBtn
                text={"Find Best Hotels"}
                width={SIZES.width - 40}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
                size={SIZES.medium}
                onPress={() => navigation.navigate("HotelSearch", id)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
    marginHorizontal: 20,
  },
  description: {
    paddingTop: 20,
  },
});
