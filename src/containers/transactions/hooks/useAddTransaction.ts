import { useMutation, useQueryClient } from "react-query";
import { api } from "../../../services/api";
import { Transaction } from "../types";

interface AddTransaction {
  type: string;
  exchange: string;
  symbol: string;
  unitValue: number;
  quantity: number;
  date: Date;
}

export function useAddTransaction() {
  const queryClient = useQueryClient()

  return useMutation(
    async (transaction: AddTransaction) => {
      try {
        const response = await api.post<Transaction>(
          "transactions",
          transaction
        )

        return response.data
      }
      catch (err) {
        console.log(err)
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['transactions'])
        queryClient.invalidateQueries(['walletComposition'])
        queryClient.invalidateQueries(['walletCompositionByType'])
        queryClient.invalidateQueries(['walletEquity'])
      },
      onError: (err) => {
        console.log(err)
      }
    }
  )
}
