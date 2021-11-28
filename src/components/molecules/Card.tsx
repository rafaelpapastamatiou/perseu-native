import React, { ReactNode } from "react";
import { HStack, Text, VStack } from "native-base";

import { Spacer } from "../atoms/Spacer";

interface CardProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Card({ children, title, subtitle }: CardProps) {
  return (
    <VStack p={4} borderRadius={16} shadow={"9"} bgColor={"dark.100"}>
      {(title || subtitle) && (
        <>
          <HStack alignItems={"center"}>
            {title && (
              <Text fontSize={"2xl"} color={"light.400"}>
                {title}
              </Text>
            )}

            {title && subtitle && <Spacer x={2} />}

            {subtitle && (
              <Text fontSize={"lg"} color={"light.600"}>
                {subtitle}
              </Text>
            )}
          </HStack>

          <Spacer y={4} />
        </>
      )}
      {children}
    </VStack>
  );
}
