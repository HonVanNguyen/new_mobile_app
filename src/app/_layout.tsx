import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Dimensions, Image, ViewBase } from "react-native";
import { getPathDown } from "../components/navigator/curve";
import { scale } from "react-native-size-scaling";
import Svg, { Path } from "react-native-svg";
import Profile from "./Profile";
import HomeScreen from "./HomePage";
import ScanQR from "./ScanQR";
import { mainTabStyle } from "@/styles";
import { ImagePath } from "@/common/assets/constants/imagePath";
import Bell from "./Bell";
import Gift from "./Gift";
const Tab = createBottomTabNavigator();
const _RootLayout = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const returnpathDown = getPathDown(maxWidth, 60, 50);
  const icons: { [key: string]: any } = {
    index: ImagePath.icHomeBar,
    gift: ImagePath.icGiftBar,
    scan: ImagePath.ic_scan,
    bell: ImagePath.icNotiBar,
    personal: ImagePath.icUserBar,
  };
  const iconsSelect: { [key: string]: any } = {
    index: ImagePath.icHomeBarSelected,
    gift: ImagePath.icGiftBarSelected,
    scan: ImagePath.ic_scan,
    bell: ImagePath.icNotiBarSelected,
    personal: ImagePath.icUserBarSelected,
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: mainTabStyle.tabBarStyle,
        }}
      >
        {/* home page */}
        <Tab.Screen
          name="index"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarItemStyle: mainTabStyle.tabBarItemStyle,
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused ? mainTabStyle.selectView : mainTabStyle.nomalView
                }
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={focused ? iconsSelect["index"] : icons["index"]}
                />
              </View>
            ),
            tabBarLabel: () => <Text> </Text>,
          }}
        />

        {/* gift page */}
        <Tab.Screen
          name="Gift"
          component={Gift}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused ? mainTabStyle.selectView : mainTabStyle.nomalView
                }
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={focused ? iconsSelect["gift"] : icons["gift"]}
                />
              </View>
            ),
            tabBarLabel: () => <Text> </Text>,
          }}
        />

        <Tab.Screen
          name="ScanQR"
          component={ScanQR}
          options={{
            headerShown: false,
            unmountOnBlur: false,
            tabBarItemStyle: {
              margin: 0,
              zIndex: -50,
            },
            tabBarIcon: () => (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 56,
                  width: 56,
                  backgroundColor: "#f63643",
                  borderRadius: 35,
                }}
              >
                <Image
                  style={{
                    width: 36,
                    height: 36,
                  }}
                  source={icons["scan"]}
                />
              </View>
            ),
            tabBarLabel: () => (
              <View>
                <Svg width={maxWidth} height={scale(60)}>
                  <Path fill={"white"} {...{ d: returnpathDown }} />
                </Svg>
              </View>
            ),
          }}
        />

        {/* noti */}
        <Tab.Screen
          name="Bell"
          component={Bell}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused ? mainTabStyle.selectView : mainTabStyle.nomalView
                }
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={focused ? iconsSelect["bell"] : icons["bell"]}
                />
              </View>
            ),
            tabBarLabel: () => <Text> </Text>,
          }}
        />

        {/* profile */}
        {/* home page */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused ? mainTabStyle.selectView : mainTabStyle.nomalView
                }
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={focused ? iconsSelect["personal"] : icons["personal"]}
                />
              </View>
            ),
            tabBarLabel: () => <Text> </Text>,
          }}
        />

        {/*  */}
      </Tab.Navigator>
    </>
  );
};
export default _RootLayout;
