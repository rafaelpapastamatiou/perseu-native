import React from "react";
import { Text, VStack } from "native-base";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface TransactionItemProps {
  quantity: number;
  unitValue: number;
  symbol: string;
  exchange: string;
  type: string;
  date: string;
}

const priceFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export function TransactionItem({
  quantity,
  unitValue,
  symbol,
  exchange,
  type,
  date
}: TransactionItemProps) {
  const formattedDate = format(new Date(date), "P 'às' p", { locale: ptBR })

  const formattedUnitValue = priceFormatter.format(Number(unitValue))

  const totalPrice = priceFormatter.format(Number(quantity) * Number(unitValue))

  return (
    <VStack p={4} bgColor={'dark.100'} shadow={'4'} borderRadius={'8'}>
      <Text>{transactionTypeLabels[type]} de {quantity}x {symbol} ({exchange}) por {formattedUnitValue}</Text>
      <Text>Valor total: {totalPrice}</Text>
      <Text>Data: {formattedDate}</Text>
    </VStack>
  )
}

const transactionTypeLabels: { [key: string]: string } = {
  purchase: "COMPRA",
  sale: "VENDA",
}
