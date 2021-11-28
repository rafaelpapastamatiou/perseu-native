import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "./pages";

const DashboardStack = createStackNavigator();

export function DashboardNavigator() {
  return (
    <DashboardStack.Navigator
      initialRouteName="DashboardNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}
