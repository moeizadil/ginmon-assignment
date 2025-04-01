import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const mainScreenStyles = (isDesktop: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: scale(20),
      flexDirection: isDesktop ? "row" : "column",
      ...(isDesktop && {
        width: "80%",
        alignSelf: "center",
      }),
    },
    questionSection: {
      ...(isDesktop
        ? {
            width: "40%",
            marginRight: scale(10),
          }
        : {
            marginBottom: verticalScale(10),
          }),
    },
    questionNumber: {
      fontSize: moderateScale(14),
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#007bff",
      paddingVertical: verticalScale(4),
      paddingHorizontal: scale(10),
      borderRadius: scale(10),
      marginBottom: verticalScale(5),
      alignSelf: "flex-start",
    },
    questionScroll: {
      // ...
    },
    answerSection: {
      flex: 1,
      ...(isDesktop && {
        width: "60%",
        marginLeft: scale(10),
      }),
    },
    answerScroll: {
      flexGrow: 1,
    },
  });
