import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { LinearGradient } from "expo-linear-gradient";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#ffffff00",
          "#ffffff00",
          "#ffffff00",
          "#ffffff00",
          "#ffffff00",
          "#ffffff00",
          "#ffffff00",
          "#ffffff",
        ]}
        style={styles.background}
        pointerEvents={"none"}
      />
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          // flex: 1,
          paddingTop: 10,
        }}
        contentInset={{ bottom: 100 }}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: 100,
  },
});
