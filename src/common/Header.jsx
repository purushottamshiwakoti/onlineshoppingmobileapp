import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        width: "100%",
        height: 70,
        justifyContent: "space-between",
        padding: 10,

        alignItems: "center",
        borderBottomWidth: 0.6,
        borderBottomColor: "grey",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "800" }}>Online Shopping</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 18, color: "grey" }}>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
