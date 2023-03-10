import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Cart from "../bottom/Cart";
import WishList from "../bottom/WishList";
import Profile from "../bottom/Profile";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector((state) => state);

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <Profile />
      )}
      <View
        style={{
          backgroundColor: "white",
          height: 70,
          width: "100%",
          position: "relative",
          bottom: 0,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../images/home.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab === 1 ? "#ooo" : "8e8e8e",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../images/search.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab === 1 ? "#ooo" : "8e8e8e",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: selectedTab == 2 ? "green" : "black",
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Image
              source={require("../images/shopping-bag.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: "white",
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                borderRadius: 10,
                top: 6,
                right: 6,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                {data.reducers.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../images/heart.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab === 3 ? "#000" : "8e8e8e",
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              borderRadius: 10,
              top: 17,
              right: 17,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab();
          }}
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../images/user.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab == 4 ? "000" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
