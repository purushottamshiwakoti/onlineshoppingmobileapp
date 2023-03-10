import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommonButton = ({ onPress, title, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: "80%",
        height: 50,
        marginLeft: 40,
        borderRadius: 10,
      }}
      onPress={() => onPress()}
    >
      <Text style={{ color: textColor, fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
