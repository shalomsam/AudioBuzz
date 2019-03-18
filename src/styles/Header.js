import { StyleSheet, Platform } from "react-native";
import { colors } from "../theme";

const headerHeight = Platform.OS === "android" ? 50 : 90;

export const HeaderStyle = StyleSheet.create({
  container: {
    height: headerHeight,
    backgroundColor: colors.darkGrey
  },
  wrp: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "flex-end"
  },
  leftIconWrp: {
    padding: 15,
    position: "absolute",
    zIndex: 100,
  },
  leftIcon: {
    padding: 10,
    color: colors.white,
    height: 40,
  },
  titleWrp: {
    flex: 1,
    paddingBottom: 15
  },
  title: {
    color: colors.white,
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center"
  }
});
