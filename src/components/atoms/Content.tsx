import React, { ReactNode } from "react";
import { VStack } from "native-base";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <VStack flex={1} px={4}>
      {children}
    </VStack>
  );
};
