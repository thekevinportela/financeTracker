import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default Navigation;
