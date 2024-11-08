import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import ListItem from "../components/core/SampleListItem";

import * as styles from "../styles/index";
import { homeStyles } from "@/styles/home";

SplashScreen.preventAutoHideAsync();
const data = [...Array(24)].map((val, index) => index + 1);
export default function HomeScreen() {
  let [fontsLoader, fontError] = useFonts({ Inter_900Black });
  useEffect(() => {
    if (fontsLoader || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoader, fontError]);
  if (!fontsLoader && !fontError) {
    return null;
  }
  return (
    <View style={homeStyles.container}>
      <FlatList
        data={data}
        contentContainerStyle={homeStyles.content}
        columnWrapperStyle={homeStyles.column}
        numColumns={2}
        renderItem={({ item }) => <ListItem data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
