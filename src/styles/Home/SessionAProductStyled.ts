import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const SessionAProduct = StyleSheet.create({
  SessionAProduct: {
    width: width,
    height: 300,
    maxHeight: 300,
  },
  content: {
    gap: 8,
  },
  TitleProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingBottom: 10,
  },
});
