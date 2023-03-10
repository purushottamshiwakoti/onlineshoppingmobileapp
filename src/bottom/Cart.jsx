import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../common/CartItems";
import {
  addItemToWishlist,
  deleteAllCartItems,
  removeItemFromCart,
} from "../redux/action/Actions";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const [cartList, setCartList] = useState();
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItems
                item={item}
                onAddToWishlist={(x) => {
                  dispatch(addItemToWishlist(x));
                }}
                onRemoveItem={() => {
                  dispatch(removeItemFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No items added in Cart</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          borderTopWidth: 0.7,
        }}
      >
        <Text style={{ marginTop: 10, fontSize: 18 }}>Total</Text>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "500" }}>
          Rs.{cartData.reduce((acc, item) => acc + item.price, 0)}
        </Text>
      </View>
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 10 }}>
          <CommonButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"Place Order"}
            onPress={() => [navigation.navigate("OrderSucess")]}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
