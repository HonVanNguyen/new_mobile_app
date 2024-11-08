import { StyleSheet } from "react-native";

//   main tab
export const mainTabStyle = StyleSheet.create({
  mainTab: {},
  tabBarStyle: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    position: "absolute",
    elevation: 0,
    bottom: 25,
    marginHorizontal: 20,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarItemStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  selectView: {
    width: 40,
    height: 40,
    backgroundColor: "#f6b1b6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  nomalView: {
    backgroundColor: "transparent",
  },
});
