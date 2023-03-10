import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../redux/action/Actions";

const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector((state) => state.AddressReducer);
  //   console.log(addressList);
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../images/arrow.png")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 20,
              // backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
          My Address
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.5,
            padding: 7,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate("AddAddress");
          }}
        >
          <Text>Add Adress</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "100%",
                height: 100,
                borderWidth: 0.5,
                borderColor: "#8e8e8e",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 20,
                    fontSize: 18,
                    fontWeight: "400",
                  }}
                >
                  {"City: " + item.city}
                </Text>
                <Text
                  style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}
                >
                  {"Province: " + item.province}
                </Text>
                <Text
                  style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}
                >
                  {"Location: " + item.location}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  marginRight: 20,
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 10,
                }}
                onPress={() => {
                  dispatch(deleteAddress(index));
                }}
              >
                <Text>Delete Address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;
