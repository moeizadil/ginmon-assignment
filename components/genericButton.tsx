import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent  } from "react-native";

interface GenericButtonProps {
    name: string;
    onPress?: (event: GestureResponderEvent) => void; // onPress function type
    style?: object;
    textStyle?: object;
  }

  const GenericButton: React.FC<GenericButtonProps> = ({ name, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GenericButton;
