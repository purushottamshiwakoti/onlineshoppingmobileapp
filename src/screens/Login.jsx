import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password === "") {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    getData();
  };
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem("EMAIL");
    const mPassword = await AsyncStorage.getItem("PASSWORD");
    const mMobile = await AsyncStorage.getItem("MOBILE");
    if (mEmail === email && mPassword === password) {
      navigation.navigate("Home");
    } else {
      alert("Wrong Email or Password");
    }
  };
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../images/logos.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            alignSelf: "center",
            marginTop: "50%",
          }}
        />
        <Text
          style={{
            //   marginLeft: "43%",
            alignSelf: "center",
            marginTop: 40,
            fontSize: 24,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Login
        </Text>

        <CustomTextInput
          placeholder="Enter email"
          icon={require("../images/email.png")}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 35,

              fontSize: 18,
              fontWeight: "700",
              color: "red",
            }}
          >
            Please enter valid email
          </Text>
        )}
        <CustomTextInput
          placeholder="Enter password"
          type={"password"}
          icon={require("../images/padlock.png")}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: "700",
              color: "red",
            }}
          >
            Please enter valid password
          </Text>
        )}
        <CommonButton
          title={"Login"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => login()}
        />
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            fontSize: 18,
            fontWeight: "800",
            color: "#635985",
            textDecorationLine: "underline",
          }}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Create New Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
