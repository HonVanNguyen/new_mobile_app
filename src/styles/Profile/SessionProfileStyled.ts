import { StyleSheet } from "react-native";

export const SessionProfileStyle = StyleSheet.create({
  common: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  boxViewTop: {
    height: 225,
    width: "100%",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    // overflow: "hidden",
  },
  //ImageBackground
  ImageBackground_center: {
    width: "100%",
    height: 225,
  },
  // boxAvatar
  boxAvatarCenter: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: -55,
  },
  StackAvatar: {
    alignItems: "center",
    maxWidth: 247,
    backgroundColor: "#fff",
    width: 247,
    borderRadius: 24,
    shadowColor: "#EC3A81",
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  StackCenter:{
    width: 78,
    height: 78,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff'
  },
});
