import { useQuery } from "react-query";

import { api } from "../../../services/api";
import { WalletCompositionItem } from "../types";

export async function getWalletComposition(): Promise<WalletCompositionItem[]> {
  const { data } = await api.get<WalletCompositionItem[]>(
    "/wallet/composition",
  );

  return data
}

export function useWalletComposition() {
  return useQuery("walletComposition", () => getWalletComposition(), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
