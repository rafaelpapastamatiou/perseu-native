export type WalletCompositionItem = {
  symbol: string;
  type: string;
  percentage: number;
}

export type WalletCompositionByTypeItem = {
  type: string;
  percentage: number;
}

export type WalletProfitabilityResponse = {
  percentage: number;
  date: string;
}[]

export type WalletProfitabilityItem = {
  percentage: number;
  date: Date;
}

export type WalletEquityResponse = {
  total: number;
  date: string;
}[]

export type WalletEquityItem = {
  total: number;
  date: Date;
}

