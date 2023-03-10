import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { products } from "../screens/Product";
import MyProductItems from "../common/MyProductItems";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addItemToWishlist } from "../redux/action/Actions";

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jackettList, setJacketList] = useState([]);
  const [shoetList, setShoeList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);

  useEffect(() => {
    let tempCategory = [];
    products.category.map((items) => {
      tempCategory.push(items);
    });
    setCategoryList(tempCategory);

    setTshirtList(products.category[0].data);
    setJacketList(products.category[3].data);
    setJeansList(products.category[1].data);
    setShoeList(products.category[2].data);
    setSlipperList(products.category[4].data);
  }, []);
  const items = useSelector((state) => state);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Header />
        <Image
          source={require("../images/banner.jpg")}
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
            alignSelf: "center",
            borderRadius: 10,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 10,
                    height: 50,
                  }}
                >
                  <Text style={{ color: "#000", fontSize: 16 }}>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          New T-shirts
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tshirtList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItems
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addItemToWishlist(x));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          New Jeans
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jeansList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItems
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addItemToWishlist(x));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Trending Shoes
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shoetList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItems
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addItemToWishlist(x));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Fashionable Jackets
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jackettList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItems
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addItemToWishlist(x));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Best Slippers
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slipperList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItems
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addItemToWishlist(x));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
