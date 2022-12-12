import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const handleDelete = () => {
    console.log("Delete");
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    console.log("CONFIRM");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Button text={isEditing ? "Update" : "Add"} onPress={handleConfirm} />
        <Button flat text="Cancel" onPress={handleCancel} />
      </View>
      {isEditing && (
        <FontAwesome
          name="trash"
          size={24}
          color="red"
          onPress={handleDelete}
        />
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor:
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    // borderTopColor:
  },
});
