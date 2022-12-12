import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

export type IButtonProps = {
  text?: string;
  onPress?: () => void;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<IButtonProps> = ({ onPress, flat, style, text }) => {
  return (
    <View style={style}>
      <Pressable style={[styles.button, flat && styles.flat]} onPress={onPress}>
        <Text style={[styles.buttonText, flat && styles.flatText]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export { Button };

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#4C85EA",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "#4C85EA",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
