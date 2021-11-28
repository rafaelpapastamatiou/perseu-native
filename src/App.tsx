import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Navigator } from "./navigators";

import { navigatorTheme } from "./config/navigator-theme";
import { theme } from "./config/theme";
import { SafeContainer } from "./components/atoms/SafeContainer";

export default function App() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <NativeBaseProvider theme={theme}>
        <SafeContainer>
          <StatusBar barStyle={"light-content"} />
          <Navigator />
        </SafeContainer>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);
