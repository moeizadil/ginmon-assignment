import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const questionStyles = StyleSheet.create({
  questionCard: {
    padding: scale(15),
    backgroundColor: "#ddd",
    margin: verticalScale(6),
    borderRadius: scale(8),
    height: verticalScale(80),
  },
  selectedQuestionCard: {
    backgroundColor: "#c96",
  },
  questionText: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
  },
  questionDescription: {
    fontSize: moderateScale(8),
    color: "black",
  },
});
