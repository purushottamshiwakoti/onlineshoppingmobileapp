import { View, Text, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        alignSelf: "center",
        width: "85%",
        height: 50,
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 1,
        marginTop: 25,
        paddingLeft: 15,
        fontSize: 18,
        paddingRight: 40,
        flexDirection: "row",
      }}
    >
      <Image source={icon} style={{ width: 25, height: 25, marginTop: 10 }} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{ marginLeft: 15, fontSize: 18 }}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : "default"}
        // keyboardType={type ? type : "default"}
      />
    </View>
  );
};

export default CustomTextInput;
