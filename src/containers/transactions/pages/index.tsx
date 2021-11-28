import React from "react";
import { Center, FlatList, FormControl, Input, Text } from "native-base";

import { Content } from "../../../components/atoms/Content";
import { Spacer } from "../../../components/atoms/Spacer";
import { Header } from "../../../components/organisms/Header";
import { AddTransactionButton } from "../components/molecules/AddTransactionButton";
import { TransactionItem } from "../components/molecules/TransactionItem";
import { AddTransactionModal } from "../components/molecules/AddTransactionModal";

interface TransactionsProps {}

export function Transactions({}: TransactionsProps) {
  return (
    <>
      <Header title="Transações" />

      <Content>
        <Spacer y={4} />

        <Center alignItems={"flex-end"}>
          <AddTransactionButton />
        </Center>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Ativo</FormControl.Label>
          <Input size={"2xl"} shadow={"4"} />
        </FormControl>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Corretora</FormControl.Label>
          <Input size={"2xl"} shadow={"4"} />
        </FormControl>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Carteira</FormControl.Label>
          <Input size={"2xl"} shadow={"4"} />
        </FormControl>

        <Spacer y={4} />

        <FlatList
          data={[]}
          renderItem={({ item, index }) => <TransactionItem />}
          ListEmptyComponent={
            <>
              <Spacer y={4} />
              <Center>
                <Text color={"dark.500"} fontSize={"md"}>
                  Nenhuma transação encontrada
                </Text>
              </Center>
            </>
          }
        />

        <AddTransactionModal />
      </Content>
    </>
  );
}
