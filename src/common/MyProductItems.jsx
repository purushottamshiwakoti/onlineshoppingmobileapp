import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MyProductItems = ({ item, onAddToCart, onAddToWishlist }) => {
  return (
    <View
      style={{
        width: 200,
        height: 250,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        marginLeft: 20,
        marginBottom: 10,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "65%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 20,
          marginTop: 5,
          fontSize: 20,
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>{"Rs." + item.price}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            marginLeft: 5,
          }}
          onPress={() => {
            onAddToCart(item);
          }}
        >
          <Text style={{ fontSize: 15 }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#fff",
          position: "absolute",
          top: 10,
          right: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          onAddToWishlist(item);
        }}
      >
        <Image
          source={require("../images/heart.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItems;
