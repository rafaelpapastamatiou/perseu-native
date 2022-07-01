import { useQuery } from "react-query";
import { PaginatedResult } from "../../../protocols/pagination";

import { api } from "../../../services/api";
import { Transaction } from "../types";

export type GetTransactionsResponse = {
  total: number;
  transactions: Transaction[];
};

export async function getTransactions(
  page: number,
  per_page = 10,
): Promise<GetTransactionsResponse> {
  const { data } = await api.get<PaginatedResult<Transaction>>(
    "/transactions",
    {
      params: {
        page,
        limit: per_page,
      },
    }
  );

  const { data: transactions, total } = data

  return {
    transactions,
    total,
  };
}

export function useTransactions(page: number, per_page = 10) {
  return useQuery(["transactions", page], () => getTransactions(page, per_page), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
