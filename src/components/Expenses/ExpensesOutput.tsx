import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={{ flex: 1 }}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
