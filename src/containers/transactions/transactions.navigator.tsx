import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Transactions } from "./pages";

const TransactionsStack = createStackNavigator();

export function TransactionsNavigator() {
  return (
    <TransactionsStack.Navigator
      initialRouteName="TransactionsNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TransactionsStack.Screen name="Transactions" component={Transactions} />
    </TransactionsStack.Navigator>
  );
}
