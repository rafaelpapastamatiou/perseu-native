import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Transactions } from "./pages";
import { AddTransaction } from "./pages/AddTransaction";

const TransactionsStack = createStackNavigator();

export function TransactionsNavigator() {
  return (
    <TransactionsStack.Navigator
      initialRouteName="TransactionsNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TransactionsStack.Screen
        name="Transactions"
        component={Transactions}
      />
      <TransactionsStack.Screen
        name="AddTransaction"
        component={AddTransaction}
      />
    </TransactionsStack.Navigator>
  );
}

export interface TransactionsStackParamList {
  Transactions: undefined;
  AddTransaction: undefined;
}
