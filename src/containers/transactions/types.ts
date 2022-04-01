export type Transaction = {
  id: string;
  assetId: string;
  walletId: string;
  assetTypeId: string;
  brokerId: string;
  unitValue: number;
  quantity: number;
  tax: number;
  createdAt: Date;
  updatedAt?: Date;
  createdAtFormatted: string;
  updatedAtFormatted?: string;
};
