import { View, Text } from "react-native";
import React from "react";
import CommonButton from "./common/CommonButton";
import { useNavigation } from "@react-navigation/native";

const OrderSucess = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "green" }}>
        Order Placed Sucessfully
      </Text>
      <CommonButton
        title={"Return Home"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default OrderSucess;
