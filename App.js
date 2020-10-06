import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import axios from "axios";

import React from "react";
import { StyleSheet, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import EventsScreen from "./screens/EventsScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={HomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Events" component={EventsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
