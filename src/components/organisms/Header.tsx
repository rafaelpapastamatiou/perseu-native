import React from "react";
import { Avatar, Heading, HStack, Icon, IconButton } from "native-base";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import { Spacer } from "../atoms/Spacer";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HStack p={4} alignItems={"center"}>
      {title && <Heading color={"dark.500"}>{title}</Heading>}

      <IconButton
        rounded={"full"}
        ml="auto"
        _icon={{
          as: AntdIcon,
          name: "bells",
          size: 6,
          color: "dark.500",
        }}
        _pressed={{
          backgroundColor: "brand.500",
          _icon: {
            color: "dark.50",
          },
        }}
      />

      <Spacer x={4} />

      <Avatar bgColor={"dark.200"} size={8} />
    </HStack>
  );
}
