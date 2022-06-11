import { useQuery } from "react-query";

import { api } from "../../../services/api";
import { WalletCompositionByTypeItem } from "../types";

export async function getWalletCompositionByType(): Promise<WalletCompositionByTypeItem[]> {
  const { data } = await api.get<WalletCompositionByTypeItem[]>(
    "/wallet/compositionByType",
  );

  return data
}

export function useWalletCompositionByType() {
  return useQuery("walletCompositionByType", () => getWalletCompositionByType(), {
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });
}
