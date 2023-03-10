import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
  let isValid = true;
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmBadPassword, setConfirmBadPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigation = useNavigation();

  const validate = () => {
    setButtonDisabled(true);
    if (name == "") {
      setBadName(true);
      isValid = false;
    } else {
      setBadName(false);
    }
    if (email == "") {
      setBadEmail(true);
      isValid = false;
    } else {
      setBadEmail(false);
    }
    if (mobile == "") {
      setBadMobile(true);
      isValid = false;
    } else {
      setBadMobile(false);
    }
    if (password == "") {
      setBadPassword(true);
      isValid = false;
    } else {
      setBadPassword(false);
    }
    if (confirmPassword == "") {
      setConfirmBadPassword(true);
      isValid = false;
    } else {
      setConfirmBadPassword(false);
    }
    if (confirmPassword !== password) {
      setConfirmBadPassword(true);
    } else {
      setConfirmBadPassword(false);
    }
    setTimeout(() => {
      if (
        badName == false &&
        badMobile == false &&
        badEmail == false &&
        badPassword == false &&
        confirmBadPassword == false
      )
        saveData();
    }, 2000);
  };
  const saveData = async () => {
    {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("MOBILE", mobile);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("PASSWORD", password);
      await AsyncStorage.setItem("ConfirmPASSWORD", confirmPassword);

      if (
        name !== "" &&
        mobile !== "" &&
        email !== "" &&
        password !== "" &&
        confirmBadPassword !== ""
      ) {
        alert("SignUp Sucessful Now you can login");

        navigation.navigate("Login");
      } else {
        alert("Fill all required details");
      }
    }
  };
  return (
    <ScrollView>
      <View>
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
            alignSelf: "center",
            marginTop: 40,
            fontSize: 24,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Create New Account
        </Text>
        <CustomTextInput
          placeholder="Enter Full Name"
          icon={require("../images/user.png")}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {badName === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: "700",
              color: "red",
            }}
          >
            Please enter valid name
          </Text>
        )}
        <CustomTextInput
          placeholder="Enter Number"
          keyboardType={"number-pad"}
          icon={require("../images/telephone.png")}
          value={mobile}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
        />
        {badMobile === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: "700",
              color: "red",
            }}
          >
            Please enter valid Mobile Number
          </Text>
        )}
        <CustomTextInput
          placeholder="Enter Email Address"
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
          placeholder="Enter Password"
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
        <CustomTextInput
          placeholder="Confirm Password"
          type={"password"}
          icon={require("../images/padlock.png")}
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
        />
        {confirmBadPassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 35,
              fontSize: 18,
              fontWeight: "700",
              color: "red",
            }}
          >
            Password didn't matched
          </Text>
        )}
        <CommonButton
          title={"SignUp"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => validate()}
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
            navigation.goBack();
          }}
        >
          Already have an Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
