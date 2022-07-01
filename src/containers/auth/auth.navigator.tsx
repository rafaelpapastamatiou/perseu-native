import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./pages/signin";

const Auth = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Auth.Screen
        name="Signin"
        component={SignIn}
      />
    </Auth.Navigator>
  );
};
