import React from "react";
import { Center, Spinner } from "native-base";

import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

export function Navigator() {
  const user = {};
  const isFetching = false;

  if (isFetching) {
    return (
      <Center flex={1}>
        <Spinner color="brand.500" />
      </Center>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
}
