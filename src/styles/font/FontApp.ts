import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from "@expo-google-fonts/balsamiq-sans";

export const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return { fontsLoaded: fontsLoaded || false, fontError };
};
