import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useCustomFonts } from "@/styles/font/FontApp";
const SessionPhoneCard = () => {
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
    <View>
      <Text style={{ fontFamily: "BalsamiqSans_400Regular", fontSize: 24 }}>
        SessionPhoneCard
      </Text>
    </View>
  );
};

export default SessionPhoneCard;
