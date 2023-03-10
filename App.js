import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/AppNavigator";
import MainContainer from "./src/MainContainer";
import store from "./src/redux/action/store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
