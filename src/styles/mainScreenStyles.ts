import { StyleSheet } from "react-native";

export const mainScreenStyles = StyleSheet.create({
  container: {
    flex: 1, // Allow content to take full height
    padding: 20,
    alignItems: "center",
  },
  desktopContainer: {
    width: "60%",
    alignSelf: "center",
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff", // White text for contrast
    backgroundColor: "#007bff", // Blue background for visibility
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: "flex-start", // Aligns to the left
    marginBottom: 5, // Space before question text
  },

});
