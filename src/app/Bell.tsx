import { View, Text, ImageBackground, Image } from "react-native";
import React, { useEffect } from "react";
import { SessionNotifyStyle } from "@/styles/Notify/SessionNotifyStyled";
import { ImagePath } from "@/common/assets/constants/imagePath";
import { useCustomFonts } from "@/styles/font/FontApp";
import { SplashScreen } from "expo-router";

const Bell = () => {
  const fontsState = useCustomFonts();
  useEffect(() => {
    async function prepare() {
      try {
        // Prevent the splash screen from hiding
        await SplashScreen.preventAutoHideAsync();

        if (fontsState?.fontsLoaded) {
          // Hide the splash screen after fonts are loaded
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    if (fontsState?.fontsLoaded) {
      prepare();
    }
  }, [fontsState?.fontsLoaded]);

  if (!fontsState?.fontsLoaded) {
    return null; // Don't render anything until the fonts are loaded
  }

  if (fontsState.fontError) {
    console.error("Error loading fonts:", fontsState.fontError);
    return null;
  }
  return (
    <View style={SessionNotifyStyle.common}>
      <ImageBackground style={SessionNotifyStyle.top}
        source={ImagePath.image_header_noti}>
        <Text style={[SessionNotifyStyle.textTitle, { fontFamily: "BalsamiqSans_400Regular" }]}>Thông báo</Text>
      </ImageBackground>
      <View style={SessionNotifyStyle.bottom}>
        <Image
          style={SessionNotifyStyle.imageBot}
          source={ImagePath.empty_order}>

        </Image>
        <Text style={SessionNotifyStyle.textBot}>
          Bạn chưa có thông báo nào
        </Text>
      </View>
    </View>
  );
};

export default Bell;
