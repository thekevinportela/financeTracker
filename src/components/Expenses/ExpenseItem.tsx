import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

export type IExpenseItemProps = {
  id: string;
  description: string;
  date: Date;
  amount: number;
};

const ExpenseItem: React.FC<IExpenseItemProps> = ({
  id,
  description,
  date,
  amount,
}) => {
  const navigation = useNavigation();

  const itemPress = () =>
    navigation.navigate("ManageExpense", { expenseId: id });

  return (
    <Pressable style={styles.container} onPress={itemPress}>
      <View>
        <Text>{description}</Text>
        <Text style={styles.date}>{getFormattedDate(date)}</Text>
      </View>
      <Text>{amount.toFixed(2)}</Text>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    margin: 10,
    backgroundColor: "#D7E5F0",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
  },
  date: {
    color: "#3a3b3c",
    fontSize: 12,
    paddingTop: 4,
  },
});

export { ExpenseItem };
