import { DefaultTheme, Theme } from "@react-navigation/native";

import { theme } from "./theme";

export const navigatorTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.dark["50"],
  },
};
