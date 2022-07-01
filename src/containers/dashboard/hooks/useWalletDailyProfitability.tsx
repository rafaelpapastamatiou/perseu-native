import { useQuery } from "react-query";

import { api } from "../../../services/api";
import { WalletProfitabilityItem, WalletProfitabilityResponse } from "../types";

export async function getWalletProfitability(): Promise<WalletProfitabilityItem[]> {
  const { data } = await api.get<WalletProfitabilityResponse>(
    "/wallet/profitability/daily",
  );

  return data.map((item) => ({
    ...item,
    date: new Date(item.date)
  }))
}

export function useWalletProfitability() {
  return useQuery("walletProfitability", () => getWalletProfitability(), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
