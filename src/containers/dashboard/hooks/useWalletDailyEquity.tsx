import { useQuery } from "react-query";

import { api } from "../../../services/api";
import { WalletEquityResponse, WalletEquityItem } from "../types";

export async function getWalletEquity(): Promise<WalletEquityItem[]> {
  const { data } = await api.get<WalletEquityResponse>(
    "/wallet/equity/daily",
  );

  return data.map((item) => ({
    ...item,
    date: new Date(item.date)
  }))
}

export function useWalletEquity() {
  return useQuery("walletEquity", () => getWalletEquity(), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
