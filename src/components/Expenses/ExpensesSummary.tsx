import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExpensesSummary = ({ expenses, expensesPeriod }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.periodText}>{expensesPeriod}</Text>
        <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#4C85EA",
    // width: "80%",
    // alignSelf: "center",
    // borderRadius: 20,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  periodText: {
    color: "white",
    paddingLeft: 10,
  },
  sumText: {
    color: "white",
    paddingRight: 10,

    fontWeight: "bold",
  },
});
