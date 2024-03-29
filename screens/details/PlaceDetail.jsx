import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const PlaceDetail = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <View>
      <Text>PlaceDetail</Text>
    </View>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({});
