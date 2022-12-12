import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpenses from "../screens/RecentExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../screens/AllExpenses";
import ManageExpense from "../screens/ManageExpense";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import Navigation from ".";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}
    >
      <Stack.Screen
        name="ExpensesTabs"
        component={ExpensesTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{ headerBackTitleVisible: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default Main;

const ExpensesTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: "#4C85EA",
          bottom: 26,
          borderRadius: 36,
          alignItems: "center",
          justifyContent: "center",
          width: "60%",
          alignSelf: "center",
          height: "6%",
          paddingBottom: 0,
          zIndex: 10000,
          // position: "absolute",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#bbb",
        tabBarShowLabel: false,
        headerRight: () => (
          <AntDesign
            name="plus"
            size={24}
            color="black"
            style={{ marginHorizontal: 8 }}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="back-in-time" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search-dollar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
