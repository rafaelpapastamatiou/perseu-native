import React from "react";
import { Center, Spinner } from "native-base";

import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "../containers/auth/auth.navigator";
import { useAuth } from "../hooks/useAuth";

export function Navigator() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner color="brand.500" />
      </Center>
    );
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
