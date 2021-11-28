import React from "react";
import { Flex, HStack } from "native-base";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors } from "../../config/colors";

type TabBarProps = BottomTabBarProps;

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      bgColor={"dark.50"}
      p={4}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const icon = options.tabBarIcon;

        const isFocused = state.index === index;

        function onPress() {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {
              merge: true,
            });
          }
        }

        function onLongPress() {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        }

        return (
          <Flex
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            key={route.key}
          >
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {icon &&
                icon({
                  size: 32,
                  color: isFocused ? colors.goldenYellow : colors.silver,
                  focused: isFocused,
                })}
            </TouchableOpacity>
          </Flex>
        );
      })}
    </HStack>
  );
}
