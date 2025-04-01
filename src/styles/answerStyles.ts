import { StyleSheet } from "react-native";

export const answerStyles = StyleSheet.create({
  optionLetter: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5733", // ✅ Different color for option letter
    marginRight: 5, // ✅ Adds spacing between "a)" and answer text
  },
  answerCard: {
    paddingHorizontal: 200,
    padding :15,
    backgroundColor: "#ddd",
    marginVertical: 10,
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
