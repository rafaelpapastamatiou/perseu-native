import React from "react";
import { Box } from "native-base";

interface SpacerProps {
  x?: number;
  y?: number;
}

export function Spacer({ x = 0, y = 0 }: SpacerProps) {
  return <Box mt={y / 2} mb={y / 2} mr={x / 2} ml={x / 2} />;
}
