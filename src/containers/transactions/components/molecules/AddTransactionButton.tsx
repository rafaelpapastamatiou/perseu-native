import React from "react";
import { Button, Icon } from "native-base";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

interface AddTransactionButtonProps {}

export function AddTransactionButton({}: AddTransactionButtonProps) {
  return (
    <Button rightIcon={<Icon as={AntdIcon} name={"plus"} size={4} />}>
      NOVA TRANSAÇÃO
    </Button>
  );
}
