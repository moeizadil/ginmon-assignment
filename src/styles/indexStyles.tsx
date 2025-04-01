import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: verticalScale(20),
  },
});
