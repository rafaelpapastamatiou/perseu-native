import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";

// import { makeServer } from "./services/mirage";
import { queryClient } from "./services/queryClient"

import { navigatorTheme } from "./config/navigator-theme";
import { theme } from "./config/theme";

import { Navigator } from "./navigators";

import { SafeContainer } from "./components/atoms/SafeContainer";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/auth";

// if (__DEV__) {
//   makeServer();
// }

export default function App() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={theme}>
          <AuthProvider>
            <SafeContainer>
              <StatusBar barStyle={"light-content"} />
              <Navigator />
            </SafeContainer>
          </AuthProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);
