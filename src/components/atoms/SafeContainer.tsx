import React, { ReactNode } from "react";
import { Container, VStack } from "native-base";

interface SafeContainerProps {
  children: ReactNode;
}

export const SafeContainer = ({ children }: SafeContainerProps) => {
  return (
    <VStack flex={1} safeArea bgColor="dark.50">
      {children}
    </VStack>
  );
};
