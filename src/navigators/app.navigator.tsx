import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";

import { DashboardNavigator } from "../containers/dashboard/dashboard.navigator";
import { colors } from "../config/colors";
import { TabBar } from "../components/organisms/TabBar";
import { TransactionsNavigator } from "../containers/transactions/transactions.navigator";

const App = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <App.Navigator
      initialRouteName="Playlist"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.eirieBlack,
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <App.Screen
        name="DashboardNavigator"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcon name="dashboard" size={size} color={color} />
          ),
        }}
        component={DashboardNavigator}
      />
      <App.Screen
        name="TransactionsNavigator"
        options={{
          title: "Transações",
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcon name="form" size={size} color={color} />
          ),
        }}
        component={TransactionsNavigator}
      />
      <App.Screen
        name="WalletNavigator"
        options={{
          title: "Carteira",
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcon name="wallet" size={size} color={color} />
          ),
        }}
        component={DashboardNavigator}
      />
      <App.Screen
        name="ProfileNavigator"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcon name="user" size={size} color={color} />
          ),
        }}
        component={DashboardNavigator}
      />
    </App.Navigator>
  );
}
