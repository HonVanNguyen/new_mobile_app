import { StyleSheet } from "react-native";

export const SessionCateStyle = StyleSheet.create({
  SessionCate: {
    padding: 10,
    height: 170,
    maxHeight: 170,
    overflow: "hidden",
  },
  itemContainer: {
    width: 85,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  itemText: {
    fontSize: 14,
    textAlign: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fbecec",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 40,
    height: 40,
    marginTop: 10,
    tintColor: "red",
  },
});
