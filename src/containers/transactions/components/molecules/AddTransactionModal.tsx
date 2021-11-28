import { Button, FormControl, Input, Modal, VStack } from "native-base";
import React from "react";
import { Spacer } from "../../../../components/atoms/Spacer";

interface AddTransactionModalProps {}

export function AddTransactionModal({}: AddTransactionModalProps) {
  return (
    <Modal size={"xl"} avoidKeyboard>
      <Modal.Content maxW={"400px"}>
        <Modal.CloseButton />
        <Modal.Header>ADICIONAR TRANSAÇÃO</Modal.Header>
        <Modal.Body>
          <VStack>
            <FormControl>
              <FormControl.Label>Categoria</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Ativo</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Valor</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Data</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"ghost"} colorScheme="dark">
            CANCELAR
          </Button>

          <Spacer x={4} />

          <Button>SALVAR</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
