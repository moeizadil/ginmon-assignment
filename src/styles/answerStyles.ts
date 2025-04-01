import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const answerStyles = StyleSheet.create({
  optionLetter: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#ff5733",
    marginRight: scale(5),
  },
  answerCard: {
    paddingHorizontal: scale(20),
    padding: verticalScale(15),
    backgroundColor: "#ddd",
    marginVertical: verticalScale(10),
    borderRadius: scale(20),
    width: "100%",
    alignSelf: "stretch",
  },
  // New style to visually indicate selection
  selectedAnswerCard: {
    borderColor: "blue",
    borderWidth: 2,
  },
  answerText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
  },
  answerDescription: {
    fontSize: moderateScale(12),
    color: "gray",
  },
});
