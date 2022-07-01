import React, { useState } from "react";
import {
  Center,
  FlatList,
  FormControl,
  Input,
  Text,
  Spinner
} from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Content } from "../../../components/atoms/Content";
import { Spacer } from "../../../components/atoms/Spacer";
import { Header } from "../../../components/organisms/Header";
import { AddTransactionButton } from "../components/molecules/AddTransactionButton";
import { TransactionItem } from "../components/molecules/TransactionItem";
import { GetTransactionsResponse, useTransactions } from "../hooks/useTransactions";
import { usePagination } from "../../../hooks/usePagination";
import { TransactionsStackParamList } from "../transactions.navigator";

interface TransactionsProps {}

const perPage = 100;

export function Transactions({}: TransactionsProps): JSX.Element {
  const navigation = useNavigation<NavigationProp<TransactionsStackParamList>>()

  const [currentPage, setCurrentPage] = useState(0)

  const {
    data,
    isLoading,
    isFetching
  } = useTransactions(currentPage, perPage);

  const { transactions = [], total = 0 } = (data || {}) as GetTransactionsResponse;

  const totalPages = total / perPage

  function handleNextPage() {
    if (currentPage + 1 >= totalPages) return

    setCurrentPage(currentPage + 1)
  }

  function handlePrevPage() {
    if (currentPage - 1 < 0) return

    setCurrentPage(currentPage - 1)
  }

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

        {isLoading && <Spinner />}

        <FlatList
          data={transactions}
          keyExtractor={({ id }) => id}
          renderItem={({ item, index }) => (
            <View key={item.id}>
              {index > 0 && <Spacer y={4} />}

              <TransactionItem
                quantity={item.quantity}
                unitValue={item.unitValue}
                symbol={item.symbol}
                type={item.type}
                date={item.date}
                exchange={item.exchange}
              />
            </View>
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
