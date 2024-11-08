// Main.tsx
import React, { useEffect, ReactNode } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useCustomFonts } from "@/styles/font/FontApp";

SplashScreen.preventAutoHideAsync();

// font

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
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
    <ImageBackground
      source={require("../common/assets/images/aiwado-background/bg-aiwado@3x.png.png")} // Adjust the path to your image
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        {children}
        <View style={styles.bottomHiden}></View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // 'cover' scales the image to cover the background
  },
  bottomHiden: {
    height: 230,
  },
});

export default Main;
