import { StyleSheet } from "react-native";

export const answerStyles = StyleSheet.create({
  answerCard: {
    padding: 30,
    backgroundColor: "#ddd",
    marginVertical: 5,
    borderRadius: 20,
    width: "100%", // ✅ Makes the card take 90% of the screen width
    alignSelf: "stretch", // ✅ Centers the card in the parent container
  },
  answerText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  answerDescription: {
    fontSize: 12,
    color: "gray",
  },
});
