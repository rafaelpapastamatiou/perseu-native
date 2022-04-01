import { useQuery } from "react-query";

import { api } from "../../../services/api";
import { Transaction } from "../types";

type GetTransactionsResponse = {
  totalCount: number;
  transactions: Transaction[];
};

export async function getTransactions(
  page: number,
  per_page = 10,
): Promise<GetTransactionsResponse> {
  const { data, headers } = await api.get(
    "/transactions",
    {
      params: {
        page,
        per_page,
      },
    }
  );

  console.log(data)

  const { transactions: transactionsData } = data as { transactions: Transaction[] }

  const totalCount = Number(headers["x-total-count"]);

  const transactions = transactionsData.map<Transaction>((transaction) => ({
    ...transaction,
    createdAtFormatted: new Date(transaction.createdAt).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      },
    ),
    updatedAtFormatted:
      transaction.updatedAt &&
      new Date(transaction.updatedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  }));

  return {
    transactions,
    totalCount,
  };
}

export function useTransactions(page: number, per_page = 10) {
  return useQuery(["transactions", page], () => getTransactions(page, per_page), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
