import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontSize: 50,
  },
});
export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 150,
  },
  text: {
    fontSize: 24,
    color: "#000",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
