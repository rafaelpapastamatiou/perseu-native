import React from "react";
import { Button, Icon } from "native-base";
import { AntDesign as AntdIcon } from "@expo/vector-icons";

interface AddTransactionButtonProps {
  onPress: () => void;
}

export function AddTransactionButton({
  onPress
}: AddTransactionButtonProps) {
  return (
    <Button
      rightIcon={(
        <Icon
          as={AntdIcon}
          name={"plus"}
          size={4}
        />
      )}
      onPress={onPress}
    >
      NOVA TRANSAÇÃO
    </Button>
  );
}
