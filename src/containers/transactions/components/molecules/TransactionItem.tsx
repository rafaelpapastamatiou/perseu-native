import React from "react";
import { Text, VStack } from "native-base";

interface TransactionItemProps {
  quantity: number;
  unitValue: number;
}

export function TransactionItem({
  quantity,
  unitValue
}: TransactionItemProps) {
  return (
    <VStack p={4} bgColor={'dark.100'} shadow={'4'} borderRadius={'8'}>
      <Text>{quantity}x - R${unitValue}</Text>
    </VStack>
  )
}
