import { StyleSheet } from "react-native";

export const questionStyles = StyleSheet.create({
  questionCard: {
    padding: 15,
    backgroundColor: "#ddd",
    margin: 5,
    borderRadius: 8,
  },
  selectedQuestionCard: {
    backgroundColor: "#c96",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  questionDescription: {
    fontSize: 12,
    color: "black",
  },
});
