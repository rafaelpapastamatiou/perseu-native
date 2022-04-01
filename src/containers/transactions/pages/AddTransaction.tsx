import React from "react";
import {
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack
} from "native-base";

import { Spacer } from "../../../components/atoms/Spacer";
import { Header } from "../../../components/organisms/Header";
import { Content } from "../../../components/atoms/Content";
import { useAddTransaction } from "../hooks/useAddTransaction";

interface AddTransactionFormData {
  assetTypeId: string;
  brokerId: string;
  assetId: string;
  walletId: string;
  unitValue: number;
  quantity: number;
  date?: Date;
  tax?: number;
}

export function AddTransaction() {
  const addTransaction = useAddTransaction()

  async function onSubmit() {
    await addTransaction.mutateAsync({
      assetId: "1",
      assetTypeId: "1",
      brokerId: "1",
      quantity: 10,
      unitValue: 25,
      walletId: "1",
    })
  }

  return (
    <>
      <Header
        title="Nova transação"
      />

      <ScrollView>
        <Content>
          <VStack>
            <FormControl>
              <FormControl.Label>Categoria</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Corretora</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Ativo</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Carteira</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Valor unitário</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Quantidade</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Valor das taxas</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={4} />

            <FormControl>
              <FormControl.Label>Data</FormControl.Label>
              <Input bgColor={"dark.50"} size={"2xl"} />
            </FormControl>

            <Spacer y={8} />

            <Button size={'lg'} onPress={onSubmit}>
              ADICIONAR
            </Button>

            <Spacer y={16} />

          </VStack>
        </Content>
      </ScrollView>
    </>

  );
}
