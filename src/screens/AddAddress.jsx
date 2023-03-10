import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CommonButton";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/action/Actions";
const AddAddress = () => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 20,

            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.8,
            padding: 7,
            borderRadius: 100,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../images/arrow.png")}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={"Enter your District"}
        icon={require("../images/buildings.png")}
        value={city}
        onChangeText={(txt) => {
          setCity(txt);
        }}
      />
      <CustomTextInput
        placeholder={"Enter your Province"}
        icon={require("../images/district.png")}
        value={province}
        onChangeText={(txt) => {
          setProvince(txt);
        }}
      />
      <CustomTextInput
        placeholder={"Enter your Location"}
        icon={require("../images/pin.png")}
        value={location}
        onChangeText={(txt) => {
          setLocation(txt);
        }}
      />
      <CustomButton
        title={"Save Address"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          if (city !== "" && province !== "" && location !== "") {
            dispatch(
              addAddress({ city: city, province: province, location: location })
            );
          }
          navigation.navigate("MyAddress");
        }}
      />
    </View>
  );
};

export default AddAddress;
