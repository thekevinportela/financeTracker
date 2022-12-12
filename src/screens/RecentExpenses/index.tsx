import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../../store/expensesContext";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={{ flex: 1 }}>
      <ExpensesOutput
        expensesPeriod="Last 7 Days"
        expenses={expensesCtx.expenses}
      />
    </View>
  );
};

export default RecentExpenses;
