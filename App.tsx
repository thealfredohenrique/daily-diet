import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@themes/default";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
}
