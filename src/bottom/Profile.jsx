import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
  let [name, setName] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    retrivedName = await AsyncStorage.getItem("NAME");
    setName(retrivedName);
  };
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../images/settings.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../images/user.png")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",
          marginTop: 50,
          tintColor: "green",
        }}
      />

      <Text
        style={{
          alignSelf: "center",
          marginTop: 20,
          fontSize: 19,
          fontWeight: "400",
        }}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          marginTop: 15,
          borderBottomWidth: 0.5,
          alignSelf: "center",
          justifyContent: "center",
          borderBottomColor: "#8e8e8e",
        }}
        onPress={() => {
          navigation.navigate("MyAddress");
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 17 }}> My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          marginTop: 10,
          borderBottomWidth: 0.5,
          alignSelf: "center",
          justifyContent: "center",
          borderBottomColor: "#8e8e8e",
        }}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={{ marginLeft: 15, fontSize: 17 }}> My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          marginTop: 10,
          borderBottomWidth: 0.5,
          alignSelf: "center",
          justifyContent: "center",
          borderBottomColor: "#8e8e8e",
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 17 }}> Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
