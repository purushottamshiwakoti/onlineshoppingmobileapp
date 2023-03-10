import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../common/CartItems";
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromWishlist,
} from "../redux/action/Actions";

const WishList = () => {
  const [cartList, setCartList] = useState();
  const cartData = useSelector((state) => state.Reducers2);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItems
                isWishList={"yes"}
                item={item}
                onRemoveFromWishlist={() => {
                  dispatch(removeItemFromWishlist(index));
                }}
                // onRemoveItem={() => {
                //   dispatch(removeItemFromWishlist(index));
                // }}
                onAddToCart={() => {
                  dispatch(addItemToCart(item));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No items added in wishlist</Text>
        </View>
      )}
    </View>
  );
};

export default WishList;
