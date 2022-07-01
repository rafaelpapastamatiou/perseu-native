import React from "react";
import { Avatar, Heading, HStack, Icon, IconButton } from "native-base";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import { Spacer } from "../atoms/Spacer";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  const { signOut } = useAuth()

  const { type, routes } = useNavigationState(state => state)

  const hasGoBackButton = type === 'stack' && routes.length > 1

  return (
    <HStack p={4} alignItems={"center"} mb={2}>
      {hasGoBackButton && (
        <IconButton
          rounded={"full"}
          _icon={{
            as: AntdIcon,
            name: "left",
            size: 6,
            color: "dark.500",
          }}
          _pressed={{
            backgroundColor: "brand.500",
            _icon: {
              color: "dark.50",
            },
          }}
          onPress={() => navigation.goBack()}
        />
      )}

      {hasGoBackButton && title && (
        <Spacer x={4} />
      )}

      {title && <Heading color={"dark.500"}>{title}</Heading>}

      <IconButton
        rounded={"full"}
        ml="auto"
        _icon={{
          as: AntdIcon,
          name: "logout",
          size: 6,
          color: "dark.500",
        }}
        _pressed={{
          backgroundColor: "brand.500",
          _icon: {
            color: "dark.50",
          },
        }}
        onPress={signOut}
      />

      <Spacer x={4} />

      <Avatar bgColor={"dark.200"} size={8} />
    </HStack>
  );
}
