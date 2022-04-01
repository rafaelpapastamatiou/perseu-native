import React from "react";
import {
  Center,
  FlatList,
  FormControl,
  Input,
  Text
} from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Content } from "../../../components/atoms/Content";
import { Spacer } from "../../../components/atoms/Spacer";
import { Header } from "../../../components/organisms/Header";
import { AddTransactionButton } from "../components/molecules/AddTransactionButton";
import { TransactionItem } from "../components/molecules/TransactionItem";
import { useTransactions } from "../hooks/useTransactions";
import { usePagination } from "../../../hooks/usePagination";
import { TransactionsStackParamList } from "../transactions.navigator";

interface TransactionsProps {}

export function Transactions({}: TransactionsProps): JSX.Element {
  const navigation = useNavigation<NavigationProp<TransactionsStackParamList>>()

  const {
    currentPage,
    perPage,
    handleNextPage,
    handlePrevPage
  } = usePagination();

  const {
    data,
    isLoading,
    isFetching
  } = useTransactions(currentPage, perPage);

  function handleNavigateToNewTransaction() {
    navigation.navigate("AddTransaction")
  }

  return (
    <>
      <Header title="Transações" />

      <Content>
        <Center alignItems="flex-end">
          <AddTransactionButton
            onPress={handleNavigateToNewTransaction}
          />
        </Center>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Ativo</FormControl.Label>
          <Input size="2xl" shadow="4" />
        </FormControl>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Corretora</FormControl.Label>
          <Input size="2xl" shadow="4" />
        </FormControl>

        <Spacer y={4} />

        <FormControl>
          <FormControl.Label>Carteira</FormControl.Label>
          <Input size="2xl" shadow="4" />
        </FormControl>

        <Spacer y={8} />

        <FlatList
          data={data ? data.transactions : []}
          renderItem={({ item, index }) => (
            <>
              {index > 0 && <Spacer y={4} />}
              <TransactionItem
                key={item.id}
                quantity={item.quantity}
                unitValue={item.unit_value}
              />
            </>
          )}
          ListEmptyComponent={
            <>
              <Spacer y={4} />
              <Center>
                <Text color="dark.500" fontSize="md">
                  Nenhuma transação encontrada
                </Text>
              </Center>
            </>
          }
        />
      </Content>
    </>
  );
}
