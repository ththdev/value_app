import React from "react";
import { ThemeProvider } from "styled-components/native";
import RootStack from "./src/navigators/RootStack";
import { dark, light } from "./src/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <RootStack />
    </ThemeProvider>
  );
}
