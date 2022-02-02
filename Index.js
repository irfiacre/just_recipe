import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import { theme } from "./theme.config";

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
