import { useMutation, useQueryClient } from "react-query";
import { api } from "../../../services/api";
import { Transaction } from "../types";

interface AddTransaction {
  assetTypeId: string;
  brokerId: string;
  assetId: string;
  walletId: string;
  unitValue: number;
  quantity: number;
  date?: Date;
  tax?: number;
}

export function useAddTransaction() {
  const queryClient = useQueryClient()

  return useMutation(
    async (transaction: AddTransaction) => {
      const response = await api.post<Transaction>(
        "transactions",
        transaction
      )

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['transactions'])
      }
    }
  )
}
