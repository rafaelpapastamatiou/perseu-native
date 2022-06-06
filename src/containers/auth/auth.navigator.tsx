import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
    </Auth.Navigator>
  );
};
