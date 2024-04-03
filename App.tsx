import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import theme from "@themes/default";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
