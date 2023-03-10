import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <Image
          source={require("../images/logos.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            resizeMode: "center",
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Splash;
